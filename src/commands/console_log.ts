import * as _easync from 'exupery-core-async'

import * as _in from "../generated/interface/schemas/block/data_types/target"

import * as t_block_to_lines from "../transformations/block/lines"

import { $$ as c_log } from "exupery-resources/dist/commands/log"

export const Block = (
    $: _in.Block,
    $p: {
        'indentation': string,
    }
): _easync.Safe_Command_Result => {
    return c_log(t_block_to_lines.Block(
        $,
        {
            'indentation': $p.indentation
        }
    ))
}