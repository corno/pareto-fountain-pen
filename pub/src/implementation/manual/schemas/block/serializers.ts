import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../interface/generated/liana/schemas/block/data"
import * as d_x from "../../../../interface/to_be_generated/block_serialize"

import * as t_fountain_pen_block_to_semi_lines from "./transformers/semi_lines"
import * as s_semi_lines from "../semi_lines/serializers"

import * as sh from "../../../../shorthands/block"

export const Group: _pi.Serializer_With_Parameters<d_in.Group, d_x.Parameters> = ($, $p) => s_semi_lines.Lines(
    t_fountain_pen_block_to_semi_lines.Group($),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)


export const Block_Part: _pi.Serializer_With_Parameters<d_in.Block_Part, d_x.Parameters> = ($, $p) => s_semi_lines.Lines(
    t_fountain_pen_block_to_semi_lines.Group(sh.group([sh.g.nested_block([$])])),
    {
        'indentation': $p.indentation,
        'newline': $p['newline'],
    }
)

