import * as pd from 'exupery-core-data'

import * as _resolved from "../generated/interface/schemas/block/resolved" //FIXME... should be 'poormans_parser'

export namespace b {

    export const simple_line = (line: string): _resolved.Block_Part => ['line', line]

    export const nested_line = (snippets: _resolved.Line_Part[]): _resolved.Block_Part => ['nested line', pd.a(snippets)]

    export const sub = (block_parts: _resolved.Block_Part[]): _resolved.Block_Part => ['sub block', pd.a(block_parts)]

    export const sub_decorated = (block: _resolved.Block): _resolved.Block_Part => ['sub block', block]

    export const nothing = (): _resolved.Block_Part => ['nothing', null]

}

export namespace l {

    export const indent = (lines: _resolved.Block_Part[]): _resolved.Line_Part => ['indent', pd.a(lines)]

    export const snippet = (snippet: string): _resolved.Line_Part => ['snippet', snippet]

    export const sub = (line_parts: _resolved.Line_Part[]): _resolved.Line_Part => ['sub line', pd.a(line_parts)]

    export const sub_decorated = (line: _resolved.Line): _resolved.Line_Part => ['sub line', line]

    export const nothing = (): _resolved.Line_Part => ['nothing', null]

}

export namespace d {

    export const file = (
        block_parts: _resolved.Block_Part[]
    ): _resolved.Directory.D => ['file', pd.a(block_parts)]

    export const directory = (
        children: { [key: string]: _resolved.Directory.D },
    ): _resolved.Directory.D => ['directory', pd.d(children)]
}

export const block = (block_parts: _resolved.Block_Part[]): _resolved.Block => pd.a(block_parts)
