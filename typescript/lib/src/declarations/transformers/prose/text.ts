import type * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/schemas/prose.js"
import type * as d_function from "../../../interface/schemas/prose_serialize.js"
import type * as d_out from "../../../interface/schemas/text.js"


export type Paragraph = p_.Transformer_With_Parameter<
    d_in.Paragraph,
    d_out.Text,
    d_function.Parameters
>
export type Phrase = p_.Transformer_With_Parameter<
    d_in.Phrase,
    d_out.Text,
    d_function.Parameters
>
export type Phrases = p_.Transformer_With_Parameter<
    d_in.Phrase.composed,
    d_out.Text,
    d_function.Parameters
>

