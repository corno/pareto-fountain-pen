import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import _p_list_build_deprecated from 'pareto-core/dist/_p_list_build_deprecated'

import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/semi_lines/data"

export const Directory = (
    $: d_in.Directory,
): d_out.Directory => _p.dictionary.map($, ($) => _p.decide.state($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Group($)])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
        default: return _p.au($[0])
    }
}))


//this implementation is still procedural and should be refactored to a functional style
//as a starter I've already made it return null values
type Nested_Nothing = _pi.List<null>

export const Group = (
    $: d_in.Group,
): d_out.Lines => _p_list_build_deprecated(($i) => {


    const Group_Part = (
        $: d_in.Group_Part,
        $p: {
            'current indentation': number
        }
    ): Nested_Nothing => {
        switch ($[0]) {
            case 'block':
                return _p.ss($, ($) => {
                    $i['add item']({
                        'indentation': $p['current indentation'],
                        'text': $,
                    })
                    return _p.list.literal([]) //nothing returned
                })
            case 'nested block':
                return _p.ss($, ($) => Block($, { 'current indentation': $p['current indentation'] }))
            case 'nothing':
                return _p.ss($, ($) => _p.list.literal([]))
            case 'rich list':
                return _p.ss($, ($) => {
                    if ($.items.__get_number_of_items() === 0) {
                        return Group_Part($['if empty'], { 'current indentation': $p['current indentation'] })
                    } else {
                        let is_first = true
                        const sep = $['if not empty'].separator
                        const indent = $['if not empty'].indent
                        let counter = -1
                        const length = $.items.__get_number_of_items()
                        Group_Part($['if not empty'].before, { 'current indentation': $p['current indentation'] }),
                            // $['if not empty'].indent,
                            _p.list.map( //replace by iterate
                                $.items,
                                ($) => {
                                    counter++
                                    return Group(
                                        _p.list.literal([
                                            $,
                                            (counter < length - 1)
                                                ? sep
                                                : ['nothing', null],
                                        ]),
                                        { 'current indentation': $p['current indentation'] + (indent ? 1 : 0) }
                                    )
                                }
                            ),
                            Group_Part($['if not empty'].after, { 'current indentation': $p['current indentation'] })
                        return _p.list.literal([]) //nothing returned
                    }
                })
            case 'sub group':
                return _p.ss($, ($) => Group($, { 'current indentation': $p['current indentation'] }))
            case 'optional':
                return _p.ss($, ($) => _p.decide.optional(
                    $,
                    ($) => Group_Part(
                        $,
                        {
                            'current indentation': $p['current indentation']
                        }
                    ),
                    () => _p.list.literal([]),
                ))
            default: return _p.au($[0])
        }
    }
    const Group = (
        $: d_in.Group,
        $p: {
            'current indentation': number
        }
    ): Nested_Nothing => _p.list.flatten($, ($) => Group_Part($, { 'current indentation': $p['current indentation'] }))

    const Block = (
        $: d_in.Block,
        $p: {
            'current indentation': number
        }
    ): Nested_Nothing => {
        let current_line: null | string = null

        const Block2 = (
            $: d_in.Block
        ): Nested_Nothing => _p.list.flatten($, ($) => Block_Part($))

        const Block_Part = (
            $: d_in.Block_Part
        ): Nested_Nothing => {
            switch ($[0]) {
                case 'snippet':
                    return _p.ss($, ($) => {
                        current_line = current_line === null ? $ : current_line + $
                        return _p.list.literal([])//nothing returned
                    })
                case 'indent':
                    return _p.ss($, ($) => {
                        if (current_line !== null) {
                            $i['add item']({
                                'indentation': $p['current indentation'],
                                'text': current_line,
                            })
                        }
                        current_line = null
                        Group($, { 'current indentation': $p['current indentation'] + 1 })
                        return _p.list.literal([])//placeholder
                    })
                case 'nothing':
                    return _p.ss($, ($) => _p.list.literal([]))
                case 'rich list':
                    return _p.ss($, ($) => {
                        if ($.items.__get_number_of_items() === 0) {
                            return Block_Part($['if empty'])
                        } else {
                            let is_first = true
                            const sep = $['if not empty'].separator
                            Block_Part($['if not empty'].before)
                            _p.list.map( //replace by iterate
                                $.items,
                                ($) => {
                                    if (!is_first) {
                                        Block_Part(sep)
                                    }
                                    Block_Part($)
                                    return null
                                })
                            Block_Part($['if not empty'].after)
                            return _p.list.literal([])
                        }
                    })
                case 'sub block':
                    return _p.ss($, ($) => Block2($))
                case 'optional':
                    return _p.ss($, ($) => _p.decide.optional(
                        $,
                        ($) => Block_Part($),
                        () => _p.list.literal([]),
                    ))
                default: return _p.au($[0])
            }

        }
        Block2($)
        if (current_line !== null) {
            $i['add item']({
                'indentation': $p['current indentation'],
                'text': current_line,
            })
        }
        return _p.list.literal([])//nothing returned
    }

    Group(
        $,
        { 'current indentation': 0 }
    )
})