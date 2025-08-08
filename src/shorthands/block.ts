import * as pd from 'exupery-core-data'

import * as _out from "../generated/interface/schemas/block/data_types/unconstrained"

import * as sh from "exupery-core-data/dist/shorthands/unconstrained"

export namespace b {

    export const simple_line = (line: string): _out.Block_Part => ['line', line]

    export const nested_line = (snippets: _out.Line_Part[]): _out.Block_Part => ['nested line', pd.a(snippets)]

    export const sub = (block_parts: _out.Block_Part[]): _out.Block_Part => ['sub block', pd.a(block_parts)]

    export const sub_decorated = (block: _out.Block): _out.Block_Part => ['sub block', block]

    export const nothing = (): _out.Block_Part => ['nothing', null]

}

export namespace l {

    export const indent = (lines: _out.Block_Part[]): _out.Line_Part => ['indent', pd.a(lines)]

    export const snippet = (snippet: string): _out.Line_Part => ['snippet', snippet]

    export const sub = (line_parts: _out.Line_Part[]): _out.Line_Part => ['sub line', pd.a(line_parts)]

    export const sub_decorated = (line: _out.Line): _out.Line_Part => ['sub line', line]

    export const nothing = (): _out.Line_Part => ['nothing', null]

}

export namespace d {

    export const file = (
        block: _out.Block
    ): _out.Directory.D => ['file', block]

    export const directory = (
        children: sh.Raw_Or_Normal_Dictionary<_out.Directory.D>,
    ): _out.Directory.D => ['directory', sh.wrap_dictionary(children)]
}

export const block = (block_parts: _out.Block_Part[]): _out.Block => pd.a(block_parts)
