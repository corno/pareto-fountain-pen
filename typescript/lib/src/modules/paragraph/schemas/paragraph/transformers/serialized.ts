import type * as p_i from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../schema.js"
import type * as s_out from "../../serialized/schema.js"
import type * as s_parameters from "../../paragraph_serialization/schema.js"

namespace declarations {

    export type Paragraph = p_i.Transformer_With_Parameter<
        s_in.Paragraph,
        s_out.Lines,
        s_parameters.Parameters
    >

    export type Phrases = p_i.Transformer_With_Parameter<
        s_in.Phrases,
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
import * as t_semi_lines_to_lines from "../../semi_lines/transformers/serialized.js"
import * as t_to_semi_lines from "./semi_lines.js"

import * as sh from "../shorthands/deprecated.js"

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


export const Phrase: declarations.Phrase = ($, $p) => t_semi_lines_to_lines.Lines(
    t_to_semi_lines.Paragraph(
        sh.pg.sentences([
            sh.sentence([
                $
            ])
        ]),
        {
            'indentation level': 0
        }
    ),
    {
        'indentation text': $p.indentation
    }
)



export const Phrases: declarations.Phrases = ($, $p) => t_semi_lines_to_lines.Lines(
    t_to_semi_lines.Paragraph(
        sh.pg.sentences([
            sh.sentence($)
        ]),
        {
            'indentation level': 0
        }
    ),
    {
        'indentation text': $p.indentation
    }
)

