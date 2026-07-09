import * as p_ from 'pareto-core/implementation/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as interface_ from "../../../../declarations/transformers/semi_lines/lines.js"

export const Lines: interface_.Lines = ($, $p) => {
    const indent_characters = p_list_from_text(
        $p['indentation text'],
        ($) => $,
    )
    return p_.from.list($).map(
        ($) => p_text_from_list(
            p_.literal.segmented_list(
                [
                    p_.from.list(p_.from.number($.indentation).repeat(
                        indent_characters,
                    ),
                    ).flatten(
                        ($) => $
                    ),
                    p_list_from_text($.text, ($) => $)

                ],
            ),
            ($) => $,
        )
    )
}