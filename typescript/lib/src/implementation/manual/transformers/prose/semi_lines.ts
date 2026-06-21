import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_list_build_deprecated from 'pareto-core/dist/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'
import p_variables from 'pareto-core/dist/implementation/transformer/specials/variables'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/prose/data"
import * as d_out from "../../../../interface/generated/liana/schemas/semi_lines/data"

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

export const Paragraph: interface_.Paragraph = ($, $p) => p_.from.state($).decide(($) => {
    switch ($[0]) {
        case 'composed': return p_.ss($, ($) => p_.from.list(
            $,
        ).flatten(
            ($) => Paragraph($, $p)
        ))
        case 'sentences': return p_.ss($, ($) => p_.from.list(
            $,
        ).flatten(
            ($) => Sentence($, $p)
        ))
        case 'optional': return p_.ss($, ($) => p_.from.optional($).decide(
            ($) => Paragraph($, $p),
            () => p_.literal.list([]),
        ))
        case 'nothing': return p_.ss($, ($) => p_.literal.list([]))
        case 'rich list': return p_.ss($, ($) => p_.from.boolean(
            p_.from.list($.items).is_empty()
        ).decide(
            () => p_.from.optional($['if empty']).decide(
                ($) => Sentence($, $p),
                () => p_.literal.list([]),
            ),
            () => p_.literal.nested_list([
                p_.from.optional($['if not empty'].before).decide(
                    ($) => Sentence($, $p),
                    () => p_.literal.list([]),
                ),
                p_variables(() => {
                    const if_not_empty = $['if not empty']
                    const amount = p_.from.list($.items).amount_of_items()
                    let current = -1
                    return p_.from.list(
                        $.items
                    ).flatten(
                        ($) => p_variables(() => {
                            const sentence = $
                            current++
                            return Sentence(
                                p_.from.optional(if_not_empty.separator).decide(
                                    ($) => current < amount - 1
                                        ? p_.literal.nested_list([
                                            sentence,
                                            p_.literal.list([
                                                $
                                            ])
                                        ])
                                        : sentence,
                                    () => $
                                ),
                                {
                                    'indentation level': $p['indentation level'] + (if_not_empty.indent ? 1 : 0),
                                }
                            )
                        })
                    )
                }),
                p_.from.optional($['if not empty'].after).decide(
                    ($) => Sentence($, $p),
                    () => p_.literal.list([]),
                ),
            ])
        ))
        default: return p_.au($[0])
    }
})

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
    return p_.from.state($).decide(($): Summary => {
        switch ($[0]) {
            case 'value': return p_.ss($, ($) => {
                return p_.literal.list<Action>([
                    ['append', p_.from.state($).decide(($): string => {
                        switch ($[0]) {
                            case 'text': return p_.ss($, ($) => $)
                            case 'list of characters': return p_.ss($, ($) => p_text_from_list(
                                $,
                                ($) => $
                            ))
                            default: return p_.au($[0])
                        }
                    })],

                ])
            })
            case 'indent': return p_.ss($, ($) => {
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
            case 'rich list': return p_.ss($, ($) => p_.from.boolean(
                p_.from.list($.items).is_empty(),
            ).decide(
                () => Phrase($['if empty'], $p),
                () => {
                    const sep = $['if not empty'].separator
                    const amount = p_.from.list($.items).amount_of_items()
                    let current = -1
                    return p_.literal.nested_list([
                        Phrase($['if not empty'].before, $p),
                        p_.from.list(
                            $.items
                        ).flatten(
                            ($): Summary => {
                                current++
                                return current < amount - 1
                                    ? p_.literal.nested_list([
                                        Phrase($, $p),
                                        Phrase(sep, $p)
                                    ])
                                    : Phrase($, $p)
                            }
                        ),
                        Phrase($['if not empty'].after, $p)

                    ])
                }
            ))
            case 'composed': return p_.ss($, ($) => p_.from.list(
                $,
            ).flatten(
                ($) => Phrase($, $p)
            ))
            case 'optional': return p_.ss($, ($) => p_.from.optional(
                $,
            ).decide(
                ($) => Phrase($, $p),
                () => p_.literal.list<Action>([]),
            ))
            case 'nothing': return p_.ss($, ($) => p_.literal.list<Action>([]))
            default: return p_.au($[0])
        }
    })
}

export const Sentence: interface_.Sentence = ($, $p) => p_list_build_deprecated(($i) => {
    let current_line: null | string = null
    let found_indentation = false
    p_.from.list($).map(
        ($) => p_.from.list(
            Phrase(
                $,
                {
                    'indentation level': $p['indentation level'],
                }
            )
        ).map(
            ($) => p_.from.state($).decide(($): null => {
                switch ($[0]) {
                    case 'append': return p_.ss($, ($) => {
                        if (current_line === null) {
                            current_line = ""
                        }
                        current_line += $
                        return null
                    })
                    case 'add paragraph': return p_.ss($, ($) => {
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
                    default: return p_.au($[0])
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
})