import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import type * as p_di from 'pareto-core/interface/data'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_variables from 'pareto-core/implementation/transformer/specials/variables'

//data types
import type * as d_in from "../../../interface/schemas/prose.js"
import type * as d_out from "../../../interface/schemas/semi_lines.js"

namespace interface_ {

    export type Paragraph = p_i.Transformer_With_Parameter<
        d_in.Paragraph,
        d_out.Lines,
        {
            'indentation level': number
        }
    >

    export type Sentence = p_i.Transformer_With_Parameter<
        d_in.Sentence,
        d_out.Lines,
        {
            'indentation level': number
        }
    >

}

export const Paragraph: interface_.Paragraph = ($, $p) => p_.from.state($).decide(
    ($) => {
        switch ($[0]) {
            case 'composed': return p_.option($, ($) => p_.from.list($).flatten(
                ($) => Paragraph($, $p)
            ))
            case 'sentences': return p_.option($, ($) => p_.from.list($).flatten(
                ($) => Sentence($, $p)
            ))
            case 'optional': return p_.option($, ($) => p_.from.optional($).decide(
                ($) => Paragraph($, $p),
                () => p_.literal.list([]),
            ))
            case 'nothing': return p_.option($, ($) => p_.literal.list([]))
            case 'rich list': return p_.option($, ($) => {
                const $v_rich_list = $
                return p_.from.list($.items).on_has_items(
                    ($) => p_.literal.segmented_list([
                        p_.from.optional($v_rich_list['if not empty'].before).decide(
                            ($) => Sentence($, $p),
                            () => p_.literal.list([]),
                        ),
                        p_variables(
                            () => {
                                const $v_if_not_empty = $v_rich_list['if not empty']
                                const $v_amount = p_.from.list($).amount_of_items()
                                let current = -1
                                return p_.from.list($).flatten(
                                    ($) => p_variables(
                                        () => {
                                            const sentence = $
                                            current++
                                            return Sentence(
                                                p_.from.optional($v_if_not_empty.separator).decide(
                                                    ($) => current < $v_amount - 1
                                                        ? p_.literal.segmented_list([
                                                            sentence,
                                                            p_.literal.list([
                                                                $
                                                            ])
                                                        ])
                                                        : sentence,
                                                    () => $
                                                ),
                                                {
                                                    'indentation level': $p['indentation level'] + ($v_if_not_empty.indent ? 1 : 0),
                                                }
                                            )
                                        })
                                )
                            }),
                        p_.from.optional($v_rich_list['if not empty'].after).decide(
                            ($) => Sentence($, $p),
                            () => p_.literal.list([]),
                        ),
                    ]),
                    () => p_.from.optional($['if empty']).decide(
                        ($) => Sentence($, $p),
                        () => p_.literal.list([]),
                    ),
                )
            })
            default: return p_.exhaustive($[0])
        }
    }
)

type Summary = p_di.List<Action>


type Action =
    | ['append', string]
    | ['add paragraph', d_out.Lines]

const Phrase = (
    $: d_in.Phrase,
    $p: {
        'indentation level': number,

    },
): Summary => {
    return p_.from.state($).decide(
        ($): Summary => {
            switch ($[0]) {
                case 'value': return p_.option($, ($) => {
                    return p_.literal.list<Action>([
                        ['append', p_.from.state($).decide(
                            ($): string => {
                                switch ($[0]) {
                                    case 'text': return p_.option($, ($) => $)
                                    case 'list of characters': return p_.option($, ($) => p_text_from_list(
                                        $,
                                        ($) => $
                                    ))
                                    default: return p_.exhaustive($[0])
                                }
                            })],

                    ])
                })
                case 'indent': return p_.option($, ($) => {
                    const paragraph = Paragraph($, {
                        'indentation level': $p['indentation level'] + 1,
                    })
                    if (p_.from.list(paragraph).amount_of_items() !== 0) {
                        return p_.literal.list<Action>([
                            ['add paragraph', paragraph]
                        ])
                    } else {
                        return p_.literal.list<Action>([])
                    }
                })
                case 'rich list': return p_.option($, ($) => {
                    const $v_rich_list = $
                    return p_.from.list($.items).on_has_items(
                        ($) => {
                            const sep = $v_rich_list['if not empty'].separator
                            const amount = p_.from.list($).amount_of_items()
                            let current = -1
                            return p_.literal.segmented_list([
                                Phrase($v_rich_list['if not empty'].before, $p),
                                p_.from.list($).flatten(
                                    ($): Summary => {
                                        current++
                                        return current < amount - 1
                                            ? p_.literal.segmented_list([
                                                Phrase($, $p),
                                                Phrase(sep, $p)
                                            ])
                                            : Phrase($, $p)
                                    }
                                ),
                                Phrase($v_rich_list['if not empty'].after, $p)

                            ])
                        },
                        () => Phrase($['if empty'], $p)
                    )
                })
                case 'composed': return p_.option($, ($) => p_.from.list($).flatten(
                    ($) => Phrase($, $p)
                ))
                case 'optional': return p_.option($, ($) => p_.from.optional($).decide(
                    ($) => Phrase($, $p),
                    () => p_.literal.list<Action>([]),
                ))
                case 'nothing': return p_.option($, ($) => p_.literal.list<Action>([]))
                default: return p_.exhaustive($[0])
            }
        })
}

export const Sentence: interface_.Sentence = ($, $p) => p_list_build_deprecated(
    ($i) => {
        let current_line: null | string = null
        let found_indentation = false
        p_.from.list($).map(
            ($) => p_.from.list(Phrase(
                $,
                {
                    'indentation level': $p['indentation level'],
                }
            )
            ).map(
                ($) => p_.from.state($).decide(
                    ($): null => {
                        switch ($[0]) {
                            case 'append': return p_.option($, ($) => {
                                if (current_line === null) {
                                    current_line = ""
                                }
                                current_line += $
                                return null
                            })
                            case 'add paragraph': return p_.option($, ($) => {
                                found_indentation = true
                                if (current_line !== null) {
                                    $i['add item']({
                                        'indentation': $p['indentation level'],
                                        'text': current_line,
                                    })
                                    current_line = null
                                }
                                $i['add list']($)
                                return null
                            })
                            default: return p_.exhaustive($[0])
                        }
                    })
            )
        )
        //this is a sentence, always add the current line if no indentation was found, even if it's null, to create an empty line
        if (current_line === null) {
            if (!found_indentation) {
                $i['add item']({
                    'indentation': $p['indentation level'],
                    'text': "",
                })
            }
        } else {
            $i['add item']({
                'indentation': $p['indentation level'],
                'text': current_line,
            })
        }
    }
)