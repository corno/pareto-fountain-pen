import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_x from "../../../../../interface/to_be_generated/block_serialize"
import * as d_out from "../../../../../interface/to_be_generated/list_of_characters"

import * as t_fountain_pen_block_to_semi_lines from "./semi_lines"
import * as t_semi_lines_to_text from "../../semi_lines/transformers/text"

import * as sh from "../../../../../shorthands/block"

export const Paragraph: _pi.Transformer_With_Parameters<d_in.Paragraph, d_out.List_of_Characters, d_x.Parameters> = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Paragraph($),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)

export const Phrase: _pi.Transformer_With_Parameters<d_in.Phrase, d_out.List_of_Characters, d_x.Parameters> = ($, $p) => t_semi_lines_to_text.Lines(
    t_fountain_pen_block_to_semi_lines.Phrase($),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)

