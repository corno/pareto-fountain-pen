import * as p_ from 'pareto-core/implementation/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

//schemas
import type * as s_in from "../../../interface/schemas/semi_lines.js"
import type * as s_out from "../../../interface/schemas/list_of_characters.js"
import type * as s_parameters from "../../../interface/schemas/semi_lines_serialize.js"

namespace declarations {
    export type Lines = p_.Transformer_With_Parameter<
        s_in.Lines,
        s_out.List_of_Characters,
        s_parameters.Parameters
    >
}

//dependencies
import * as t_fountain_pen_semi_lines_to_lines from "./lines.js"

export const Lines: declarations.Lines = ($, $p) => {
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