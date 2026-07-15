import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/paragraph.js"
import type * as s_out from "../../../interface/schemas/lines.js"
import type * as s_parameters from "../../../interface/schemas/paragraph_serialization.js"

namespace declarations {

    export type Paragraph = p_i.Transformer_With_Parameter<
        s_in.Paragraph,
        s_out.Lines,
        s_parameters.Parameters
    >

    export type Phrase = p_i.Transformer_With_Parameter<
        s_in.Phrase,
        s_out.Lines,
        s_parameters.Parameters
    >

}

//dependencies
import * as t_semi_lines_to_lines from "pareto-core/temp/fountain_pen/transformers/semi_lines/_lines"
import * as t_to_semi_lines from "pareto-core/temp/fountain_pen/transformers/paragraph/semi_lines"


export const Paragraph: declarations.Paragraph = ($, $p) => t_semi_lines_to_lines.Lines(
    t_to_semi_lines.Paragraph(
        $,
        {
            'indentation level': 0
        }
    ),
    {
        'indentation text': $p.indentation
    }
)

