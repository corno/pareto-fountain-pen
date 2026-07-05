import * as p_ from 'pareto-core/implementation/transformer'
import * as p_i from 'pareto-core/interface/transformer'

//data types
import * as d_in from "../../../../interface/generated/liana/schemas/prose/data.js"
import * as d_x from "../../../../interface/data/prose_serialize.js"
import * as d_out from "../../../../interface/generated/liana/schemas/list_of_characters/data.js"

export namespace interface_ {
    export type Paragraph = p_i.Transformer_With_Parameter<
        d_in.Paragraph,
        d_out.List_of_Characters,
        d_x.Parameters
    >
    export type Phrase = p_i.Transformer_With_Parameter<
        d_in.Phrase,
        d_out.List_of_Characters,
        d_x.Parameters
    >
}

//dependencies
import * as t_fountain_pen_block_to_semi_lines from "./semi_lines.js"
import * as t_semi_lines_to_text from "../semi_lines/text.js"

//shorthands
import * as sh from "../../../../shorthands/prose/deprecated.js"

export const Paragraph: interface_.Paragraph = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Paragraph($, { 'indentation level': 0 }),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
        'trailing newline': true,
    }
)

export const Phrase: interface_.Phrase = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Sentence(
        sh.sentence(p_.literal.list([
            $
        ])),
        { 'indentation level': 0 }
    ),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
        'trailing newline': false,
    }
)

