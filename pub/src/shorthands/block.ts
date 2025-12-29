import * as _pi from 'pareto-core-interface'
import * as sh from 'pareto-core-shorthands/dist/unconstrained'

import * as _target from "../interface/generated/pareto/schemas/block/data_types/target"


export namespace g {

    export const simple_block = (block: string): _target.Group_Part => ['block', block]

    export const nested_block = (snippets: sh.Raw_Or_Normal_List<_target.Block.L>): _target.Group_Part => ['nested block', sh.wrap_list(snippets)]

    export const sub = (group_parts: sh.Raw_Or_Normal_List<_target.Group.L>): _target.Group_Part => ['sub group', sh.wrap_list(group_parts)]

    export const nothing = (): _target.Group_Part => ['nothing', null]

    export const optional = (Group_Part: _pi.Optional_Value<_target.Group.L>): _target.Group_Part => ['optional', Group_Part]

}

export namespace b {

    export const indent = (blocks: sh.Raw_Or_Normal_List<_target.Group.L>): _target.Block_Part => ['indent', sh.wrap_list(blocks)]

    export const snippet = (snippet: string): _target.Block_Part => ['snippet', snippet]

    export const sub = (block_parts: sh.Raw_Or_Normal_List<_target.Block.L>): _target.Block_Part => ['sub block', sh.wrap_list(block_parts)]

    export const nothing = (): _target.Block_Part => ['nothing', null]

    export const optional = (block_part: _pi.Optional_Value<_target.Block.L>): _target.Block_Part => ['optional', block_part]

}

export namespace n {

    export const file = (
        block: _target.Group
    ): _target.Node => ['file', block]

    export const directory = (
        children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
    ): _target.Node => ['directory', sh.wrap_dictionary(children)]
}

export const directory = (
    children: sh.Raw_Or_Normal_Dictionary<_target.Node>,
): _target.Directory => sh.wrap_dictionary(children)

export const group = (Group_Parts: sh.Raw_Or_Normal_List<_target.Group.L>): _target.Group => sh.wrap_list(Group_Parts)
