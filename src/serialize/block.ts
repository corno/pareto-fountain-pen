import * as pa from 'exupery-core-alg'

import * as _in from "../generated/interface/schemas/block/unresolved"

import * as t_fountain_pen_block_to_semi_lines from "../transformations/block/semi_lines"
import * as s_semi_lines from "./semi_lines"

export const Block = (
    $: _in.Block,
    $p: {
        'indentation': string
        'newline': string
    }
): string => {
    return s_semi_lines.Lines(
        t_fountain_pen_block_to_semi_lines.Block($),
        {
            'indentation': $p.indentation,
            'newline': $p['newline'],
        }
    )
}

