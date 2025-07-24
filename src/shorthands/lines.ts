import * as ed from 'exupery-core-data'

import * as _resolved from "../generated/interface/schemas/lines/resolved" //FIXME... should be 'poormans_parser'
import { Raw_Or_Normal_Dictionary, wrap_dictionary } from 'exupery-core-data/dist/shorthands'

export namespace d {

    export const file = (
        lines: _resolved.Lines
    ): _resolved.Directory.D => ['file', lines]

    export const directory = (
        children: Raw_Or_Normal_Dictionary<_resolved.Directory.D>,
    ): _resolved.Directory.D => ['directory', wrap_dictionary(children).dictionary.map((v) => v.entry)]
}
