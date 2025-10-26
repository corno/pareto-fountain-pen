import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as t_fountain_pen_semi_lines_to_lines from "../../transformations/semi_lines/lines"

import * as d_in from "../../generated/interface/schemas/semi_lines/data_types/source"
import * as d_out from "../../generated/interface/schemas/text/data_types/target"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/pure/text/join_list_of_texts"

export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
        'newline': string
    }
): string => op_join_list_of_texts(
    t_fountain_pen_semi_lines_to_lines.Lines(
        $,
        {
            'indentation': $p.indentation,
        }
    ).map(($) => $ + $p.newline),
)

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string,
        'newline': string
    }
): d_out.Directory => {
    return $.map(($) => pa.cc($, ($): d_out.Directory.D => {
        switch ($[0]) {
            case 'file': return pa.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation, 'newline': $p.newline })])
            case 'directory': return pa.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation, 'newline': $p.newline })])
            default: return pa.au($[0])
        }
    }))
}