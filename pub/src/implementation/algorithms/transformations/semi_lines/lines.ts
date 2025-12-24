import * as _ea from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/lines/data_types/target"

import { $$ as op_repeat } from "pareto-standard-operations/dist/implementation/operations/impure/text/repeat"
import { Signature } from "../../../../interface/algorithms/transformations/semi_lines/lines"


export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
    }
): d_out.Lines => {
    return $.map(($) => {
        return op_repeat($p.indentation, { 'count': $.indentation }) + $.text
    })
}

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string
    }
): d_out.Directory => {
    return $.map(($) => _ea.cc($, ($): d_out.Directory.D => {
        switch ($[0]) {
            case 'file': return _ea.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
            case 'directory': return _ea.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
            default: return _ea.au($[0])
        }
    }))
}