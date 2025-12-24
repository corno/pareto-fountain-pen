
import * as d_in from "../../../../interface/generated/pareto/schemas/block/data_types/source"

import { Signature } from "../../../../interface/algorithms/transformations/block/lines"

import * as t from "./lines"

import { $$ as op_join } from "pareto-standard-operations/dist/implementation/operations/impure/text/join_list_of_texts_with_separator"

import * as sh from "../../../../shorthands/block"

export const Group = (
    $: d_in.Group,
    $p: {
        'indentation': string
    }
): string => {

    return op_join(t.Group($, { 'indentation': $p.indentation}), { 'separator': `\n` })
}

export const Block_Part = (
    $: d_in.Block_Part,
    $p: {
        'indentation': string,
    }
): string => {
    return op_join(t.Block_Part($, { 'indentation': $p.indentation}), { 'separator': `\n` })
}
