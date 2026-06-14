import * as pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_in from "../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_out from "../../../../interface/generated/liana/schemas/lines/data"


export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation text': string
    }
): d_out.Lines => {
    const indent = p_list_from_text<number>(
        $p['indentation text'],
        ($) => $,
    )
    return $.__l_map(
        ($) => p_text_from_list(
            pt.list.nested_literal_old<number>(
                [
                    pt.list.from.list(
                        pt.list.repeat(
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