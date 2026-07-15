import * as p_ from 'pareto-core-shorthands/unconstrained_target'
import * as p_di from 'pareto-core/interface/schema'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'
import * as p_s from 'pareto-core/implementation/serializer'

//schemas
import type * as s_target from "pareto-core/temp/fountain_pen/paragraph"


export namespace pg {

    export const deprecated_rich = (
        items: p_.Normal_List<s_target.Sentence>,
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
        Group_Parts: p_.Normal_List<s_target.Paragraph>
    ): s_target.Paragraph => ['composed', p_.list(Group_Parts)]

    export const sentences = (
        sentences: p_.Normal_List<s_target.Sentence>
    ): s_target.Paragraph => ['sentences', p_.list(sentences)]
}

export const sentence = (
    phrases: p_.Normal_List<s_target.Phrase>
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

    export const rich_phrase = (
        items: p_.Normal_List<s_target.Phrase>,
        if_empty: s_target.Phrase,
        before: s_target.Phrase,
        separator: s_target.Phrase,
        after: s_target.Phrase,
    ): s_target.Phrase => ['rich phrase', {
        'items': p_.list(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]
    export const rich_paragraph = (
        items: p_.Normal_List<s_target.Sentence>,
        if_empty: s_target.Phrase,
        before: s_target.Phrase,
        separator: s_target.Phrase,
        after: s_target.Phrase,
    ): s_target.Phrase => ['rich paragraph', {
        'items': p_.list(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const composed = (
        phrases: p_.Normal_List<s_target.Phrase>
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