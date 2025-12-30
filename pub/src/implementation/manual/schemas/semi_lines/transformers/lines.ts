import * as _pt from 'pareto-core-transformer'

import * as d_in from "../../../../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_out from "../../../../../interface/generated/pareto/schemas/lines/data_types/target"

import { $$ as s_repeated } from "pareto-standard-operations/dist/implementation/serializers/primitives/text/repeated"

export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
    }
): d_out.Lines => {
    return $.map(($) => {
        return s_repeated($p.indentation, { 'count': $.indentation }) + $.text
    })
}

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string
    }
): d_out.Directory => {
    return $.map(($) => _pt.cc($, ($): d_out.Directory.D => {
        switch ($[0]) {
            case 'file': return _pt.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
            case 'directory': return _pt.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
            default: return _pt.au($[0])
        }
    }))
}