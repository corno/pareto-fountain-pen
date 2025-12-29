import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as d_in from "../../../../interface/generated/pareto/schemas/block/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/semi_lines/data_types/target"

export const Directory = (
    $: d_in.Directory,
): d_out.Directory => $.map(($) => _pt.cc($, ($): d_out.Directory.D => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'file': return _pt.ss($, ($) => ['file', Group($)])
        case 'directory': return _pt.ss($, ($) => ['directory', Directory($)])
        default: return _pt.au($[0])
    }
})))

export const Group = (
    $: d_in.Group,
): d_out.Lines => {

    return _pinternals.build_list(($i) => {

        const Group_Part = (
            $: d_in.Group_Part,
            $p: {
                'current indentation': number
            }
        ): void => {
            switch ($[0]) {
                case 'block':
                    _pt.ss($, ($) => {
                        $i['add element']({
                            'indentation': $p['current indentation'],
                            'text': $,
                        })
                    })
                    break
                case 'nested block':
                    _pt.ss($, ($) => {
                        Block($, { 'current indentation': $p['current indentation'] })
                    })
                    break
                case 'nothing':
                    _pt.ss($, ($) => {
                        // do nothing
                    })
                    break
                case 'sub group':
                    _pt.ss($, ($) => {
                        Group($, { 'current indentation': $p['current indentation'] })
                    })
                    break
                case 'optional':
                    _pt.ss($, ($) => {
                        $.map(($) => {
                            Group_Part($, { 'current indentation': $p['current indentation'] })

                        })
                    })
                    break
                default: _pt.au($[0])
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
                        _pt.ss($, ($) => {
                            current_line = current_line === null ? $ : current_line + $
                        })
                        break
                    case 'indent':
                        _pt.ss($, ($) => {
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
                        _pt.ss($, ($) => {
                            // do nothing
                        })
                        break
                    case 'sub block':
                        _pt.ss($, ($) => {

                            Block2($)
                        })
                        break
                    case 'optional':
                        _pt.ss($, ($) => {
                            $.map(($) => {
                                Block_Part($)

                            })
                        })
                        break
                    default: _pt.au($[0])
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
}