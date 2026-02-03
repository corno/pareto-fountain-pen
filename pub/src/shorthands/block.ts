import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/generated/liana/schemas/block/data"
import * as d_text from "../interface/to_be_generated/text"

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'


export namespace g {

    export const list = (group_parts: _pi.List<d_target.Group.L>): d_target.Group_Part => ['sub group', group_parts]

    export const nested_block = (snippets: _p.Raw_Or_Normal_List<d_target.Block.L>): d_target.Group_Part => ['nested block', _p.list.literal(snippets)]

    export const nothing = (): d_target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _pi.Optional_Value<d_target.Group.L>): d_target.Group_Part => ['optional', Group_Part]

    export const rich = (
        items: _p.Raw_Or_Normal_List<d_target.Group.L>,
        if_empty: d_target.Group_Part,
        indent: boolean,
        before: d_target.Group_Part,
        separator: d_target.Group_Part,
        after: d_target.Group_Part,
    ): d_target.Group_Part => ['rich list', {
        'items': _p.list.literal(items),
        'if empty': if_empty,
        'if not empty': {
            'indent': indent,
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const simple_block = (block: string): d_target.Group_Part => ['block', block]

    export const sub = (group_parts: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Group_Part => ['sub group', _p.list.literal(group_parts)]

}

export namespace b {

    export const decimal = (value: number): d_target.Block_Part => ['snippet', `${value}`]

    export const indent = (blocks: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Block_Part => ['indent', _p.list.literal(blocks)]

    export const list = (block_parts: _pi.List<d_target.Block.L>): d_target.Block_Part => ['sub block', block_parts]

    export const literal = (snippet: string): d_target.Block_Part => ['snippet', snippet]

    export const nothing = (): d_target.Block_Part => ['nothing', null]

    export const optional = (block_part: _pi.Optional_Value<d_target.Block.L>): d_target.Block_Part => ['optional', block_part]

    export const rich = (
        items: _p.Raw_Or_Normal_List<d_target.Block.L>,
        if_empty: d_target.Block_Part,
        before: d_target.Block_Part,
        separator: d_target.Block_Part,
        after: d_target.Block_Part,
    ): d_target.Block_Part => ['rich list', {
        'items': _p.list.literal(items),
        'if empty': if_empty,
        'if not empty': {
            'before': before,
            'separator': separator,
            'after': after,
        },
    }]

    export const sub = (block_parts: _p.Raw_Or_Normal_List<d_target.Block.L>): d_target.Block_Part => ['sub block', _p.list.literal(block_parts)]

    export const text = (snippet: d_text.Text): d_target.Block_Part => ['snippet', _p_text_from_list(snippet, ($) => $)]

}

export namespace n {

    export const file = (
        block: d_target.Group
    ): d_target.Node => ['file', block]

    export const directory = (
        children: _p.Raw_Or_Normal_Dictionary<d_target.Node>,
    ): d_target.Node => ['directory', _p.dictionary.literal(children)]
}

export const directory = (
    children: _p.Raw_Or_Normal_Dictionary<d_target.Node>,
): d_target.Directory => _p.dictionary.literal(children)

export const group = (Group_Parts: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Group => _p.list.literal(Group_Parts)