import * as _edata from 'exupery-core-data'
import * as _et from 'exupery-core-types'

import * as _target from "../generated/interface/schemas/block/data_types/target"

import * as sh from "exupery-core-data/dist/shorthands/unconstrained"

export namespace g {

    export const simple_line = (line: string): _target.Group_Part => ['line', line]

    export const nested_line = (snippets: sh.Raw_Or_Normal_Array<_target.Line.L>): _target.Group_Part => ['nested line', sh.wrap_list(snippets)]

    export const sub = (group_parts: sh.Raw_Or_Normal_Array<_target.Group.L>): _target.Group_Part => ['sub group', sh.wrap_list(group_parts)]

    export const nothing = (): _target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _et.Optional_Value<_target.Group.L>): _target.Group_Part => ['optional', Group_Part]

}

export namespace l {

    export const indent = (lines: sh.Raw_Or_Normal_Array<_target.Group.L>): _target.Line_Part => ['indent', sh.wrap_list(lines)]

    export const snippet = (snippet: string): _target.Line_Part => ['snippet', snippet]

    export const sub = (line_parts: sh.Raw_Or_Normal_Array<_target.Line.L>): _target.Line_Part => ['sub line', sh.wrap_list(line_parts)]

    export const nothing = (): _target.Line_Part => ['nothing', null]

    export const optional = (line_part: _et.Optional_Value<_target.Line.L>): _target.Line_Part => ['optional', line_part]

}

export namespace n {

    export const file = (
        block: _target.Group
    ): _target.Node => ['file', block]

    export const directory = (
        children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
    ): _target.Node => ['directory', sh.wrap_dictionary(children)]
}

export const directory = (
    children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
): _target.Directory => sh.wrap_dictionary(children)

export const group = (Group_Parts: sh.Raw_Or_Normal_Array<_target.Group.L>): _target.Group => sh.wrap_list(Group_Parts)
