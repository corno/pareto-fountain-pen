
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/semi_lines/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Lines: t_signatures.Lines = ($,) => ['list', $.__l_map(($,) => ['group', ['verbose', _p.dictionary.literal(({
    'text': _p.deprecated_cc($['text'], ($,) => ['text', ({
        'delimiter': ['quote', null],
        'value': $,
    })]),
    'indentation': _p.deprecated_cc($['indentation'], ($,) => ['text', ({
        'delimiter': ['backtick', null],
        'value': v_serialize_number.serialize($),
    })]),
}))]])]
export const Directory: t_signatures.Directory = ($,) => ['dictionary', $.__d_map(($,key,) => ['state', _p.decide.state($, ($,): t_out.Value.state => {
    switch ($[0]) {
        case 'file':
            return _p.ss($, ($,) => ({
                'option': "file",
                'value': Lines($),
            }))
        case 'directory':
            return _p.ss($, ($,) => ({
                'option': "directory",
                'value': Directory($),
            }))
        default:
            return _p.au($[0])
    }
})])]
