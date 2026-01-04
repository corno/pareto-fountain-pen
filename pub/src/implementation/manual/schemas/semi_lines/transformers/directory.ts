import * as _p from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_in from "../../../../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/text/data_types/target"
import * as d_block_serialize from "../../../../../interface/to_be_generated/block_serialize"

import * as s_semi_lines from "../serializers"

export const Directory: _pi.Transformer_With_Parameters<d_in.Directory, d_out.Directory, d_block_serialize.Parameters> = ($, $p) => $.map(($) => _p.cc($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', s_semi_lines.Lines($, { 'indentation': $p.indentation, 'newline': $p.newline })])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation, 'newline': $p.newline })])
        default: return _p.au($[0])
    }
}))