import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/expression'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as t_fountain_pen_semi_lines_to_lines from "./lines"

import * as d_in from "../../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_x from "../../../../../interface/to_be_generated/block_serialize"
import * as d_out from "../../../../../interface/to_be_generated/text"


export const Lines: _pi.Transformer_With_Parameters<d_in.Lines, d_out.Text, d_x.Parameters> = ($, $p) => _p.list.flatten(
    t_fountain_pen_semi_lines_to_lines.Lines(
        $,
        {
            'indentation': $p.indentation,
        }
    ).__l_map(
        ($) => _p_list_from_text<number>(
            $ + $p.newline,
            ($) => $
        )
    ),
    ($): d_out.Text => _p.list.nested_literal_old([
        _p_list_from_text<number>(
            $p.indentation,
            ($) => $
        ),
        $
    ])
)