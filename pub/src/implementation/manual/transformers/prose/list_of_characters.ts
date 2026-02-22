import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_in from "../../../../interface/generated/liana/schemas/prose/data"
import * as d_x from "../../../../interface/to_be_generated/prose_serialize"
import * as d_out from "../../../../interface/generated/liana/schemas/list_of_characters/data"

import * as t_fountain_pen_block_to_semi_lines from "./semi_lines"
import * as t_semi_lines_to_text from "../semi_lines/text"

import * as sh from "../../../../shorthands/prose"

export const Paragraph: _pi.Transformer_With_Parameter<d_in.Paragraph, d_out.List_of_Characters, d_x.Parameters> = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Paragraph($, { 'indentation level': 0 }),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)

export const Phrase: _pi.Transformer_With_Parameter<d_in.Phrase, d_out.List_of_Characters, d_x.Parameters> = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Sentence(
        sh.sentence([$]),
        { 'indentation level': 0 }
    ),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)

