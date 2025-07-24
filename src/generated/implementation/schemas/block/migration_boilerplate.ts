import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/schemas/block/unresolved"
import * as _i_signatures from "../../../interface/schemas/block/migration_boilerplate"


export const Block: _i_signatures._T_Block = ($) => $.map(($) => Block_Part(
    $,
    null
))
export const Block_Part: _i_signatures._T_Block_Part = ($) => _pa.cc($, ($): _i_out._T_Block_Part => {
    switch ($[0]) {
        case 'line': return _pa.ss($, ($) => ['line', $])
        case 'nested line': return _pa.ss($, ($) => ['nested line', Line(
            $,
            null
        )])
        case 'nothing': return _pa.ss($, ($) => ['nothing', null])
        case 'sub block': return _pa.ss($, ($) => ['sub block', Block(
            $,
            null
        )])
        default: return _pa.au($[0])
    }
})
export const Directory: _i_signatures._T_Directory = ($) => $.map(($) => _pa.cc($, ($): _i_out._T_Directory.D => {
    switch ($[0]) {
        case 'directory': return _pa.ss($, ($) => ['directory', Directory(
            $,
            null
        )])
        case 'file': return _pa.ss($, ($) => ['file', Block(
            $,
            null
        )])
        default: return _pa.au($[0])
    }
}))
export const Line: _i_signatures._T_Line = ($) => $.map(($) => Line_Part(
    $,
    null
))
export const Line_Part: _i_signatures._T_Line_Part = ($) => _pa.cc($, ($): _i_out._T_Line_Part => {
    switch ($[0]) {
        case 'indent': return _pa.ss($, ($) => ['indent', Block(
            $,
            null
        )])
        case 'nothing': return _pa.ss($, ($) => ['nothing', null])
        case 'snippet': return _pa.ss($, ($) => ['snippet', $])
        case 'sub line': return _pa.ss($, ($) => ['sub line', Line(
            $,
            null
        )])
        default: return _pa.au($[0])
    }
})
export const Lines: _i_signatures._T_Lines = ($) => $.map(($) => ({
    'indentation': _pa.cc($['indentation'], ($) => $),
    'text': _pa.cc($['text'], ($) => $),
}))
