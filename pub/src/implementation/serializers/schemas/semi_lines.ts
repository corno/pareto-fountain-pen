import * as _ea from 'exupery-core-alg'

import * as t_fountain_pen_semi_lines_to_lines from "../../transformers/schemas/semi_lines/lines"

import * as d_in from "../../../interface/generated/pareto/schemas/semi_lines/data_types/source"
import * as d_out from "../../../interface/generated/pareto/schemas/text/data_types/target"

import { $$ as s_join_list_of_texts } from "pareto-standard-operations/dist/implementation/serializers/schemas/list_of_texts"

export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
        'newline': string
    }
): string => s_join_list_of_texts(
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
    return $.map(($) => _ea.cc($, ($): d_out.Directory.D => {
        switch ($[0]) {
            case 'file': return _ea.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation, 'newline': $p.newline })])
            case 'directory': return _ea.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation, 'newline': $p.newline })])
            default: return _ea.au($[0])
        }
    }))
}