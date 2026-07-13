import * as p_ from 'pareto-core/implementation/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import type * as s_in from "../../../interface/schemas/prose.js"
import type * as s_parameters from "../../../interface/schemas/prose_serialize.js"
import type * as s_out from "../../../interface/schemas/_text.js"
namespace declarations {
    export type Paragraph = p_.Transformer_With_Parameter<
        s_in.Paragraph,
        s_out.Text,
        s_parameters.Parameters
    >
    export type Phrase = p_.Transformer_With_Parameter<
        s_in.Phrase,
        s_out.Text,
        s_parameters.Parameters
    >
    export type Phrases = p_.Transformer_With_Parameter<
        s_in.Phrase.composed,
        s_out.Text,
        s_parameters.Parameters
    >
}

//dependencies
import * as t_to_list_of_characters from "./list_of_characters.js"

export const Paragraph: declarations.Paragraph = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Paragraph($, $p),
    ($) => $
)

export const Phrase: declarations.Phrase = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Phrase($, $p),
    ($) => $
)

export const Phrases: declarations.Phrases = ($, $p) => p_text_from_list(
    t_to_list_of_characters.Phrase(['composed', $], $p),
    ($) => $
)