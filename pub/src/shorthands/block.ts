import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core-interface'

import * as d_target from "../interface/generated/pareto/schemas/block/data_types/target"


export namespace g {

    export const simple_block = (block: string): d_target.Group_Part => ['block', block]

    export const nested_block = (snippets: _p.Raw_Or_Normal_List<d_target.Block.L>): d_target.Group_Part => ['nested block', _p.list.literal(snippets)]

    export const sub = (group_parts: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Group_Part => ['sub group', _p.list.literal(group_parts)]

    export const list = (group_parts: _pi.List<d_target.Group.L>): d_target.Group_Part => ['sub group', group_parts]

    export const nothing = (): d_target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _pi.Optional_Value<d_target.Group.L>): d_target.Group_Part => ['optional', Group_Part]

}

export namespace b {

    export const indent = (blocks: _p.Raw_Or_Normal_List<d_target.Group.L>): d_target.Block_Part => ['indent', _p.list.literal(blocks)]

    export const snippet = (snippet: string): d_target.Block_Part => ['snippet', snippet]

    export const sub = (block_parts: _p.Raw_Or_Normal_List<d_target.Block.L>): d_target.Block_Part => ['sub block', _p.list.literal(block_parts)]

    export const list = (block_parts: _pi.List<d_target.Block.L>): d_target.Block_Part => ['sub block', block_parts]

    export const nothing = (): d_target.Block_Part => ['nothing', null]

    export const optional = (block_part: _pi.Optional_Value<d_target.Block.L>): d_target.Block_Part => ['optional', block_part]

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