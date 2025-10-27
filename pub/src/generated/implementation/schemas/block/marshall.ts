import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_out from "../../../interface/core/astn_target"
import * as _i_signatures from "../../../interface/schemas/block/marshall"


export const Block: _i_signatures._T_Block = ($, $p) => ['list', $.map(($) => Block_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'indent': return _pa.ss($, ($) => ({
            'state': "indent",
            'value': Group(
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
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', Block_Part(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )],
        }))
        case 'snippet': return _pa.ss($, ($) => ({
            'state': "snippet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
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
export const Directory: _i_signatures._T_Directory = ($, $p) => ['dictionary', $.map(($) => Node(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Group: _i_signatures._T_Group = ($, $p) => ['list', $.map(($) => Group_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'block': return _pa.ss($, ($) => ({
            'state': "block",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'nested block': return _pa.ss($, ($) => ({
            'state': "nested block",
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
        case 'optional': return _pa.ss($, ($) => ({
            'state': "optional",
            'value': ['optional', $.transform(
                ($): _i_out._T_Value.SG.optional => ['set', Group_Part(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )],
        }))
        case 'sub group': return _pa.ss($, ($) => ({
            'state': "sub group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
export const Node: _i_signatures._T_Node = ($, $p) => ['state', _pa.cc($, ($): _i_out._T_Value.SG.state => {
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
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _pa.au($[0])
    }
})]
