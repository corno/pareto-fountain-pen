import * as p_i from 'pareto-core/dist/interface/transformer'
import * as pt from 'pareto-core/dist/implementation/transformer'
import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import * as t_fountain_pen_semi_lines_to_lines from "./lines"

import * as d_in from "../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_x from "../../../../interface/data/semi_lines_serialize"
import * as d_out from "../../../../interface/generated/liana/schemas/list_of_characters/data"


export const Lines: p_i.Transformer_With_Parameter<d_in.Lines, d_out.List_of_Characters, d_x.Parameters> = ($, $p) => {
    const amount = pt.number.from.list($).amount_of_items()
    let current = -1
    return pt.list.from.list(
        t_fountain_pen_semi_lines_to_lines.Lines(
            $,
            {
                'indentation text': $p.indentation,
            }
        ),
    ).flatten(
        ($) => {
            current++
            return p_list_from_text<number>(
                current === amount - 1 && !$p['trailing newline']
                    ? $
                    : $ + $p.newline,
                ($) => $
            )
        }
    )
}