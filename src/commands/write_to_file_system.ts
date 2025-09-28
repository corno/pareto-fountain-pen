
import * as _ea from 'exupery-core-alg'
import * as _et from 'exupery-core-types'
import * as _ei from 'exupery-core-internals'
import * as _easync from 'exupery-core-async'

import * as d_resources from "exupery-resources/dist/types"

import { $$ as make_directory } from "exupery-resources/dist/commands/make_directory"
import { $$ as write_file } from "exupery-resources/dist/commands/write_file"
import { $$ as remove } from "exupery-resources/dist/commands/remove"

import * as s_in from "../generated/interface/schemas/block/data_types/source"

import * as t_block_2_lines from "../transformations/block/lines"

import { $$ as op_join_list_of_texts } from "pareto-standard-operations/dist/pure/text/join_list_of_texts"

export type File_Error =
    | ['make directory', d_resources.Make_Directory_Error]
    | ['write file', d_resources.Write_File_Error]

export type Dir_Error =
    | ['remove', d_resources.Remove_Error]
    | ['nodes', _et.Dictionary<Node_Error>]

export type Node_Error =
    | ['directory', Dir_Error]
    | ['file', File_Error]

export const File = (
    $: s_in.Block,
    $p: {
        'directory path': string
        'filename': string
        'indentation': string
        'newline': string
    }
): _easync.Unsafe_Command_Result<
    File_Error
> => {
    return make_directory(
        $p['directory path'],
        true,
    ).map_exception<File_Error>(
        ($) => ['make directory', $]
    ).then(
        () => write_file(
            `${$p['directory path']}/${$p.filename}`,
            op_join_list_of_texts(
                t_block_2_lines.Block($, { 'indentation': $p.indentation }).map(($) => $ + $p.newline),
            ),
            true,
        ).map_exception(
            ($) => ['write file', $]
        )
    )
}

export const Node = (
    $: s_in.Node,
    $p: {
        'path': string
        'key': string
        'indentation': string
        'newline': string
        'remove before creating': boolean
    }
): _easync.Unsafe_Command_Result<
    Node_Error
> => {
    switch ($[0]) {
        case 'file':
            return _ea.ss($, ($) => {
                return File($, {
                    'directory path': $p.path,
                    'filename': $p.key,
                    'indentation': $p.indentation,
                    'newline': $p.newline
                }).map_exception<Node_Error>(($) => ['file', $])
            })
        case 'directory':
            return _ea.ss($, ($) => {
                return Directory(
                    $,
                    {
                        'path': `${$p.path}/${$p.key}`,
                        'indentation': $p.indentation,
                        'newline': $p.newline,
                        'remove before creating': false,
                    }
                ).map_exception(($) => ['directory', $])
            })
        default: return _ea.au($[0])
    }
}

export const Directory = (
    $: s_in.Directory,
    $p: {
        'path': string
        'indentation': string
        'newline': string
        'remove before creating': boolean
    }
): _easync.Unsafe_Command_Result<
    Dir_Error
> => {
    return _easync.command.unsafe['create result']<Dir_Error>(
    ).then(
        () => $p['remove before creating']
            ? remove($p.path, true, {}).map_exception(($): Dir_Error => ['remove', $])
            : _easync.command.unsafe['create result']()
    ).then_dictionary(
        $.map(($, key) => Node($, {
            'path': $p.path,
            'key': key,
            'indentation': $p.indentation,
            'newline': $p.newline,
            'remove before creating': false,
        })),
        ($): Dir_Error => ['nodes', $]
    )
}

