import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as _in from "../../../interface/generated/pareto/schemas/block/data_types/target"

import * as t_block_to_lines from "../transformations/block/lines"

import * as d_log_error from "exupery-resources/dist/interface/generated/pareto/schemas/log_error/data_types/source"


import { Signature } from "../../../interface/algorithms/procedures/guaranteed/console_error"


export type Parameters = {
    'group': _in.Group,
    'indentation': string,
}


export type Resources = {
    'commands': {
        'log error': _et.Command<d_log_error.Parameters, null>

    }
}

export const $$: _et.Command_Procedure<Parameters, null, Resources> = _easync.create_command_procedure(
    ($r, $p) => $r.commands['log error'].execute.direct(
        ($) => $,
        {
            'lines': t_block_to_lines.Group(
                $p.group,
                {
                    'indentation': $p.indentation
                }
            )
        },
    )
)