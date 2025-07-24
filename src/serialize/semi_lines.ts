import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as t_fountain_pen_semi_lines_to_lines from "../transformations/semi_lines/lines"

import * as s_in from "../generated/interface/schemas/semi_lines/unresolved"
import * as s_out from "../generated/interface/schemas/text/unresolved"

import { pure } from "pareto-standard-operations"

const op = {
    'join list of texts': pure.text['join list of texts'],
}

export const Lines = (
    $: s_in.Lines,
    $p: {
        'indentation': string
        'newline': string
    }
): string => op['join list of texts'](
    t_fountain_pen_semi_lines_to_lines.Lines(
        $,
        {
            'indentation': $p.indentation,
        }
    ).map(($) => $ + $p.newline),
)

export const Directory = (
    $: s_in.Directory,
    $p: {
        'indentation': string,
        'newline': string
    }
): s_out.Directory => {
    return $.map(($) => pa.cc($, ($): s_out.Directory.D => {
        switch ($[0]) {
            case 'file': return pa.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation, 'newline': $p.newline })])
            case 'directory': return pa.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation, 'newline': $p.newline })])
            default: return pa.au($[0])
        }
    }))
}