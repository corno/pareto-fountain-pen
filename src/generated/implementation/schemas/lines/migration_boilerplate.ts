import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/lines/unresolved"
import * as _i_signatures from "../../../interface/schemas/lines/migration_boilerplate"


export const Directory: _i_signatures._T_Directory = ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Directory.D => {
    switch ($[0]) {
        case 'directory': return _pa.ss($, ($) => ['directory', Directory(
            $,
            null
        )])
        case 'file': return _pa.ss($, ($) => ['file', Lines(
            $,
            null
        )])
        default: return _pa.au($[0])
    }
}))
export const Lines: _i_signatures._T_Lines = ($) => $.map(($) => $)
