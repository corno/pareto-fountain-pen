
import * as d_in from "../../../interface/generated/pareto/schemas/block/data_types/source"

import * as t_fountain_pen_block_to_semi_lines from "../../transformers/schemas/block/semi_lines"
import * as s_semi_lines from "./semi_lines"

import * as sh from "../../../shorthands/block"

export const Group = (
    $: d_in.Group,
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


export const Block_Part = (
    $: d_in.Block_Part,
    $p: {
        'indentation': string,
        'newline': string
    }
): string => {
    return s_semi_lines.Lines(
        t_fountain_pen_block_to_semi_lines.Group(sh.group([sh.g.nested_block([$])])),
        {
            'indentation': $p.indentation,
            'newline': $p['newline'],
        }
    )
}

