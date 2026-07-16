import * as p_ from 'pareto-core-shorthands/unconstrained_target'
import * as p_di from 'pareto-core/interface/schema'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import * as p_s from 'pareto-core/implementation/serializer'

//schemas
import type * as s_target from "../../interface/schemas/rich_phrase.js"


export namespace ph {
    export const composed = (
        phrases: p_.Normal_List<s_target.Phrase>
    ): s_target.Phrase => ['composed', p_.list(phrases)]

    export const text = (
        value: string
    ): s_target.Phrase => ['value', ['text', value]]

    export const list_of_characters = (
        value: p_di.List<number>
    ): s_target.Phrase => ['value', ['text', p_text_from_list(
        p_.list(value),
        ($) => $,
    )]]


    export const rich_phrase = (
        items: p_.Normal_List<s_target.Phrase>,
        if_empty: null | s_target.Phrase,
        before: null | s_target.Phrase,
        separator: s_target.Phrase,
        after: null | s_target.Phrase,
    ): s_target.Phrase => ['rich phrase', {
        'items': p_.list(items),
        'if empty': if_empty ? if_empty : ['nothing', null],
        'if not empty': {
            'before': before ? before : ['nothing', null],
            'separator': separator,
            'after': after ? after : ['nothing', null],
        },
    }]
}