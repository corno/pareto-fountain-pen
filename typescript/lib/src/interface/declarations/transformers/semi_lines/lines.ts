
import type * as p_i from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../generated/liana/schemas/semi_lines/data.js"
import type * as d_out from "../../../generated/liana/schemas/lines/data.js"

export namespace d_function {
    export type Parameters = { 'indentation text': string }
}


export type Lines = p_i.Transformer_With_Parameter<
    d_in.Lines,
    d_out.Lines,
    d_function.Parameters
>

