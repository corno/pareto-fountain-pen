import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as d_in from "../../../../interface/generated/liana/schemas/prose/data"
import * as d_x from "../../../../interface/to_be_generated/prose_serialize"
import * as d_out from "../../../../interface/generated/liana/schemas/text/data"

import * as t_to_list_of_characters from "./list_of_characters"

export const Paragraph: _pi.Transformer_With_Parameter<d_in.Paragraph, d_out.Text, d_x.Parameters> = ($, $p) => _p_text_from_list(
    t_to_list_of_characters.Paragraph($, $p),
    ($) => $
)

export const Phrase: _pi.Transformer_With_Parameter<d_in.Phrase, d_out.Text, d_x.Parameters> = ($, $p) => _p_text_from_list(
    t_to_list_of_characters.Phrase($, $p),
    ($) => $
)