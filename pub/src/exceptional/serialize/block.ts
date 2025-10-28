import * as pa from 'exupery-core-alg'

import * as _in from "../../interface/generated/pareto/schemas/block/data_types/source"

import * as t_fountain_pen_block_to_semi_lines from "../../implementation/transformations/block/semi_lines"
import * as s_semi_lines from "./semi_lines"

export const Group = (
    $: _in.Group,
    $p: {
        'indentation': string
        'newline': string
    }
): string => {
    return s_semi_lines.Lines(
        t_fountain_pen_block_to_semi_lines.Group($),
        {
            'indentation': $p.indentation,
            'newline': $p['newline'],
        }
    )
}

