import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/text/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Lines: _i_signatures._T_Lines = ($, $p) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
export const Directory: _i_signatures._T_Directory = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'file': return _pa.ss($, ($) => ({
            'state': "file",
            'value': Lines(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'directory': return _pa.ss($, ($) => ({
            'state': "directory",
            'value': Directory(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
