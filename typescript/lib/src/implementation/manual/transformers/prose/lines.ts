import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/prose/data.js"
import * as d_out from "../../../../interface/generated/liana/schemas/lines/data.js"

namespace interface_ {

    export type Paragraph = p_i.Transformer_With_Parameter<
        d_in.Paragraph,
        d_out.Lines,
        {
            'indentation': string
        }
    >

    export type Phrase = p_i.Transformer_With_Parameter<
        d_in.Phrase,
        d_out.Lines,
        {
            'indentation': string
        }
    >

}

//dependencies
import * as t_semi_lines_to_lines from "../semi_lines/lines.js"
import * as t_to_semi_lines from "./semi_lines.js"

//shorthands
import * as sh from "../../../../shorthands/prose/deprecated.js"

export const Paragraph: interface_.Paragraph = ($, $p) => t_semi_lines_to_lines.Lines(t_to_semi_lines.Paragraph($, { 'indentation level': 0 }), { 'indentation text': $p.indentation })



export const Phrase: interface_.Phrase = ($, $p) => t_semi_lines_to_lines.Lines(
    t_to_semi_lines.Paragraph(
        ['sentences', p_.literal.list([sh.sentence(
            p_.literal.list([])
        )])],
        { 'indentation level': 0 }
    ),
    { 'indentation text': $p.indentation }
)