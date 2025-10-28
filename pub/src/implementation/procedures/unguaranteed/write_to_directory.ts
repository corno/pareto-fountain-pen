
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import { $$ as p_remove } from "exupery-resources/dist/procedures/unguaranteed/remove"
import { $$ as p_do_nothing } from "exupery-resources/dist/procedures/guaranteed/do_nothing"

import * as D from "../../../temp/temp_types"

import { $$ as p_write_to_node } from "./write_to_node"

export const $$: _easync.Unguaranteed_Procedure_Initializer<D.Directory_Parameters, D.Directory_Error> = (
    $p
) => {
    return _easync.up.sequence<D.Directory_Error>([

        $p['remove before creating']
            ? _easync.upi.u(
                p_remove,
                ($): D.Directory_Error => ['remove', $]
            )({
                'path': {
                    'path': $p.path,
                    'escape spaces in path': true,
                },
                'error if not exists': false
            })
            : _easync.upi.u(
                p_do_nothing,
                ($): D.Directory_Error => _ea.panic("not reachable")
            )(null),

        _easync.up.dictionary(
            $p.directory.map(($, key) => p_write_to_node({
                'node': $,
                'path': $p.path,
                'key': key,
                'indentation': $p.indentation,
                'newline': $p.newline,
                'remove before creating': false,
            })),
            ($): D.Directory_Error => ['nodes', $]
        )
    ])
}