import * as pt from 'exupery-core-types'
import * as pa from 'exupery-core-alg'

import * as d_in from "../../../../interface/generated/pareto/schemas/block/data_types/source"
import * as d_out from "../../../../interface/generated/pareto/schemas/lines/data_types/target"

import * as t from "../semi_lines/lines"
import * as t_2 from "./semi_lines"
import { Signature } from "../../../../interface/algorithms/transformations/block/lines"


export  const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string,
    }
): d_out.Directory => {
    return t.Directory(
        t_2.Directory($),
        $p
    )
}

export const Group = (
    $: d_in.Group,
    $p: {
        'indentation': string
    }
): d_out.Lines => {

    return t.Lines(t_2.Group($,), { 'indentation': $p.indentation})
}