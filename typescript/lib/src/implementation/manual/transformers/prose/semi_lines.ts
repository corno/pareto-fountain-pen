import * as pt from 'pareto-core/dist/transformer/implementation'
import * as p_di from 'pareto-core/dist/data/interface'
import p_list_build_deprecated from 'pareto-core/dist/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/dist/specials/text_from_list'
import p_variables from 'pareto-core/dist/specials/variables'

import * as d_in from "../../../../interface/generated/liana/schemas/prose/data"
import * as d_out from "../../../../interface/generated/liana/schemas/semi_lines/data"

export const Paragraph = (
    $: d_in.Paragraph,
    $p: {
        'indentation level': number,
    }
): d_out.Lines => pt.decide.state($, ($) => {
    switch ($[0]) {
        case 'composed': return pt.ss($, ($) => pt.list.from.list(
            $,
        ).flatten(
            ($) => Paragraph($, $p)
        ))
        case 'sentences': return pt.ss($, ($) => pt.list.from.list(
            $,
        ).flatten(
            ($) => Sentence($, $p)
        ))
        case 'optional': return pt.ss($, ($) => $.__decide(
            ($) => Paragraph($, $p),
            () => pt.list.literal([]),
        ))
        case 'nothing': return pt.ss($, ($) => pt.list.literal([]))
        case 'rich list': return pt.ss($, ($) => pt.decide.boolean(
            pt.boolean.from.list($.items).is_empty(),
            () => $['if empty'].__decide(
                ($) => Sentence($, $p),
                () => pt.list.literal([]),
            ),
            () => pt.list.nested_literal_old([
                $['if not empty'].before.__decide(
                    ($) => Sentence($, $p),
                    () => pt.list.literal([]),
                ),
                p_variables(() => {
                    const if_not_empty = $['if not empty']
                    const amount = $.items.__get_number_of_items()
                    let current = -1
                    return pt.list.from.list(
                        $.items
                    ).flatten(
                        ($) => p_variables(() => {
                            const sentence = $
                            current++
                            return Sentence(
                                if_not_empty.separator.__decide(
                                    ($) => current < amount - 1
                                        ? pt.list.nested_literal_old([
                                            sentence,
                                            [
                                                $
                                            ]
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
                $['if not empty'].after.__decide(
                    ($) => Sentence($, $p),
                    () => pt.list.literal([]),
                ),
            ])
        ))
        default: return pt.au($[0])
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
    return pt.decide.state($, ($): Summary => {
        switch ($[0]) {
            case 'value': return pt.ss($, ($) => {
                return pt.list.literal<Action>([
                    ['append', pt.decide.state($, ($): string => {
                        switch ($[0]) {
                            case 'text': return pt.ss($, ($) => $)
                            case 'list of characters': return pt.ss($, ($) => p_text_from_list($, ($) => $))
                            default: return pt.au($[0])
                        }
                    })],

                ])
            })
            case 'indent': return pt.ss($, ($) => {
                const paragraph = Paragraph($, {
                    'indentation level': $p['indentation level'] + 1,
                })
                if (paragraph.__get_number_of_items() !== 0) {
                    return pt.list.literal<Action>([
                        ['add paragraph', paragraph]
                    ])
                } else {
                    return pt.list.literal<Action>([])
                }
            })
            case 'rich list': return pt.ss($, ($) => pt.decide.boolean(
                pt.boolean.from.list($.items).is_empty(),
                () => Phrase($['if empty'], $p),
                () => {
                    const sep = $['if not empty'].separator
                    const amount = $.items.__get_number_of_items()
                    let current = -1
                    return pt.list.nested_literal_old([
                        Phrase($['if not empty'].before, $p),
                        pt.list.from.list(
                            $.items
                        ).flatten(
                            ($): Summary => {
                                current++
                                return current < amount - 1
                                    ? pt.list.nested_literal_old([
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
            case 'composed': return pt.ss($, ($) => pt.list.from.list(
                $,
            ).flatten(
                ($) => Phrase($, $p)
            ))
            case 'optional': return pt.ss($, ($) => pt.decide.optional(
                $,
                ($) => Phrase($, $p),
                () => pt.list.literal<Action>([]),
            ))
            case 'nothing': return pt.ss($, ($) => pt.list.literal<Action>([]))
            default: return pt.au($[0])
        }
    })
}

export const Sentence = (
    $: d_in.Sentence,
    $p: {
        'indentation level': number
    }
): d_out.Lines => p_list_build_deprecated(($i) => {
    let current_line: null | string = null
    let found_indentation = false
    $.__l_map(
        ($) => Phrase(
            $,
            {
                'indentation level': $p['indentation level'],
            }
        ).__l_map(
            ($) => pt.decide.state($, ($): null => {
                switch ($[0]) {
                    case 'append': return pt.ss($, ($) => {
                        if (current_line === null) {
                            current_line = ""
                        }
                        current_line += $
                        return null
                    })
                    case 'add paragraph': return pt.ss($, ($) => {
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
                    default: return pt.au($[0])
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