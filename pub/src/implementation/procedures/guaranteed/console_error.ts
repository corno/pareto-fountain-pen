import * as _easync from 'exupery-core-async'

import * as _in from "../../../interface/generated/pareto/schemas/block/data_types/target"

import * as t_block_to_lines from "../../transformations/block/lines"

import { $$ as c_error } from "exupery-resources/dist/implementation/procedures/guaranteed/log_error"
import { Signature } from "../../../interface/algorithms/procedures/guaranteed/console_error"


export type Parameters = {
    'group': _in.Group,
    'indentation': string,
}

export const $$: _easync.Guaranteed_Procedure_Initializer<Parameters> = (
    $p,
) => {
    return c_error({
        'lines': t_block_to_lines.Group(
            $p.group,
            {
                'indentation': $p.indentation
            }
        )
    })
}