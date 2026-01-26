
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/block/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Block_Part: t_signatures.Block_Part = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'snippet':
            return _p.ss($, ($,) => ({
                'option': "snippet",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
        case 'indent':
            return _p.ss($, ($,) => ({
                'option': "indent",
                'value': Group($),
            }))
        case 'sub block':
            return _p.ss($, ($,) => ({
                'option': "sub block",
                'value': Block($),
            }))
        case 'optional':
            return _p.ss($, ($,) => ({
                'option': "optional",
                'value': ['optional', $(($,) => ['set', Block_Part($)], () => ['set', Block_Part($)])],
            }))
        case 'nothing':
            return _p.ss($, ($,) => ({
                'option': "nothing",
                'value': ['nothing', null],
            }))
        case 'rich list':
            return _p.ss($, ($,) => ({
                'option': "rich list",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'elements': _p.deprecated_cc($['elements'], ($,) => ['list', $.__l_map(($,) => Block_Part($))]),
                    'if empty': _p.deprecated_cc($['if empty'], ($,) => Block_Part($)),
                    'if not empty': _p.deprecated_cc($['if not empty'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
                        'before': _p.deprecated_cc($['before'], ($,) => Block_Part($)),
                        'separator': _p.deprecated_cc($['separator'], ($,) => Block_Part($)),
                        'after': _p.deprecated_cc($['after'], ($,) => Block_Part($)),
                    }))]]),
                }))]],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Block: t_signatures.Block = ($,) => ['list', $.__l_map(($,) => Block_Part($))]
export const Group_Part: t_signatures.Group_Part = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'nested block':
            return _p.ss($, ($,) => ({
                'option': "nested block",
                'value': Block($),
            }))
        case 'block':
            return _p.ss($, ($,) => ({
                'option': "block",
                'value': ['text', ({
                    'delimiter': ['quote', null],
                    'value': $,
                })],
            }))
        case 'sub group':
            return _p.ss($, ($,) => ({
                'option': "sub group",
                'value': Group($),
            }))
        case 'optional':
            return _p.ss($, ($,) => ({
                'option': "optional",
                'value': ['optional', $(($,) => ['set', Group_Part($)], () => ['set', Group_Part($)])],
            }))
        case 'nothing':
            return _p.ss($, ($,) => ({
                'option': "nothing",
                'value': ['nothing', null],
            }))
        case 'rich list':
            return _p.ss($, ($,) => ({
                'option': "rich list",
                'value': ['group', ['verbose', _p.dictionary.literal(({
                    'elements': _p.deprecated_cc($['elements'], ($,) => ['list', $.__l_map(($,) => Group_Part($))]),
                    'if empty': _p.deprecated_cc($['if empty'], ($,) => Group_Part($)),
                    'if not empty': _p.deprecated_cc($['if not empty'], ($,) => ['group', ['verbose', _p.dictionary.literal(({
                        'indent': _p.deprecated_cc($['indent'], ($,) => ['text', ({
                            'delimiter': ['backtick', null],
                            'value': v_serialize_boolean.serialize($),
                        })]),
                        'before': _p.deprecated_cc($['before'], ($,) => Group_Part($)),
                        'separator': _p.deprecated_cc($['separator'], ($,) => Group_Part($)),
                        'after': _p.deprecated_cc($['after'], ($,) => Group_Part($)),
                    }))]]),
                }))]],
            }))
        default:
            return _p.au($[0])
    }
})]
export const Group: t_signatures.Group = ($,) => ['list', $.__l_map(($,) => Group_Part($))]
export const Node: t_signatures.Node = ($,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'file':
            return _p.ss($, ($,) => ({
                'option': "file",
                'value': Group($),
            }))
        case 'directory':
            return _p.ss($, ($,) => ({
                'option': "directory",
                'value': Directory($),
            }))
        default:
            return _p.au($[0])
    }
})]
export const Directory: t_signatures.Directory = ($,) => ['dictionary', $.__d_map(($,key,) => Node($))]
