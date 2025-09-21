import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as s_in from "../../generated/interface/schemas/block/data_types/source"
import * as s_out from "../../generated/interface/schemas/lines/data_types/target"

import * as t from "../semi_lines/lines"
import * as t_2 from "./semi_lines"

export  const Directory = (
    $: s_in.Directory,
    $p: {
        'indentation': string,
    }
): s_out.Directory => {
    return t.Directory(
        t_2.Directory($),
        $p
    )
}

export const Block = (
    $: s_in.Block,
    $p: {
        'indentation': string
    }
): s_out.Lines => {

    return t.Lines(t_2.Block($,), { 'indentation': $p.indentation})
}