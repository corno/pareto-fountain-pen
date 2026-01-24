import * as _p from 'pareto-core/dist/transformer'
import * as _p_temp_serializer from 'pareto-core/dist/serializer'

import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/semi_lines/data"

export const Directory = (
    $: d_in.Directory,
): d_out.Directory => $.__d_map(($) => _p.decide.state($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Group($)])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($)])
        default: return _p.au($[0])
    }
}))

export const Group = (
    $: d_in.Group,
): d_out.Lines => _p.list.deprecated_build(($i) => {

    const Group_Part = (
        $: d_in.Group_Part,
        $p: {
            'current indentation': number
        }
    ): void => {
        switch ($[0]) {
            case 'block':
                _p.ss($, ($) => {
                    $i['add element']({
                        'indentation': $p['current indentation'],
                        'text': $,
                    })
                })
                break
            case 'nested block':
                _p.ss($, ($) => {
                    Block($, { 'current indentation': $p['current indentation'] })
                })
                break
            case 'nothing':
                _p.ss($, ($) => {
                    // do nothing
                })
                break
            case 'rich list':
                _p.ss($, ($) => {
                    if ($.elements.__get_number_of_elements() === 0) {
                        Group_Part($['if empty'], { 'current indentation': $p['current indentation'] })
                    } else {
                        Group_Part($['if not empty'].before, { 'current indentation': $p['current indentation'] })
                        $['if not empty'].indent
                        let is_first = true
                        const sep = $['if not empty'].separator
                        const indent = $['if not empty'].indent
                        let counter = -1
                        const length = $.elements.__get_number_of_elements()
                        $.elements.__for_each(($) => {
                            counter++
                            if (!is_first) {

                            }
                            Group(
                                _p.list.literal([
                                    $,
                                    (counter < length - 1)
                                        ? sep
                                        : ['nothing', null],
                                ]),
                                { 'current indentation': $p['current indentation'] + (indent ? 1 : 0) }
                            )
                        })
                        Group_Part($['if not empty'].after, { 'current indentation': $p['current indentation'] })
                    }
                })
                break
            case 'sub group':
                _p.ss($, ($) => {
                    Group($, { 'current indentation': $p['current indentation'] })
                })
                break
            case 'optional':
                _p.ss($, ($) => {
                    $.__o_map(($) => {
                        Group_Part($, { 'current indentation': $p['current indentation'] })

                    })
                })
                break
            default: _p.au($[0])
        }
    }
    const Group = (
        $: d_in.Group,
        $p: {
            'current indentation': number
        }
    ): void => {
        $.__for_each(($) => {
            Group_Part($, { 'current indentation': $p['current indentation'] })
        })
    }
    const Block = (
        $: d_in.Block,
        $p: {
            'current indentation': number
        }
    ): void => {
        let current_line: null | string = null
        const Block2 = (
            $: d_in.Block
        ): void => {
            $.__for_each(($) => {
                Block_Part($)
            })
        }
        const Block_Part = (
            $: d_in.Block_Part
        ): void => {

            switch ($[0]) {
                case 'snippet':
                    _p.ss($, ($) => {
                        current_line = current_line === null ? $ : current_line + $
                    })
                    break
                case 'indent':
                    _p.ss($, ($) => {
                        if (current_line !== null) {
                            $i['add element']({
                                'indentation': $p['current indentation'],
                                'text': current_line,
                            })
                        }
                        current_line = null
                        Group($, { 'current indentation': $p['current indentation'] + 1 })
                    })
                    break
                case 'nothing':
                    _p.ss($, ($) => {
                        // do nothing
                    })
                    break
                case 'rich list':
                    _p.ss($, ($) => {
                        if ($.elements.__get_number_of_elements() === 0) {
                            Block_Part($['if empty'])
                        } else {
                            Block_Part($['if not empty'].before)
                            let is_first = true
                            const sep = $['if not empty'].separator
                            $.elements.__for_each(($) => {
                                if (!is_first) {
                                    Block_Part(sep)
                                }
                                Block_Part($)
                            })
                            Block_Part($['if not empty'].after)
                        }
                    })
                    break
                case 'sub block':
                    _p.ss($, ($) => {

                        Block2($)
                    })
                    break
                case 'optional':
                    _p.ss($, ($) => {
                        $.__o_map(($) => {
                            Block_Part($)

                        })
                    })
                    break
                default: _p.au($[0])
            }

        }
        Block2($)
        if (current_line !== null) {
            $i['add element']({
                'indentation': $p['current indentation'],
                'text': current_line,
            })
        }
    }

    Group(
        $,
        { 'current indentation': 0 }
    )
})