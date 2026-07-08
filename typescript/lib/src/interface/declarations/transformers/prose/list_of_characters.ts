
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../generated/liana/schemas/prose/data.js"
import type * as d_function from "../../../data/prose_serialize.js"
import type * as d_out from "../../../generated/liana/schemas/list_of_characters/data.js"


    export type Paragraph = p_i.Transformer_With_Parameter<
        d_in.Paragraph,
        d_out.List_of_Characters,
        d_function.Parameters
    >
    export type Phrase = p_i.Transformer_With_Parameter<
        d_in.Phrase,
        d_out.List_of_Characters,
        d_function.Parameters
    >

