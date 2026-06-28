import * as p_i from 'pareto-core/dist/interface/transformer'
import p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

import * as d_in from "../../../../interface/generated/liana/schemas/prose/data"
import * as d_x from "../../../../interface/data/prose_serialize"
import * as d_out from "../../../../interface/generated/liana/schemas/text/data"

import * as t_to_list_of_characters from "./list_of_characters"

export const Paragraph: p_i.Transformer_With_Parameter<
    d_in.Paragraph,
    d_out.Text,
    d_x.Parameters
> = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Paragraph($, $p),
    ($) => $
)

export const Phrase: p_i.Transformer_With_Parameter<
    d_in.Phrase,
    d_out.Text,
    d_x.Parameters
> = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Phrase($, $p),
    ($) => $
)