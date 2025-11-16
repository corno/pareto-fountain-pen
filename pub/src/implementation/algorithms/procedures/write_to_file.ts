
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as t_block_2_lines from "../transformations/block/lines"

import * as D from "../../../temp/temp_types"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/text/join_list_of_texts"

import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/write_to_file"

export type Resources = {
    'commands': {
        'make directory': _et.Command<d_make_directory.Parameters, d_make_directory.Error>
        'write file': _et.Command<d_write_file.Parameters, d_write_file.Error>
    }
}

export const $$: _et.Command_Procedure<D.File_Parameters, D.File_Error, Resources> = _easync.create_command_procedure(
    ($r, $p) => _easync.p.sequence<D.File_Error>([
        $r.commands['make directory'].execute.direct(
            ($) => ['make directory', $],
            {
                'path': $p['directory path'],
                'escape spaces in path': true,
            },
        ),
        $r.commands['write file'].execute.direct(
            ($) => ['write file', $],
            {
                'path': {
                    'path': `${$p['directory path']}/${$p.filename}`,
                    'escape spaces in path': true,
                },
                'data': op_join_list_of_texts(
                    t_block_2_lines.Group($p.group, { 'indentation': $p.indentation }).map(($) => $ + $p.newline),
                ),
            },
        )
    ])
)