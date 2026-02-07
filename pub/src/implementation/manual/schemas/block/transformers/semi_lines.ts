import * as _p from 'pareto-core/dist/assign'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/semi_lines/data"

export const Directory = (
    $: d_in.Directory,
): d_out.Directory => _p.dictionary.from.dictionary($).map(($) => _p.decide.state($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Paragraph($)])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
        default: return _p.au($[0])
    }
}))


//this implementation is still procedural and should be refactored to a functional style
//as a starter I've already made it return null values
type Nested_Nothing = _pi.List<null>

export const Paragraph = (
    $: d_in.Paragraph,
): d_out.Lines => _p_list_build_deprecated(($i) => {


    const Paragraph_2 = (
        $: d_in.Paragraph,
        $p: {
            'current indentation': number
        }
    ): Nested_Nothing => {
        switch ($[0]) {
            // case 'block':
            //     return _p.ss($, ($) => {
            //         $i['add item']({
            //             'indentation': $p['current indentation'],
            //             'text': $,
            //         })
            //         return _p.list.literal([]) //nothing returned
            //     })
            // case 'nested block':
            //     return _p.ss($, ($) => Block($, { 'current indentation': $p['current indentation'] }))
            case 'nothing':
                return _p.ss($, ($) => _p.list.literal([]))
            case 'rich list':
                return _p.ss($, ($) => {
                    if ($.items.__get_number_of_items() === 0) {
                        return Sentence($['if empty'], { 'current indentation': $p['current indentation'] })
                    } else {
                        const sep = $['if not empty'].separator
                        const indent = $['if not empty'].indent
                        let counter = -1
                        const length = $.items.__get_number_of_items()
                        Sentence(_p.list.literal([$['if not empty'].before]), { 'current indentation': $p['current indentation'] })
                        // $['if not empty'].indent,
                        _p.list.from.list( //replace by iterate
                            $.items,
                        ).map(
                            ($) => {
                                counter++
                                Sentence($, { 'current indentation': $p['current indentation'] })
                                Sentence(
                                    (counter < length - 1)
                                        ? _p.list.literal([sep])
                                        : _p.list.literal([]),
                                    { 'current indentation': $p['current indentation'] + (indent ? 1 : 0) }
                                )
                                return _p.list.literal([]) //nothing returned
                            }
                        )
                        Sentence(_p.list.literal([$['if not empty'].after]), { 'current indentation': $p['current indentation'] })
                        return _p.list.literal([]) //nothing returned
                    }
                })
            // case 'sub group':
            //     return _p.ss($, ($) => Group($, { 'current indentation': $p['current indentation'] }))
            case 'optional':
                return _p.ss($, ($) => _p.decide.optional(
                    $,
                    ($) => Paragraph_2(
                        $,
                        {
                            'current indentation': $p['current indentation']
                        }
                    ),
                    () => _p.list.literal([]),
                ))
            case 'sentences': return _p.ss($, ($) => {
                $.__l_map(($) => Sentence($, { 'current indentation': $p['current indentation'] }))
                return _p.list.literal([]) //nothing returned
            })
            case 'composed': return _p.ss($, ($) => {
                $.__l_map(($) => Paragraph_2(
                    $,
                    {
                        'current indentation': $p['current indentation']
                    }
                ))
                return _p.list.literal([]) //nothing returned   
            })
            default: return _p.au($[0])
        }
    }
    // const Group = (
    //     $: d_in.Group,
    //     $p: {
    //         'current indentation': number
    //     }
    // ): Nested_Nothing => _p.list.flatten($, ($) => Group_Part($, { 'current indentation': $p['current indentation'] }))

    const Sentence = (
        $: d_in.Paragraph.sentences.L,
        $p: {
            'current indentation': number
        }
    ): Nested_Nothing => {
        let current_line: null | string = null

        const Phrase = (
            $: d_in.Phrase
        ): Nested_Nothing => {
            switch ($[0]) {
                case 'indent':
                    return _p.ss($, ($) => {
                        if (current_line !== null) {
                            $i['add item']({
                                'indentation': $p['current indentation'],
                                'text': current_line,
                            })
                        }
                        current_line = null
                        Paragraph_2($, { 'current indentation': $p['current indentation'] + 1 })
                        return _p.list.literal([])//placeholder
                    })
                case 'nothing':
                    return _p.ss($, ($) => _p.list.literal([]))
                case 'rich list':
                    return _p.ss($, ($) => {
                        if ($.items.__get_number_of_items() === 0) {
                            return Phrase($['if empty'])
                        } else {
                            let is_first = true
                            const sep = $['if not empty'].separator
                            Phrase($['if not empty'].before)
                            _p.list.from.list( //replace by iterate
                                $.items,
                            ).map(
                                ($) => {
                                    if (!is_first) {
                                        Phrase(sep)
                                    }
                                    is_first = false
                                    Phrase($)
                                    return null
                                })
                            Phrase($['if not empty'].after)
                            return _p.list.literal([])
                        }
                    })
                // case 'sub block':
                //     return _p.ss($, ($) => Block2($))
                case 'optional':
                    return _p.ss($, ($) => _p.decide.optional(
                        $,
                        ($) => Phrase($),
                        () => _p.list.literal([]),
                    ))
                case 'composed': return _p.ss($, ($) => {
                    $.__l_map(($) => Phrase($))
                    return _p.list.literal([]) //nothing returned
                })
                case 'single line': return _p.ss($, ($) => {
                    const Single_Line = ($: d_in.Single_Line) => {
                        $.__l_map(($) => _p.decide.state($, ($) => {
                            switch ($[0]) {
                                case 'rich list':
                                    return _p.ss($, ($) => {
                                        if ($.items.__get_number_of_items() === 0) {
                                            return Single_Line($['if empty'])
                                        } else {
                                            let is_first = true
                                            const sep = $['if not empty'].separator
                                            Single_Line($['if not empty'].before)
                                            _p.list.from.list( //replace by iterate
                                                $.items,
                                            ).map(
                                                ($) => {
                                                    if (!is_first) {
                                                        Single_Line(sep)
                                                    }
                                                    is_first = false
                                                    Single_Line($)
                                                    return null
                                                })
                                            Single_Line($['if not empty'].after)
                                            return _p.list.literal([])
                                        }
                                    })
                                case 'snippet':
                                    return _p.ss($, ($) => {
                                        current_line = current_line === null ? $ : current_line + $
                                        return _p.list.literal([])//nothing returned
                                    })
                                case 'serialize':
                                    return _p.ss($, ($) => {
                                        const as_string = _p_text_from_list($, ($) => $)
                                        current_line = current_line === null ? as_string : current_line + as_string
                                        return _p.list.literal([])//nothing returned
                                    })
                                default: return _p.au($[0])
                            }
                        }))
                    }
                    Single_Line($)
                    return _p.list.literal([])
                })
                default: return _p.au($[0])
            }

        }
        $.__l_map(($) => Phrase($)) 
        if (current_line !== null) {
            $i['add item']({
                'indentation': $p['current indentation'],
                'text': current_line,
            })
        }
        return _p.list.literal([])//nothing returned
    }

    Paragraph_2(
        $,
        { 'current indentation': 0 }
    )
})

export const Phrase = (
    $: d_in.Phrase,
): d_out.Lines => Paragraph(
    ['sentences', _p.list.literal([_p.list.literal([$])])],
)