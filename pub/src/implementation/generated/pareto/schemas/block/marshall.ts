import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/block/marshall"
import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"


export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'snippet': return _p.ss($, ($) => ({
            'state': "snippet",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'indent': return _p.ss($, ($) => ({
            'state': "indent",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'sub block': return _p.ss($, ($) => ({
            'state': "sub block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'optional': return _p.ss($, ($) => ({
            'state': "optional",
            'value': ['optional', $.__decide(
                ($): _i_out._T_Value.SG.optional => ['set', Block_Part(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )],
        }))
        case 'nothing': return _p.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Block: _i_signatures._T_Block = ($, $p) => ['list', $.map(($) => Block_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'nested block': return _p.ss($, ($) => ({
            'state': "nested block",
            'value': Block(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'block': return _p.ss($, ($) => ({
            'state': "block",
            'value': ['text', ({
                'delimiter': ['quote', null],
                'value': $,
            })],
        }))
        case 'sub group': return _p.ss($, ($) => ({
            'state': "sub group",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'optional': return _p.ss($, ($) => ({
            'state': "optional",
            'value': ['optional', $.__decide(
                ($): _i_out._T_Value.SG.optional => ['set', Group_Part(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                )],
                () => ['not set', null]
            )],
        }))
        case 'nothing': return _p.ss($, ($) => ({
            'state': "nothing",
            'value': ['nothing', null],
        }))
        default: return _p.au($[0])
    }
})]
export const Group: _i_signatures._T_Group = ($, $p) => ['list', $.map(($) => Group_Part(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
export const Node: _i_signatures._T_Node = ($, $p) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ({
            'state': "file",
            'value': Group(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        case 'directory': return _p.ss($, ($) => ({
            'state': "directory",
            'value': Directory(
                $,
                {
                    'value serializers': $p['value serializers'],
                }
            ),
        }))
        default: return _p.au($[0])
    }
})]
export const Directory: _i_signatures._T_Directory = ($, $p) => ['dictionary', $.map(($) => Node(
    $,
    {
        'value serializers': $p['value serializers'],
    }
))]
