
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/prose.js"
import type * as s_function from "../../../interface/schemas/prose_serialize.js"
import type * as s_out from "../../../interface/schemas/list_of_characters.js"


export type Paragraph = p_.Transformer_With_Parameter<
    s_in.Paragraph,
    s_out.List_of_Characters,
    s_function.Parameters
>
export type Phrase = p_.Transformer_With_Parameter<
    s_in.Phrase,
    s_out.List_of_Characters,
    s_function.Parameters
>

