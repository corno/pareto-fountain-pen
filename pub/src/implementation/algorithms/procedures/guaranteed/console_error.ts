import * as _easync from 'exupery-core-async'

import * as _in from "../../../../interface/generated/pareto/schemas/block/data_types/target"

import * as t_block_to_lines from "../../transformations/block/lines"

import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"


import { Signature } from "../../../../interface/algorithms/procedures/guaranteed/console_error"


export type Parameters = {
    'group': _in.Group,
    'indentation': string,
}


export type Resources = {

    'procedures': {
        'log error': _easync.Guaranteed_Procedure<d_log_error.Parameters, null>

    }
}
export const $$: _easync.Guaranteed_Procedure<Parameters, Resources> = (
    $p, $r
) => {
    return $r.procedures['log error'](
        {
            'lines': t_block_to_lines.Group(
                $p.group,
                {
                    'indentation': $p.indentation
                }
            )
        },
        null,
    )
}