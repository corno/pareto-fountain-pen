import * as _easync from 'exupery-core-async'

import * as _in from "../../../../interface/generated/pareto/schemas/block/data_types/target"

import * as t_block_to_lines from "../../transformations/block/lines"

import { Signature } from "../../../../interface/algorithms/procedures/guaranteed/console_log"

import * as d_log from "exupery-resources/dist/interface/generated/pareto/schemas/log/data_types/source"


export type Parameters = {
    'group': _in.Group,
    'indentation': string,
}

export type Resources = {

    'procedures': {
        'log': _easync.Guaranteed_Procedure<d_log.Parameters, null>

    }
}

export const $$: _easync.Guaranteed_Procedure<Parameters, Resources> = (
    $p, $r
) => {
    return $r.procedures.log(
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