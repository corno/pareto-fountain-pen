import * as p_ from 'pareto-core-shorthands/unconstrained_deprecated'
import * as p_di from 'pareto-core/interface/schema'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import * as p_s from 'pareto-core/implementation/serializer'

import type * as s_target from "pareto-core/temp/fountain_pen/prose"



export namespace ph {
    export const composed = (
        phrases: p_.Raw_Or_Normal_List<s_target.Phrase>
    ): s_target.Phrase => ['composed', p_.list(phrases)]

    export const literal = (
        value: string
    ): s_target.Phrase => ['value', ['text', value]]

    export const list_of_characters = (
        value: p_di.List<number>
    ): s_target.Phrase => ['value', ['text', p_text_from_list(
        p_.list(value),
        ($) => $,
    )]]
}