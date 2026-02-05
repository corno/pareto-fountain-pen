
import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/lines/data"

import * as t_semi_lines_to_lines from "../../semi_lines/transformers/lines"
import * as t_to_semi_lines from "./semi_lines"

import * as sh from "../../../../../shorthands/block"

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string,
    }
): d_out.Directory => t_semi_lines_to_lines.Directory(
    t_to_semi_lines.Directory($),
    $p
)

export const Paragraph = (
    $: d_in.Paragraph,
    $p: {
        'indentation': string
    }
): d_out.Lines => t_semi_lines_to_lines.Lines(t_to_semi_lines.Paragraph($), { 'indentation': $p.indentation })



export const Phrase = (
    $: d_in.Phrase,
    $p: {
        'indentation': string
    }
): d_out.Lines => t_semi_lines_to_lines.Lines(t_to_semi_lines.Phrase($), { 'indentation': $p.indentation })