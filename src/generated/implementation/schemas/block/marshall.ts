import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/block/marshall"


export const Block: _i_signatures._T_s_Block = ($, $p) => ['list', $.map(($) => Block_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Block_Part: _i_signatures._T_s_Block_Part = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'line': return _pa.ss($, ($) => ({
            'state': "line",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'nested line': return _pa.ss($, ($) => ({
            'state': "nested line",
            'value': Line(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'sub block': return _pa.ss($, ($) => ({
            'state': "sub block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Directory: _i_signatures._T_s_Directory = ($, $p) => ['dictionary', $.map(($) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'directory': return _pa.ss($, ($) => ({
            'state': "directory",
            'value': Directory(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'file': return _pa.ss($, ($) => ({
            'state': "file",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})])]
export const Line: _i_signatures._T_s_Line = ($, $p) => ['list', $.map(($) => Line_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Line_Part: _i_signatures._T_s_Line_Part = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'indent': return _pa.ss($, ($) => ({
            'state': "indent",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'nothing': return _pa.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        case 'snippet': return _pa.ss($, ($) => ({
            'state': "snippet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'sub line': return _pa.ss($, ($) => ({
            'state': "sub line",
            'value': Line(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Lines: _i_signatures._T_s_Lines = ($, $p) => ['list', $.map(($) => ['verbose group', _pa.dictionary_literal({
    'indentation': _pa.cc($['indentation'], ($) => ['text', ({
        'delimiter': ['backtick', null],
        'value': "FIXME NUMBER",
    })]),
    'text': _pa.cc($['text'], ($) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
})])]
