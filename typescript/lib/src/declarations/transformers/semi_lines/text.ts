import type * as p_ from 'pareto-core/interface/transformer'

import type * as s_in from "../../../interface/schemas/semi_lines.js"
import type * as s_function from "../../../interface/schemas/semi_lines_serialize.js"
import type * as s_out from "../../../interface/schemas/list_of_characters.js"


export type Lines = p_.Transformer_With_Parameter<
    s_in.Lines,
    s_out.List_of_Characters,
    s_function.Parameters
>

