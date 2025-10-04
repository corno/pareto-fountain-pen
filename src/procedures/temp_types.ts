import * as _et from 'exupery-core-types'

import * as d_resources from "exupery-resources/dist/types"
import * as s_in from "../generated/interface/schemas/block/data_types/source"

export type File_Error =
    | ['make directory', d_resources.Make_Directory_Error]
    | ['write file', d_resources.Write_File_Error]

export type Directory_Error =
    | ['remove', d_resources.Remove_Error]
    | ['nodes', _et.Dictionary<Node_Error>]

export type Node_Error =
    | ['directory', Directory_Error]
    | ['file', File_Error]

export type File_Parameters = {
    'block': s_in.Block,
    'directory path': string
    'filename': string
    'indentation': string
    'newline': string
}

export type Directory_Parameters = {
    'directory': s_in.Directory,
    'path': string
    'indentation': string
    'newline': string
    'remove before creating': boolean
}

export type Node_Parameters = {
    'node': s_in.Node,
    'path': string
    'key': string
    'indentation': string
    'newline': string
    'remove before creating': boolean
}