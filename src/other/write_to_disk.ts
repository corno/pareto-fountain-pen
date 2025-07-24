
import * as pa from 'exupery-core-alg'

import { temp_resources } from 'exupery-core-resources'

import * as s_in from "../generated/interface/schemas/lines/unresolved"



import { pure } from "pareto-standard-operations"

const op = {
    'join list of texts': pure.text['join list of texts'],
}

export const File = (
    $: s_in.Lines,
    $p: {
        'directory path': string,
        'filename': string,
    }
) => {
    temp_resources.fs['make directory']($p['directory path'], true)
    temp_resources.fs['write file sync'](
        `${$p['directory path']}/${$p.filename}`,
        op['join list of texts'](
            $.map(($) => $ + "\n"),
        ),
        true,
    )
}

export const Directory = (
    $: s_in.Directory,
    $p: {
        'path': string
    }
) => {
    const write_directory_to_disk = (
        $: s_in.Directory,
        $p: {
            'path': string
        }
    ) => {
        $.map(($, key) => {
            switch ($[0]) {
                case 'file':
                    pa.ss($, ($) => {
                        temp_resources.fs['make directory']($p.path, true)
                        temp_resources.fs['write file sync'](
                            `${$p.path}/${key}`,
                            op['join list of texts'](
                                $.map(($) => $ + "\n"),
                            ),
                            true,
                        )
                    })
                    break
                case 'directory':
                    pa.ss($, ($) => {
                        write_directory_to_disk(
                            $,
                            {
                                'path': `${$p.path}/${key}`
                            }
                        )
                    })
                    break
                default: pa.au($[0])
            }
        })

    }
    if (temp_resources.fs.exists($p.path, false)) { //don't escape the path. It is a command line argument
        temp_resources.fs['remove sync']($p.path, false, {
            'recursive': true,
        })
    }
    write_directory_to_disk(
        $,
        {
            'path': $p.path
        }
    )
}

