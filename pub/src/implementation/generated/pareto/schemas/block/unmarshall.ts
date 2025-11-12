import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/block/unmarshall"
import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
import * as _i_out from "../../../../../interface/generated/pareto/schemas/block/data_types/target"


export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'snippet': ($): _i_out._T_Block_Part.SG => ['snippet', _i_generic.process_text(
                $,
                null
            )],
            'indent': ($): _i_out._T_Block_Part.SG => ['indent', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'sub block': ($): _i_out._T_Block_Part.SG => ['sub block', Block(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'optional': ($): _i_out._T_Block_Part.SG => ['optional', _i_generic.process_optional(
                $,
                {
                    'value': ($) => Block_Part(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'nothing': ($): _i_out._T_Block_Part.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Block: _i_signatures._T_Block = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Block_Part(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'nested block': ($): _i_out._T_Group_Part.SG => ['nested block', Block(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'block': ($): _i_out._T_Group_Part.SG => ['block', _i_generic.process_text(
                $,
                null
            )],
            'sub group': ($): _i_out._T_Group_Part.SG => ['sub group', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'optional': ($): _i_out._T_Group_Part.SG => ['optional', _i_generic.process_optional(
                $,
                {
                    'value': ($) => Group_Part(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'nothing': ($): _i_out._T_Group_Part.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
        }),
    }
)
export const Group: _i_signatures._T_Group = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Group_Part(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Node: _i_signatures._T_Node = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'file': ($): _i_out._T_Node.SG => ['file', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'directory': ($): _i_out._T_Node.SG => ['directory', Directory(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Directory: _i_signatures._T_Directory = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => Node(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
