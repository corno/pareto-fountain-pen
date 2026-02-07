import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_variables from 'pareto-core/dist/_p_variables'

import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/semi_lines/data"

export const Directory = (
    $: d_in.Directory,
): d_out.Directory => _p.dictionary.from.dictionary($).map(($) => _p.decide.state($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Paragraph($, {
            'indentation level': 0,
        })])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
        default: return _p.au($[0])
    }
}))



type New_Phrase =
    | ['indent', d_out.Lines]
    | ['value', d_in.Phrase.value]
    | ['rich list', d_in.Phrase.rich_list]

type List_of_new_phrases = _pi.List<New_Phrase>

export const Paragraph = (
    $: d_in.Paragraph,
    $p: {
        'indentation level': number,
    }
): d_out.Lines => _p.decide.state($, ($) => {
    switch ($[0]) {
        case 'composed': return _p.ss($, ($) => _p.list.from.list(
            $,
        ).flatten(
            ($) => Paragraph($, $p)
        ))
        case 'sentences': return _p.ss($, ($) => _p.list.from.list(
            $,
        ).flatten(
            ($) => Sentence($, $p)
        ))
        case 'optional': return _p.ss($, ($) => $.__decide(
            ($) => Paragraph($, $p),
            () => _p.list.literal([]),
        ))
        case 'nothing': return _p.ss($, ($) => _p.list.literal([]))
        case 'rich list': return _p.ss($, ($) => _p.decide.boolean(
            _p.boolean.from.list($.items).is_empty(),
            () => $['if empty'].__decide(
                ($) => Sentence($, $p),
                () => _p.list.literal([]),
            ),
            () => _p.list.nested_literal_old([
                $['if not empty'].before.__decide(
                    ($) => Sentence($, $p),
                    () => _p.list.literal([]),
                ),
                _p_variables(() => {
                    const if_not_empty = $['if not empty']
                    const amount = $.items.__get_number_of_items()
                    let current = -1
                    return _p.list.from.list(
                        $.items
                    ).flatten(
                        ($) => _p_variables(() => {
                            const sentence = $
                            current++
                            return Sentence(
                                if_not_empty.separator.__decide(
                                    ($) => current < amount - 1
                                        ? _p.list.nested_literal_old([
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
                    () => _p.list.literal([]),
                ),
            ])
        ))
        default: return _p.au($[0])
    }
})

export const Sentence = (
    $: d_in.Sentence,
    $p: {
        'indentation level': number
    }
): d_out.Lines => _p_list_build_deprecated(($i) => {
    let current_line: null | string = null
    let found_indentation = false

    const handle_phrase = ($: d_in.Phrase): void => {
        Phrase($, $p).__l_map(($) => {
            _p.decide.state($, ($) => {
                switch ($[0]) {
                    case 'value': return _p.ss($, ($) => {
                        if (current_line === null) {
                            current_line = ""
                        }
                        current_line += _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'text': return _p.ss($, ($) => $)
                                case 'list of characters': return _p.ss($, ($) => _p_text_from_list($, ($) => $))
                                default: return _p.au($[0])
                            }
                        })
                    })
                    case 'indent': return _p.ss($, ($) => {
                        found_indentation = true
                        if (current_line !== null) {
                            $i['add item']({
                                'indentation': $p['indentation level'],
                                'text': current_line,
                            })
                            current_line = null
                        }
                        return $i['add list']($)
                    })
                    case 'rich list': return _p.ss($, ($) => _p.decide.boolean(
                        _p.boolean.from.list($.items).is_empty(),
                        () => handle_phrase($['if empty']),
                        () => {
                            const sep = $['if not empty'].separator
                            const amount = $.items.__get_number_of_items()
                            let current = -1
                            handle_phrase($['if not empty'].before)
                            $.items.__l_map(($) => {
                                current++
                                handle_phrase($)
                                if (current < amount - 1) {
                                    handle_phrase(sep)
                                }
                            })
                            handle_phrase($['if not empty'].after)
                        }
                    ))
                    default: return _p.au($[0])
                }
            })
        })
    }

    $.__l_map(($) => {
        handle_phrase($)
    })

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

export const Phrase = (
    $: d_in.Phrase,
    $p: {
        'indentation level': number
    }
): List_of_new_phrases => _p.decide.state($, ($): List_of_new_phrases => {
    switch ($[0]) {
        case 'value': return _p.ss($, ($) => _p.list.literal([
            ['value', $]
        ]))
        case 'indent': return _p.ss($, ($) => _p.list.literal([
            ['indent', Paragraph($, {
                'indentation level': $p['indentation level'] + 1,
            })]
        ]))
        case 'composed': return _p.ss($, ($) => _p.list.from.list(
            $,
        ).flatten(
            ($) => Phrase($, { 'indentation level': $p['indentation level'] })))
        case 'optional': return _p.ss($, ($) => _p.decide.optional(
            $,
            ($) => Phrase($, { 'indentation level': $p['indentation level'] }),
            () => _p.list.literal([]),
        ))
        case 'nothing': return _p.ss($, ($) => _p.list.literal([]))
        case 'rich list': return _p.ss($, ($) => _p.list.literal([
            ['rich list', $]
        ]))
        default: return _p.au($[0])
    }
})