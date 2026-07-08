import type * as p_i from 'pareto-core/interface/transformer'
import * as p_ from 'pareto-core/implementation/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import * as t_fountain_pen_semi_lines_to_lines from "./lines.js"

import type * as d_in from "../../../../interface/generated/liana/schemas/semi_lines/data.js"
import type * as d_function from "../../../../interface/data/semi_lines_serialize.js"
import type * as d_out from "../../../../interface/generated/liana/schemas/list_of_characters/data.js"

export namespace interface_ {
    export type Lines = p_i.Transformer_With_Parameter<
        d_in.Lines,
        d_out.List_of_Characters,
        d_function.Parameters
    >
}

export const Lines: interface_.Lines = ($, $p) => {
    const amount = p_.from.list($).amount_of_items()
    let current = -1
    return p_.from.list(t_fountain_pen_semi_lines_to_lines.Lines(
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