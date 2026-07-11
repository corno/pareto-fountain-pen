import type * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "../../../interface/schemas/prose.js"
import type * as s_function from "../../../interface/schemas/prose_serialize.js"
import type * as s_out from "../../../interface/schemas/text.js"


export type Paragraph = p_.Transformer_With_Parameter<
    s_in.Paragraph,
    s_out.Text,
    s_function.Parameters
>
export type Phrase = p_.Transformer_With_Parameter<
    s_in.Phrase,
    s_out.Text,
    s_function.Parameters
>
export type Phrases = p_.Transformer_With_Parameter<
    s_in.Phrase.composed,
    s_out.Text,
    s_function.Parameters
>

