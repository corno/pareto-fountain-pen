import * as _et from 'exupery-core-types'

import * as d_write_file from "exupery-resources/dist/generated/interface/schemas/write_file/data_types/target"
import * as d_remove from "exupery-resources/dist/generated/interface/schemas/remove/data_types/target"
import * as d_make_directory from "exupery-resources/dist/generated/interface/schemas/make_directory/data_types/target"
import * as d_in from "../generated/interface/schemas/block/data_types/source"

export type File_Error =
    | ['make directory', d_make_directory.Errors]
    | ['write file', d_write_file.Errors]

export type Directory_Error =
    | ['remove', d_remove.Errors]
    | ['nodes', _et.Dictionary<Node_Error>]

export type Node_Error =
    | ['directory', Directory_Error]
    | ['file', File_Error]

export type File_Parameters = {
    'group': d_in.Group,
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