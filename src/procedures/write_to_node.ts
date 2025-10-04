
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as D from "./temp_types"

import { $$ as a_write_to_file } from "./write_to_file"
import { $$ as a_write_to_directory } from "./write_to_directory"

export const $$: _easync.Unguaranteed_Procedure_Initializer<D.Node_Parameters, D.Node_Error> = (
    $p
) => {
    return _ea.cc($p.node, ($) => {
        switch ($[0]) {
            case 'file':
                return _ea.ss($, ($) => {
                    return _easync.u.a.u(
                        a_write_to_file,
                        ($):D.Node_Error => ['file', $]
                    )({
                        'block': $,
                        'directory path': $p.path,
                        'filename': $p.key,
                        'indentation': $p.indentation,
                        'newline': $p.newline
                    })
                })
            case 'directory':
                return _ea.ss($, ($) => {
                    return _easync.u.a.u(
                        a_write_to_directory,
                        ($): D.Node_Error => ['directory', $]
                    )({
                        'directory': $,
                        'path': `${$p.path}/${$p.key}`,
                        'indentation': $p.indentation,
                        'newline': $p.newline,
                        'remove before creating': false,
                    })
                })
            default: return _ea.au($[0])
        }
    })
}