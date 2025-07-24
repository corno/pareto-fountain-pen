import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as s_in from "../../generated/interface/schemas/block/resolved"
import * as s_out from "../../generated/interface/schemas/semi_lines/resolved"

export const Directory = (
    $: s_in.Directory,
): s_out.Directory => $.map(($) => pa.cc($, ($): s_out.Directory.D => pa.cc($, ($) => {
    switch ($[0]) {
        case 'file': return pa.ss($, ($) => ['file', Block($)])
        case 'directory': return pa.ss($, ($) => ['directory', Directory($)])
        default: return pa.au($[0])
    }
})))

export const Block = (
    $: s_in.Block,
): s_out.Lines => {

    return pa.pure.list.build(($i) => {

        const Block_Part = (
            $: s_in.Block_Part,
            $p: {
                'current indentation': number
            }
        ): void => {
            switch ($[0]) {
                case 'line':
                    pa.ss($, ($) => {
                        $i['add element']({
                            'indentation': $p['current indentation'],
                            'text': $,
                        })
                    })
                    break
                case 'nested line':
                    pa.ss($, ($) => {
                        Line($, { 'current indentation': $p['current indentation'] })
                    })
                    break
                case 'nothing':
                    pa.ss($, ($) => {
                        // do nothing
                    })
                    break
                case 'sub block': pa.ss($, ($) => {
                    Block($, { 'current indentation': $p['current indentation'] })
                })
                    break
                default: pa.au($[0])
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
                            pa.ss($, ($) => {
                                current_line = current_line === null ? $ : current_line + $
                            })
                            break
                        case 'indent':
                            pa.ss($, ($) => {
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
                            pa.ss($, ($) => {
                                // do nothing
                            })
                            break
                        case 'sub line':
                            pa.ss($, ($) => {

                                Line2($)
                            })
                            break
                        default: pa.au($[0])
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