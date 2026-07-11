
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/schemas/prose.js"
import type * as d_function from "../../../interface/schemas/prose_serialize.js"
import type * as d_out from "../../../interface/schemas/list_of_characters.js"


export type Paragraph = p_.Transformer_With_Parameter<
    d_in.Paragraph,
    d_out.List_of_Characters,
    d_function.Parameters
>
export type Phrase = p_.Transformer_With_Parameter<
    d_in.Phrase,
    d_out.List_of_Characters,
    d_function.Parameters
>

