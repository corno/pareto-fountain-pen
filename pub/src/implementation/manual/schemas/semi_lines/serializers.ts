import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as t_fountain_pen_semi_lines_to_lines from "./transformers/lines"

import * as d_in from "../../../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_x from "../../../../interface/to_be_generated/block_serialize"

import { $$ as s_join_list_of_texts } from "pareto-standard-operations/dist/implementation/serializers/schemas/list_of_texts"

export const Lines: _pi.Serializer_With_Parameters<d_in.Lines, d_x.Parameters> = ($, $p) => s_join_list_of_texts(
    t_fountain_pen_semi_lines_to_lines.Lines(
        $,
        {
            'indentation': $p.indentation,
        }
    ).map(($) => $ + $p.newline),
)