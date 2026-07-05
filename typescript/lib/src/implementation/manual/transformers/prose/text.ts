import * as p_i from 'pareto-core/interface/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as d_in from "../../../../interface/generated/liana/schemas/prose/data.js"
import * as d_function from "../../../../interface/data/prose_serialize.js"
import * as d_out from "../../../../interface/generated/liana/schemas/text/data.js"

export namespace interface_ {
    export type Paragraph = p_i.Transformer_With_Parameter<
        d_in.Paragraph,
        d_out.Text,
        d_function.Parameters
    >
    export type Phrase = p_i.Transformer_With_Parameter<
        d_in.Phrase,
        d_out.Text,
        d_function.Parameters
    >
    export type Phrases = p_i.Transformer_With_Parameter<
        d_in.Phrase.composed,
        d_out.Text,
        d_function.Parameters
    >
}

//dependencies
import * as t_to_list_of_characters from "./list_of_characters.js"

export const Paragraph: interface_.Paragraph = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Paragraph($, $p),
    ($) => $
)

export const Phrase: interface_.Phrase = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Phrase($, $p),
    ($) => $
)

export const Phrases: interface_.Phrases = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Phrase(['composed', $], $p),
    ($) => $
)