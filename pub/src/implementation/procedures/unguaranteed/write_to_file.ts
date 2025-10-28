
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import { $$ as p_make_directory } from "exupery-resources/dist/procedures/unguaranteed/make_directory"
import { $$ as p_write_file } from "exupery-resources/dist/procedures/unguaranteed/write_file"
import { $$ as p_remove } from "exupery-resources/dist/procedures/unguaranteed/remove"

import * as d_in from "../../../interface/generated/pareto/schemas/block/data_types/source"

import * as t_block_2_lines from "../../transformations/block/lines"

import * as D from "../../../temp/temp_types"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/operations/pure/text/join_list_of_texts"


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
                t_block_2_lines.Group($p.group, { 'indentation': $p.indentation }).map(($) => $ + $p.newline),
            ),
        })
    ])
}