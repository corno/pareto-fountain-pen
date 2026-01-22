import * as _p from 'pareto-core/dist/serializer'
import * as _pi from 'pareto-core/dist/interface'

import * as t_fountain_pen_semi_lines_to_lines from "./transformers/lines"

import * as d_in from "../../../../interface/generated/pareto/schemas/semi_lines/data"
import * as d_x from "../../../../interface/to_be_generated/block_serialize"

const s_join_list_of_texts: _pi.Serializer<_pi.List<string>> = ($) => _p.text.deprecated_build(($i) => {
    $.__for_each(($) => {
        $i['add snippet']($)
    })
})

export const Lines: _pi.Serializer_With_Parameters<d_in.Lines, d_x.Parameters> = ($, $p) => s_join_list_of_texts(
    t_fountain_pen_semi_lines_to_lines.Lines(
        $,
        {
            'indentation': $p.indentation,
        }
    ).__l_map(($) => $ + $p.newline),
)