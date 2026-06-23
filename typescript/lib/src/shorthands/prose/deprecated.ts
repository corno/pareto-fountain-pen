import * as p_ from 'pareto-core-shorthands/dist/unconstrained_deprecated'
import * as p_di from 'pareto-core/dist/interface/data'

import * as d_target from "../../interface/generated/liana/schemas/prose/data"
import * as d_text from "../../interface/generated/liana/schemas/list_of_characters/data"


export namespace pg {

    export const nothing = (): d_target.Paragraph => ['nothing', null]

    export const optional = (Paragraph: p_di.Optional_Value<d_target.Paragraph>): d_target.Paragraph => ['optional', Paragraph]

    export const rich = (
        items: p_.Raw_Or_Normal_List<d_target.Sentence>,
        if_empty: null | d_target.Sentence,
        indent: boolean,
        before: null | d_target.Sentence,
        separator: null | d_target.Phrase,
        after: null | d_target.Sentence,
    ): d_target.Paragraph => ['rich list', {
        'items': p_.list(items),
        'if empty': p_.optional.null_or_value(if_empty),
        'if not empty': {
            'indent': indent,
            'before': p_.optional.null_or_value(before),
            'separator': p_.optional.null_or_value(separator),
            'after': p_.optional.null_or_value(after),
        },
    }]

    export const composed = (
        Group_Parts: p_.Raw_Or_Normal_List<d_target.Paragraph>
    ): d_target.Paragraph => ['composed', p_.list(Group_Parts)]

    export const sentences = (
        sentences: p_.Raw_Or_Normal_List<d_target.Sentence>
    ): d_target.Paragraph => ['sentences', p_.list(sentences)]
}

export const sentence = (
    phrases: p_.Raw_Or_Normal_List<d_target.Phrase>
): d_target.Sentence => p_.list(phrases)

export namespace ph {

    export const indent = (
        paragraph: d_target.Paragraph
    ): d_target.Phrase => ['indent', paragraph]

    export const nothing = (
    ): d_target.Phrase => ['nothing', null]

    export const optional = (
        block_part: p_di.Optional_Value<d_target.Phrase>
    ): d_target.Phrase => ['optional', block_part]

    export const rich = (
        items: p_.Raw_Or_Normal_List<d_target.Phrase>,
        if_empty: d_target.Phrase,
        before: d_target.Phrase,
        separator: d_target.Phrase,
        after: d_target.Phrase,
    ): d_target.Phrase => ['rich list', {
        'items': p_.list(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const composed = (
        phrases: p_.Raw_Or_Normal_List<d_target.Phrase>
    ): d_target.Phrase => ['composed', p_.list(phrases)]

    export const decimal = (
        value: number
    ): d_target.Phrase => ['value', ['text', `${value}`]]

    export const literal = (
        value: string
    ): d_target.Phrase => ['value', ['text', value]]

    export const serialize = (
        value: d_text.List_of_Characters
    ): d_target.Phrase => ['value', ['list of characters', value]]
}