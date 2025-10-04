
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as d_resources from "exupery-resources/dist/types"

import { $$ as p_make_directory } from "exupery-resources/dist/procedures/make_directory"
import { $$ as p_write_file } from "exupery-resources/dist/procedures/write_file"
import { $$ as p_remove } from "exupery-resources/dist/procedures/remove"

import * as s_in from "../generated/interface/schemas/block/data_types/source"

import * as t_block_2_lines from "../transformations/block/lines"

import * as D from "./temp_types"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/pure/text/join_list_of_texts"


export const $$: _easync.Unguaranteed_Procedure_Initializer<D.File_Parameters, D.File_Error> = (
    $p
) => {
    return _easync.up.sequence([
        _easync.upi.u(
            p_make_directory,
            ($): D.File_Error => ['make directory', $]
        )({
            'path': $p['directory path'],
            'escape spaces in path': true,
        }),
        _easync.upi.u(
            p_write_file,
            ($): D.File_Error => ['write file', $]
        )({
            'path': {
                'path': `${$p['directory path']}/${$p.filename}`,
                'escape spaces in path': true,
            },
            'data': op_join_list_of_texts(
                t_block_2_lines.Block($p.block, { 'indentation': $p.indentation }).map(($) => $ + $p.newline),
            ),
        })
    ])
}