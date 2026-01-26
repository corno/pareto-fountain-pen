
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/text/marshall"

import * as t_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"

import * as v_serialize_number from "liana-core/dist/implementation/manual/primitives/integer/serializers/decimal"

import * as v_serialize_boolean from "liana-core/dist/implementation/manual/primitives/boolean/serializers/true_false"
export const Lines: t_signatures.Lines = ($,) => ['text', ({
    'delimiter': ['quote', null],
    'value': $,
})]
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
