import * as _easync from 'exupery-core-async'

import * as _in from "../generated/interface/schemas/block/data_types/target"

import * as t_block_to_lines from "../transformations/block/lines"

import { $$ as c_error } from "exupery-resources/dist/actions/log_error"

export type Parameters = {
    'block': _in.Block,
    'indentation': string,
}

export const $$: _easync.Guaranteed_Procedure_Initializer<Parameters> = (
    $p,
) => {
    return c_error({
        'lines': t_block_to_lines.Block(
            $p.block,
            {
                'indentation': $p.indentation
            }
        )
    })
}