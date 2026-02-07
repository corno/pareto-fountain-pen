import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/liana/schemas/block/data"
import * as d_text from "../interface/to_be_generated/list_of_characters"


export namespace pg {

    export const nothing = (): d_target.Paragraph => ['nothing', null]

    export const optional = (Paragraph: _pi.Optional_Value<d_target.Paragraph>): d_target.Paragraph => ['optional', Paragraph]

    export const rich = (
        items: _p.Raw_Or_Normal_List<d_target.Sentence>,
        if_empty: d_target.Sentence,
        indent: boolean,
        before: d_target.Phrase,
        separator: d_target.Phrase,
        after: d_target.Phrase,
    ): d_target.Paragraph => ['rich list', {
        'items': _p.list.literal(items),
        'if empty': if_empty,
        'if not empty': {
            'indent': indent,
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const composed = (
        Group_Parts: _p.Raw_Or_Normal_List<d_target.Paragraph>
    ): d_target.Paragraph => ['composed', _p.list.literal(Group_Parts)]

    export const sentences = (
        phrases: _p.Raw_Or_Normal_List<d_target.Phrase>
    ): d_target.Paragraph => ['sentences', _p.list.literal(phrases)]
}

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

    export const single_line = (
        parts: _p.Raw_Or_Normal_List<d_target.Single_Line.L>
    ): d_target.Phrase => ['single line', _p.list.literal(parts)]




    export const decimal = (
        value: number
    ): d_target.Phrase => ['single line', _p.list.literal([['snippet', `${value}`]])]

    export const literal = (
        snippet: string
    ): d_target.Phrase => ['single line', _p.list.literal([['snippet', snippet]])]

    export const serialize = (
        snippet: d_text.List_of_Characters
    ): d_target.Phrase => ['single line', _p.list.literal([['serialize', snippet]])]
}

export namespace sl {

    export const decimal = (
        value: number
    ): d_target.Single_Line.L => ['snippet', `${value}`]

    export const literal = (
        snippet: string
    ): d_target.Single_Line.L => ['snippet', snippet]

    export const serialize = (
        snippet: d_text.List_of_Characters
    ): d_target.Single_Line.L => ['serialize', snippet]

    export const rich = (
        items: _p.Raw_Or_Normal_List<d_target.Single_Line>,
        if_empty: d_target.Single_Line,
        before: d_target.Single_Line,
        separator: d_target.Single_Line,
        after: d_target.Single_Line,
    ): d_target.Single_Line.L => ['rich list', {
        'items': _p.list.literal(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]
}

export namespace n {

    export const file = (
        paragraph: d_target.Paragraph
    ): d_target.Node => ['file', paragraph]

    export const directory = (
        children: _p.Raw_Or_Normal_Dictionary<d_target.Node>,
    ): d_target.Node => ['directory', _p.dictionary.literal(children)]

}

export const directory = (
    children: _p.Raw_Or_Normal_Dictionary<d_target.Node>,
): d_target.Directory => _p.dictionary.literal(children)

