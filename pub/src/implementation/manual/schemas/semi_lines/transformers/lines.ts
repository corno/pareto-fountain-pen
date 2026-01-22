import * as _p from 'pareto-core/dist/transformer'
import * as _pi from 'pareto-core/dist/interface'
import * as _ps from 'pareto-core/dist/serializer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/semi_lines/data"
import * as d_out from "../../../../../interface/generated/pareto/schemas/lines/data"


const s_repeated: _pi.Text_Serializer_With_Parameters<{ 'count': number }> = ($, $p) => _ps.text.deprecated_build(($i) => {
    for (let i = 0; i < $p.count; i++) {
        $i.add_snippet($)
    }
})

export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
    }
): d_out.Lines => $.__l_map(($) => s_repeated($p.indentation, { 'count': $.indentation }) + $.text)

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string
    }
): d_out.Directory => $.__d_map(($) => _p.sg($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
        default: return _p.au($[0])
    }
}))