import * as p_ from 'pareto-core/implementation/transformer'
import type * as s_out from "../../../interface/schemas/list_of_characters.js"
import type * as s_in from "../../../interface/schemas/prose.js"
import type * as s_parameters from "../../../interface/schemas/prose_serialize.js"
namespace declarations {
    export type Paragraph = p_.Transformer_With_Parameter<
        s_in.Paragraph,
        s_out.List_of_Characters,
        s_parameters.Parameters
    >
    export type Phrase = p_.Transformer_With_Parameter<
        s_in.Phrase,
        s_out.List_of_Characters,
        s_parameters.Parameters
    >
}

//dependencies
import * as t_fountain_pen_block_to_semi_lines from "./semi_lines.js"
import * as t_semi_lines_to_text from "../semi_lines/text.js"

//shorthands
import * as sh from "../../../shorthands/prose/deprecated.js"

export const Paragraph: declarations.Paragraph = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Paragraph($, { 'indentation level': 0 }),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
        'trailing newline': true,
    }
)

export const Phrase: declarations.Phrase = ($, $p) => t_semi_lines_to_text.Lines(
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

