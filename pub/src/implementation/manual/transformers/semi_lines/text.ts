import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_fountain_pen_semi_lines_to_lines from "./lines"

import * as d_in from "../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_x from "../../../../interface/to_be_generated/prose_serialize"
import * as d_out from "../../../../interface/generated/liana/schemas/list_of_characters/data"


export const Lines: _pi.Transformer_With_Parameter<d_in.Lines, d_out.List_of_Characters, d_x.Parameters> = ($, $p) => {
    const amount = _p.number.natural.from.list($).amount_of_items()
    let current = -1
    return _p.list.from.list(
        t_fountain_pen_semi_lines_to_lines.Lines(
            $,
            {
                'indentation text': $p.indentation,
            }
        ),
    ).flatten(
        ($) => {
            current++
            return _p_list_from_text<number>(
                current === amount - 1 && !$p['trailing newline']
                    ? $
                    : $ + $p.newline,
                ($) => $
            )
        }
    )
}