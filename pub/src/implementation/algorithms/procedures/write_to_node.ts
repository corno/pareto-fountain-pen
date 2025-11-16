
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as D from "../../../temp/temp_types"

import { $$ as p_write_to_file } from "./write_to_file"
import { $$ as p_write_to_directory } from "./write_to_directory"
import { Signature } from "../../../interface/algorithms/procedures/unguaranteed/write_to_node"

import * as d_remove from "exupery-resources/dist/interface/generated/pareto/schemas/remove/data_types/source"
import * as d_make_directory from "exupery-resources/dist/interface/generated/pareto/schemas/make_directory/data_types/source"
import * as d_write_file from "exupery-resources/dist/interface/generated/pareto/schemas/write_file/data_types/source"

export type Resources = {
    'procedures': {
        'remove': _et.Command<d_remove.Parameters, d_remove.Error>
                'make directory': _et.Command<d_make_directory.Parameters, d_make_directory.Error>
                'write file': _et.Command<d_write_file.Parameters, d_write_file.Error>
    }
}

export const $$: _et.Command_Procedure<D.Node_Parameters, D.Node_Error, Resources> = (
 $r
) => {
    return ($p) => _ea.cc($p.node, ($) => {
        switch ($[0]) {
            case 'file':
                return _ea.ss($, ($) => {
                    return p_write_to_file($r)({
                            'group': $,
                            'directory path': $p.path,
                            'filename': $p.key,
                            'indentation': $p.indentation,
                            'newline': $p.newline
                        }).map_error(($): D.Node_Error => ['file', $])
                })
            case 'directory':
                return _ea.ss($, ($) => {
                    return p_write_to_directory($r)({
                            'directory': $,
                            'path': `${$p.path}/${$p.key}`,
                            'indentation': $p.indentation,
                            'newline': $p.newline,
                            'remove before creating': false,
                        }).map_error(($): D.Node_Error => ['directory', $])
                })
            default: return _ea.au($[0])
        }
    })
}