import * as pt from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as s_in from "../../generated/interface/schemas/block/data_types/source"
import * as s_out from "../../generated/interface/schemas/semi_lines/data_types/target"

export const Directory = (
    $: s_in.Directory,
): s_out.Directory => $.map(($) => _ea.cc($, ($): s_out.Directory.D => _ea.cc($, ($) => {
    switch ($[0]) {
        case 'file': return _ea.ss($, ($) => ['file', Block($)])
        case 'directory': return _ea.ss($, ($) => ['directory', Directory($)])
        default: return _ea.au($[0])
    }
})))

export const Block = (
    $: s_in.Block,
): s_out.Lines => {

    return _ea.build_list(($i) => {

        const Block_Part = (
            $: s_in.Block_Part,
            $p: {
                'current indentation': number
            }
        ): void => {
            switch ($[0]) {
                case 'line':
                    _ea.ss($, ($) => {
                        $i['add element']({
                            'indentation': $p['current indentation'],
                            'text': $,
                        })
                    })
                    break
                case 'nested line':
                    _ea.ss($, ($) => {
                        Line($, { 'current indentation': $p['current indentation'] })
                    })
                    break
                case 'nothing':
                    _ea.ss($, ($) => {
                        // do nothing
                    })
                    break
                case 'sub block': _ea.ss($, ($) => {
                    Block($, { 'current indentation': $p['current indentation'] })
                })
                    break
                default: _ea.au($[0])
            }
        }
        const Block = (
            $: s_in.Block,
            $p: {
                'current indentation': number
            }
        ): void => {
            $.__for_each(($) => {
                Block_Part($, { 'current indentation': $p['current indentation'] })
            })
        }
        const Line = (
            $: s_in.Line,
            $p: {
                'current indentation': number
            }
        ): void => {
            let current_line: null | string = null
            const Line2 = (
                $: s_in.Line
            ): void => {

                $.__for_each(($) => {
                    switch ($[0]) {
                        case 'snippet':
                            _ea.ss($, ($) => {
                                current_line = current_line === null ? $ : current_line + $
                            })
                            break
                        case 'indent':
                            _ea.ss($, ($) => {
                                if (current_line !== null) {
                                    $i['add element']({
                                        'indentation': $p['current indentation'],
                                        'text': current_line,
                                    })
                                }
                                current_line = null
                                Block($, { 'current indentation': $p['current indentation'] + 1 })
                            })
                            break
                        case 'nothing':
                            _ea.ss($, ($) => {
                                // do nothing
                            })
                            break
                        case 'sub line':
                            _ea.ss($, ($) => {

                                Line2($)
                            })
                            break
                        default: _ea.au($[0])
                    }
                })

            }
            Line2($)
            if (current_line !== null) {
                $i['add element']({
                    'indentation': $p['current indentation'],
                    'text': current_line,
                })
            }
        }

        Block(
            $,
            { 'current indentation': 0 }
        )
    })
}