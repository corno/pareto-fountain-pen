import type * as p_i from 'pareto-core/interface/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import type * as d_in from "../../../generated/liana/schemas/prose/data.js"
import type * as d_function from "../../../data/prose_serialize.js"
import type * as d_out from "../../../generated/liana/schemas/text/data.js"


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

