
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_in from "../../../interface/data/semi_lines.js"
import type * as d_out from "../../../interface/data/lines.js"

export namespace d_function {
    export type Parameters = { 'indentation text': string }
}


export type Lines = p_.Transformer_With_Parameter<
    d_in.Lines,
    d_out.Lines,
    d_function.Parameters
>

