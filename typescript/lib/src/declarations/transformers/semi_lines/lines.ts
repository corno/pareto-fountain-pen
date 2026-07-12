
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_in from "../../../interface/schemas/semi_lines.js"
import type * as s_out from "../../../interface/schemas/lines.js"

export namespace s_function {
    export type Parameters = { 'indentation text': string }
}


export type Lines = p_.Transformer_With_Parameter<
    s_in.Lines,
    s_out.Lines,
    s_function.Parameters
>

