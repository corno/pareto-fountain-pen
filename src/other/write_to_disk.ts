
import * as pa from 'exupery-core-alg'

import { temp_resources } from 'exupery-core-resources'

import * as s_in from "../generated/interface/schemas/block/data_types/source"

import * as t_block_2_lines from "../transformations/block/lines"

import { pure } from "pareto-standard-operations"

const op = {
    'join list of texts': pure.text['join list of texts'],
}

export const File = (
    $: s_in.Block,
    $p: {
        'directory path': string
        'filename': string
        'indentation': string
        'newline': string
    }
) => {
    temp_resources.fs['make directory']($p['directory path'], true)
    temp_resources.fs['write file sync'](
        `${$p['directory path']}/${$p.filename}`,
        op['join list of texts'](
            t_block_2_lines.Block($, { 'indentation': $p.indentation }).map(($) => $ + $p.newline),
        ),
        true,
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
) => {
    switch ($[0]) {
        case 'file':
            pa.ss($, ($) => {
                File($, {
                    'directory path': $p.path,
                    'filename': $p.key,
                    'indentation': $p.indentation,
                    'newline': $p.newline
                })
            })
            break
        case 'directory':
            pa.ss($, ($) => {
                Directory(
                    $,
                    {
                        'path': `${$p.path}/${$p.key}`,
                        'indentation': $p.indentation,
                        'newline': $p.newline,
                        'remove before creating': false,
                    }
                )
            })
            break
        default: pa.au($[0])
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
) => {
    if ($p['remove before creating'] && temp_resources.fs.exists($p.path, false)) { //don't escape the path. It is a command line argument
        temp_resources.fs['remove sync']($p.path, false, {
            'recursive': true,
        })
    }
    $.map(($, key) => {
        Node($, {
            'path': $p.path,
            'key': key,
            'indentation': $p.indentation,
            'newline': $p.newline,
            'remove before creating': $p['remove before creating'],
        })
    })
}

