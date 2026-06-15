import * as p_ from 'pareto-core/dist/implementation/transformer'
import * as p_i from 'pareto-core/dist/interface/transformer'
import p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'
import p_list_from_text from 'pareto-core/dist/implementation/specials/list_from_text'

import * as d_in from "../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_out from "../../../../interface/generated/liana/schemas/lines/data"

export const Lines: p_i.Transformer_With_Parameter<
    d_in.Lines,
    d_out.Lines,
    {
        'indentation text': string
    }
> = ($, $p) => {
        const indent = p_list_from_text<number>(
            $p['indentation text'],
            ($) => $,
        )
        return $.__l_map(
            ($) => p_text_from_list(
                p_.literal.nested_list<number>(
                    [
                        p_.list.from.list(
                            p_.literal.repeat(
                                indent,
                                $.indentation
                            ),
                        ).flatten(
                            ($) => $
                        ),
                        p_list_from_text<number>($.text, ($) => $)

                    ],
                ),
                ($) => $,
            )
        )
    }