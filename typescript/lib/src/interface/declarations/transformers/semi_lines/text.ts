import type * as p_ from 'pareto-core/interface/transformer'

import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import * as t_fountain_pen_semi_lines_to_lines from "./lines.js"

import type * as d_in from "../../../generated/liana/schemas/semi_lines/data.js"
import type * as d_function from "../../../data/semi_lines_serialize.js"
import type * as d_out from "../../../generated/liana/schemas/list_of_characters/data.js"


    export type Lines = p_.Transformer_With_Parameter<
        d_in.Lines,
        d_out.List_of_Characters,
        d_function.Parameters
    >

