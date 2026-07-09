import * as p_ from 'pareto-core/implementation/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as interface_ from "../../../../declarations/transformers/semi_lines/text.js"

//dependencies
import * as t_fountain_pen_semi_lines_to_lines from "./lines.js"

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