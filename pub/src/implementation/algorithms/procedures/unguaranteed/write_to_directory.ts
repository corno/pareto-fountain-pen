
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

import * as D from "../../../../temp/temp_types"

import { $$ as p_write_to_node } from "./write_to_node"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/write_to_directory"


const temp_conditional_sync = <Procedure_Error>( //move this one to _easync
    precondition: boolean,
    procedure: _easync.Unguaranteed_Procedure_Promise<Procedure_Error>,
): _easync.Unguaranteed_Procedure_Promise<Procedure_Error> => {
    return _easync.__create_unguaranteed_procedure({
        'execute': (on_success, on_exception) => {
            if (precondition) {
                procedure.__start(
                    on_success,
                    on_exception
                )
            } else {
                on_success()
            }
        }
    })
}

export type Resources = {
    'procedures': {
        'remove': _easync.Unguaranteed_Procedure<d_remove.Parameters, d_remove.Error, null>
        'make directory': _easync.Unguaranteed_Procedure<d_make_directory.Parameters, d_make_directory.Error, null>
        'write file': _easync.Unguaranteed_Procedure<d_write_file.Parameters, d_write_file.Error, null>
    }
}


export const $$: _easync.Unguaranteed_Procedure<D.Directory_Parameters, D.Directory_Error, Resources> = (
    $p, $r,
) => {
    return _easync.up.sequence<D.Directory_Error>([
        temp_conditional_sync(
            $p['remove before creating'],
            $r.procedures.remove(
                {
                    'path': {
                        'path': $p.path,
                        'escape spaces in path': true,
                    },
                    'error if not exists': false
                },
                null,
            ).map_error(($) => ['remove', $])

        ),
        _easync.up.dictionary(
            $p.directory.map(($, key) => p_write_to_node(
                {
                    'node': $,
                    'path': $p.path,
                    'key': key,
                    'indentation': $p.indentation,
                    'newline': $p.newline,
                    'remove before creating': false,
                },
                $r,
            )),
            ($): D.Directory_Error => ['nodes', $]
        )
    ])
}