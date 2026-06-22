import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import * as d_in from "../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_out from "../../../../interface/generated/liana/schemas/lines/data"

export const Lines: p_i.Transformer_With_Parameter<
    d_in.Lines,
    d_out.Lines,
    {
        'indentation text': string
    }
> = ($, $p) => {
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