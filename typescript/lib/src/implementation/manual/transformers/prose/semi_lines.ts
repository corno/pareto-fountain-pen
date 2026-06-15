import * as pt from 'pareto-core/dist/implementation/transformer'
import * as p_di from 'pareto-core/dist/interface/data'
import p_list_build_deprecated from 'pareto-core/dist/implementation/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'
import p_variables from 'pareto-core/dist/implementation/specials/variables'

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
            () => pt.literal.list([]),
        ))
        case 'nothing': return pt.ss($, ($) => pt.literal.list([]))
        case 'rich list': return pt.ss($, ($) => pt.decide.boolean(
            pt.boolean.from.list($.items).is_empty(),
            () => $['if empty'].__decide(
                ($) => Sentence($, $p),
                () => pt.literal.list([]),
            ),
            () => pt.literal.nested_list([
                $['if not empty'].before.__decide(
                    ($) => Sentence($, $p),
                    () => pt.literal.list([]),
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
                                        ? pt.literal.nested_list([
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
                    () => pt.literal.list([]),
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
                return pt.literal.list<Action>([
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
                    return pt.literal.list<Action>([
                        ['add paragraph', paragraph]
                    ])
                } else {
                    return pt.literal.list<Action>([])
                }
            })
            case 'rich list': return pt.ss($, ($) => pt.decide.boolean(
                pt.boolean.from.list($.items).is_empty(),
                () => Phrase($['if empty'], $p),
                () => {
                    const sep = $['if not empty'].separator
                    const amount = $.items.__get_number_of_items()
                    let current = -1
                    return pt.literal.nested_list([
                        Phrase($['if not empty'].before, $p),
                        pt.list.from.list(
                            $.items
                        ).flatten(
                            ($): Summary => {
                                current++
                                return current < amount - 1
                                    ? pt.literal.nested_list([
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
                () => pt.literal.list<Action>([]),
            ))
            case 'nothing': return pt.ss($, ($) => pt.literal.list<Action>([]))
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