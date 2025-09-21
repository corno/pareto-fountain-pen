import * as pd from 'exupery-core-data'

import * as _target from "../generated/interface/schemas/block/data_types/target"

import * as sh from "exupery-core-data/dist/shorthands/unconstrained"

export namespace b {

    export const simple_line = (line: string): _target.Block_Part => ['line', line]

    export const nested_line = (snippets: _target.Line_Part[]): _target.Block_Part => ['nested line', pd.a(snippets)]

    export const sub = (block_parts: _target.Block_Part[]): _target.Block_Part => ['sub block', pd.a(block_parts)]

    export const sub_decorated = (block: _target.Block): _target.Block_Part => ['sub block', block]

    export const nothing = (): _target.Block_Part => ['nothing', null]

}

export namespace l {

    export const indent = (lines: _target.Block_Part[]): _target.Line_Part => ['indent', pd.a(lines)]

    export const snippet = (snippet: string): _target.Line_Part => ['snippet', snippet]

    export const sub = (line_parts: _target.Line_Part[]): _target.Line_Part => ['sub line', pd.a(line_parts)]

    export const sub_decorated = (line: _target.Line): _target.Line_Part => ['sub line', line]

    export const nothing = (): _target.Line_Part => ['nothing', null]

}

export namespace n {

    export const file = (
        block: _target.Block
    ): _target.Node => ['file', block]

    export const directory = (
        children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
    ): _target.Node => ['directory', sh.wrap_dictionary(children)]
}

export const directory = (
    children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
): _target.Directory => sh.wrap_dictionary(children)

export const block = (block_parts: _target.Block_Part[]): _target.Block => pd.a(block_parts)
