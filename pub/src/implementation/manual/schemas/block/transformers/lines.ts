
import * as d_in from "../../../../../interface/generated/liana/schemas/block/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/lines/data"

import * as t from "../../semi_lines/transformers/lines"
import * as t_2 from "./semi_lines"

import * as sh from "../../../../../shorthands/block"

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string,
    }
): d_out.Directory => t.Directory(
    t_2.Directory($),
    $p
)

export const Group = (
    $: d_in.Group,
    $p: {
        'indentation': string
    }
): d_out.Lines => t.Lines(t_2.Group($), { 'indentation': $p.indentation })

export const Group_Part = (
    $: d_in.Group_Part,
    $p: {
        'indentation': string
    }
): d_out.Lines => t.Lines(t_2.Group(sh.group([$])), { 'indentation': $p.indentation })

export const Block_Part = (
    $: d_in.Block_Part,
    $p: {
        'indentation': string,
    }
): d_out.Lines => t.Lines(t_2.Group(sh.group([sh.g.nested_block([$])])), { 'indentation': $p.indentation })
