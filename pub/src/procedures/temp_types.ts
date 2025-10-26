import * as _et from 'exupery-core-types'

import * as d_resources_errors from "exupery-resources/dist/generated/interface/schemas/errors/data_types/target"
import * as d_in from "../generated/interface/schemas/block/data_types/source"

export type File_Error =
    | ['make directory', d_resources_errors.Make_Directory]
    | ['write file', d_resources_errors.Write_File]

export type Directory_Error =
    | ['remove', d_resources_errors.Remove]
    | ['nodes', _et.Dictionary<Node_Error>]

export type Node_Error =
    | ['directory', Directory_Error]
    | ['file', File_Error]

export type File_Parameters = {
    'block': d_in.Block,
    'directory path': string
    'filename': string
    'indentation': string
    'newline': string
}

export type Directory_Parameters = {
    'directory': d_in.Directory,
    'path': string
    'indentation': string
    'newline': string
    'remove before creating': boolean
}

export type Node_Parameters = {
    'node': d_in.Node,
    'path': string
    'key': string
    'indentation': string
    'newline': string
    'remove before creating': boolean
}