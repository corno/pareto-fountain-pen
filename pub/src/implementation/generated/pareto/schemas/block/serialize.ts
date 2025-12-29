import * as _pa from 'pareto-core-serializer'
import * as _pd from 'pareto-core-dev'

import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/block/serialize"
import * as _i_serialize from "../../generic/serialize"
import * as _i_marshall from "./marshall"


export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => _i_serialize.Document(
    _i_marshall.Block_Part(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Block: _i_signatures._T_Block = ($, $p) => _i_serialize.Document(
    _i_marshall.Block(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => _i_serialize.Document(
    _i_marshall.Group_Part(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Group: _i_signatures._T_Group = ($, $p) => _i_serialize.Document(
    _i_marshall.Group(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Node: _i_signatures._T_Node = ($, $p) => _i_serialize.Document(
    _i_marshall.Node(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
export const Directory: _i_signatures._T_Directory = ($, $p) => _i_serialize.Document(
    _i_marshall.Directory(
        $,
        {
            'value serializers': $p['value serializers'],
        }
    )
)
