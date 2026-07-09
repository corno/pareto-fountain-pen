import * as p_ from 'pareto-core/implementation/transformer'

import type * as interface_ from "../../../declarations/transformers/prose/list_of_characters.js"

//dependencies
import * as t_fountain_pen_block_to_semi_lines from "./semi_lines.js"
import * as t_semi_lines_to_text from "../semi_lines/text.js"

//shorthands
import * as sh from "../../../shorthands/prose/deprecated.js"

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

