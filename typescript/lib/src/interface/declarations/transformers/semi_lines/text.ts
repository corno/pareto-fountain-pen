import type * as p_ from 'pareto-core/interface/transformer'

import type * as d_in from "../../../generated/liana/schemas/semi_lines/data.js"
import type * as d_function from "../../../data/semi_lines_serialize.js"
import type * as d_out from "../../../generated/liana/schemas/list_of_characters/data.js"


    export type Lines = p_.Transformer_With_Parameter<
        d_in.Lines,
        d_out.List_of_Characters,
        d_function.Parameters
    >

