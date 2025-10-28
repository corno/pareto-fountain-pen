import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as d_in from "../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_out from "../../interface/generated/pareto/schemas/lines/data_types/target"

import { $$ as op_repeat } from "pareto-standard-operations/dist/operations/impure/text/repeat"

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
    return $.map(($) => pa.cc($, ($): d_out.Directory.D => {
        switch ($[0]) {
            case 'file': return pa.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
            case 'directory': return pa.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
            default: return pa.au($[0])
        }
    }))
}