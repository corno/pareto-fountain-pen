import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'

import * as d_in from "../../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/text/data"
import * as d_block_serialize from "../../../../../interface/to_be_generated/block_serialize"

import * as s_semi_lines from "../serializers"

export const Directory: _pi.Transformer_With_Parameters<d_in.Directory, d_out.Directory, d_block_serialize.Parameters> = ($, $p) => $.__d_map(($) => _p.sg($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', s_semi_lines.Lines($, { 'indentation': $p.indentation, 'newline': $p.newline })])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation, 'newline': $p.newline })])
        default: return _p.au($[0])
    }
}))