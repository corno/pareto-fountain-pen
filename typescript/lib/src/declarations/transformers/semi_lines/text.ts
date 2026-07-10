import type * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../interface/data/semi_lines.js"
import type * as d_function from "../../../interface/data/semi_lines_serialize.js"
import type * as d_out from "../../../interface/data/list_of_characters.js"


export type Lines = p_.Transformer_With_Parameter<
    d_in.Lines,
    d_out.List_of_Characters,
    d_function.Parameters
>

