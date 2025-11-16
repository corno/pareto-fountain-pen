
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _easync from 'exupery-core-async'

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import * as D from "../../../temp/temp_types"

import { $$ as p_write_to_node } from "./write_to_node"
import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/write_to_directory"

export type Resources = {
    'commands': {
        'remove': _et.Command<d_remove.Parameters, d_remove.Error>
        'make directory': _et.Command<d_make_directory.Parameters, d_make_directory.Error>
        'write file': _et.Command<d_write_file.Parameters, d_write_file.Error>
    }
}

export const $$: _et.Command_Procedure<D.Directory_Parameters, D.Directory_Error, Resources> = _easync.create_command_procedure(
    ($r, $p) => _easync.p.sequence<D.Directory_Error>([
        _easync.p.conditional.direct(
            $p['remove before creating'],
            $r.commands.remove.execute.direct(
                ($) => ['remove', $],
                {
                    'path': {
                        'path': $p.path,
                        'escape spaces in path': true,
                    },
                    'error if not exists': false
                },
            )
        ),
        _easync.p.dictionary.parallel.direct(
            $p.directory,
            ($, key) => p_write_to_node({
                'commands': {
                    'remove': $r.commands.remove,
                    'make directory': $r.commands['make directory'],
                    'write file': $r.commands['write file'],
                }
            }).execute.direct(
                ($) => $,
                {
                    'node': $,
                    'path': $p.path,
                    'key': key,
                    'indentation': $p.indentation,
                    'newline': $p.newline,
                    'remove before creating': false,
                },
            ),
            ($): D.Directory_Error => ['nodes', $]
        )
    ])
)