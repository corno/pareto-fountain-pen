import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import { impure } from "pareto-standard-operations"

import * as s_in from "../../generated/interface/schemas/semi_lines/unresolved"
import * as s_out from "../../generated/interface/schemas/lines/unresolved"

const op = {
    'repeat text': impure.text.repeat,
}

export const Lines = (
    $: s_in.Lines,
    $p: {
        'indentation': string
    }
): s_out.Lines => {
    return $.map(($) => {
        return op['repeat text']($p.indentation, { 'count': $.indentation }) + $.text
    })
}

export const Directory = (
    $: s_in.Directory,
    $p: {
        'indentation': string
    }
): s_out.Directory => {
    return $.map(($) => pa.cc($, ($): s_out.Directory.D => {
        switch ($[0]) {
            case 'file': return pa.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
            case 'directory': return pa.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
            default: return pa.au($[0])
        }
    }))
}