import * as _p from 'pareto-core-transformer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/lines/data_types/target"

import { $$ as s_repeated } from "pareto-standard-operations/dist/implementation/manual/primitives/text/serializers/repeated"

export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
    }
): d_out.Lines => $.map(($) => s_repeated($p.indentation, { 'count': $.indentation }) + $.text)

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string
    }
): d_out.Directory => $.map(($) => _p.sg($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
        default: return _p.au($[0])
    }
}))