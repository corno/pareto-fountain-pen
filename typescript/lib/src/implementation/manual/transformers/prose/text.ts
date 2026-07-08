import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import type * as interface_ from "../../../../interface/declarations/transformers/prose/text.js"

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