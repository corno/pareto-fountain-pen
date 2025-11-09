
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as D from "../../../../temp/temp_types"

import { $$ as p_write_to_file } from "./write_to_file"
import { $$ as p_write_to_directory } from "./write_to_directory"
import { Signature } from "../../../../interface/algorithms/procedures/unguaranteed/write_to_node"


export const $$: _easync.Unguaranteed_Procedure<D.Node_Parameters, D.Node_Error, null> = (
    $p
) => {
    return _ea.cc($p.node, ($) => {
        switch ($[0]) {
            case 'file':
                return _ea.ss($, ($) => {
                    return _easync.upi.u(
                        p_write_to_file,
                        ($): D.Node_Error => ['file', $]
                    )(
                        {
                            'group': $,
                            'directory path': $p.path,
                            'filename': $p.key,
                            'indentation': $p.indentation,
                            'newline': $p.newline
                        },
                        null,
                    )
                })
            case 'directory':
                return _ea.ss($, ($) => {
                    return _easync.upi.u(
                        p_write_to_directory,
                        ($): D.Node_Error => ['directory', $]
                    )(
                        {
                            'directory': $,
                            'path': `${$p.path}/${$p.key}`,
                            'indentation': $p.indentation,
                            'newline': $p.newline,
                            'remove before creating': false,
                        },
                        null,
                    )
                })
            default: return _ea.au($[0])
        }
    })
}