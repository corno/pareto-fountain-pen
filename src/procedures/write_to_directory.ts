
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as d_resources from "exupery-resources/dist/types"

import { $$ as a_make_directory } from "exupery-resources/dist/actions/make_directory"
import { $$ as a_write_file } from "exupery-resources/dist/actions/write_file"
import { $$ as a_remove } from "exupery-resources/dist/actions/remove"
import { $$ as a_do_nothing } from "exupery-resources/dist/actions/do_nothing"

import * as s_in from "../generated/interface/schemas/block/data_types/source"

import * as t_block_2_lines from "../transformations/block/lines"

import * as D from "./temp_types"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/pure/text/join_list_of_texts"

import { $$ as a_write_to_node } from "./write_to_node"

export const $$: _easync.Unguaranteed_Procedure_Initializer<D.Directory_Parameters, D.Directory_Error> = (
    $p
) => {
    return _easync.u.p.sequence<D.Directory_Error>([

        $p['remove before creating']
            ? _easync.u.a.u(
                a_remove,
                ($): D.Directory_Error => ['remove', $]
            )({
                'path': $p.path,
                'escape spaces in path': true,
            })
            : _easync.u.a.u(
                a_do_nothing,
                ($): D.Directory_Error => _ea.panic("not reachable")
            )(null),
            
        _easync.u.p.dictionary(
            $p.directory.map(($, key) => a_write_to_node({
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