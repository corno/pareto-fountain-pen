import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/liana/schemas/prose/data"
import * as d_text from "../interface/to_be_generated/list_of_characters"


export namespace pg {

    export const nothing = (): d_target.Paragraph => ['nothing', null]

    export const optional = (Paragraph: _pi.Optional_Value<d_target.Paragraph>): d_target.Paragraph => ['optional', Paragraph]

    export const rich = (
        items: _p.Raw_Or_Normal_List<d_target.Sentence>,
        if_empty: null | d_target.Sentence,
        indent: boolean,
        before: null | d_target.Sentence,
        separator: null | d_target.Phrase,
        after: null | d_target.Sentence,
    ): d_target.Paragraph => ['rich list', {
        'items': _p.list.literal(items),
        'if empty': _p.optional.literalx(if_empty),
        'if not empty': {
            'indent': indent,
            'before': _p.optional.literalx(before),
            'separator': _p.optional.literalx(separator),
            'after': _p.optional.literalx(after),
        },
    }]

    export const composed = (
        Group_Parts: _p.Raw_Or_Normal_List<d_target.Paragraph>
    ): d_target.Paragraph => ['composed', _p.list.literal(Group_Parts)]

    export const sentences = (
        sentences: _p.Raw_Or_Normal_List<d_target.Sentence>
    ): d_target.Paragraph => ['sentences', _p.list.literal(sentences)]
}

export const sentence = (
    phrases: _p.Raw_Or_Normal_List<d_target.Phrase>
): d_target.Sentence => _p.list.literal(phrases)

export namespace ph {

    export const indent = (
        paragraph: d_target.Paragraph
    ): d_target.Phrase => ['indent', paragraph]

    export const nothing = (
    ): d_target.Phrase => ['nothing', null]

    export const optional = (
        block_part: _pi.Optional_Value<d_target.Phrase>
    ): d_target.Phrase => ['optional', block_part]

    export const rich = (
        items: _p.Raw_Or_Normal_List<d_target.Phrase>,
        if_empty: d_target.Phrase,
        before: d_target.Phrase,
        separator: d_target.Phrase,
        after: d_target.Phrase,
    ): d_target.Phrase => ['rich list', {
        'items': _p.list.literal(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const composed = (
        phrases: _p.Raw_Or_Normal_List<d_target.Phrase>
    ): d_target.Phrase => ['composed', _p.list.literal(phrases)]

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