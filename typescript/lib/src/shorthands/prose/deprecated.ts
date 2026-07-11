import * as p_ from 'pareto-core-shorthands/unconstrained_deprecated'
import * as p_di from 'pareto-core/interface/data'

import type * as s_target from "../../interface/schemas/prose.js"
import type * as s_text from "../../interface/schemas/list_of_characters.js"


export namespace pg {

    export const rich = (
        items: p_.Raw_Or_Normal_List<s_target.Sentence>,
        if_empty: null | s_target.Sentence,
        indent: boolean,
        before: null | s_target.Sentence,
        separator: null | s_target.Phrase,
        after: null | s_target.Sentence,
    ): s_target.Paragraph => ['rich list', {
        'items': p_.list(items),
        'if empty': p_.optional.null_or_value(if_empty),
        'if not empty': {
            'indent': indent,
            'before': p_.optional.null_or_value(before),
            'separator': p_.optional.null_or_value(separator),
            'after': p_.optional.null_or_value(after),
        },
    }]

    export const deprecated_composed = (
        Group_Parts: p_.Raw_Or_Normal_List<s_target.Paragraph>
    ): s_target.Paragraph => ['composed', p_.list(Group_Parts)]

    export const sentences = (
        sentences: p_.Raw_Or_Normal_List<s_target.Sentence>
    ): s_target.Paragraph => ['sentences', p_.list(sentences)]
}

export const sentence = (
    phrases: p_.Raw_Or_Normal_List<s_target.Phrase>
): s_target.Sentence => p_.list(phrases)

export namespace ph {

    export const indent = (
        paragraph: s_target.Paragraph
    ): s_target.Phrase => ['indent', paragraph]

    export const nothing = (
    ): s_target.Phrase => ['nothing', null]

    export const optional = (
        block_part: p_di.Optional_Value<s_target.Phrase>
    ): s_target.Phrase => ['optional', block_part]

    export const rich = (
        items: p_.Raw_Or_Normal_List<s_target.Phrase>,
        if_empty: s_target.Phrase,
        before: s_target.Phrase,
        separator: s_target.Phrase,
        after: s_target.Phrase,
    ): s_target.Phrase => ['rich list', {
        'items': p_.list(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const composed = (
        phrases: p_.Raw_Or_Normal_List<s_target.Phrase>
    ): s_target.Phrase => ['composed', p_.list(phrases)]

    export const decimal = (
        value: number
    ): s_target.Phrase => ['value', ['text', `${value}`]]

    export const literal = (
        value: string
    ): s_target.Phrase => ['value', ['text', value]]

    export const serialize = (
        value: s_text.List_of_Characters
    ): s_target.Phrase => ['value', ['list of characters', value]]
}