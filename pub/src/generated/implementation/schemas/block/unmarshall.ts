import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_in from "../../../interface/core/astn_source"
import * as _i_out from "../../../interface/schemas/block/data_types/target"
import * as _i_signatures from "../../../interface/schemas/block/unmarshall"


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
export const Group_Part: _i_signatures._T_Group_Part = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'line': ($): _i_out._T_Group_Part.SG => ['line', _i_generic.process_text(
                $,
                null
            )],
            'nested line': ($): _i_out._T_Group_Part.SG => ['nested line', Line(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'nothing': ($): _i_out._T_Group_Part.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
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
            'sub group': ($): _i_out._T_Group_Part.SG => ['sub group', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Line: _i_signatures._T_Line = ($, $p) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => Line_Part(
            $,
            {
                'value deserializers': $p['value deserializers'],
            }
        ),
    }
)
export const Line_Part: _i_signatures._T_Line_Part = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'indent': ($): _i_out._T_Line_Part.SG => ['indent', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'nothing': ($): _i_out._T_Line_Part.SG => ['nothing', _i_generic.process_nothing(
                $,
                null
            )],
            'optional': ($): _i_out._T_Line_Part.SG => ['optional', _i_generic.process_optional(
                $,
                {
                    'value': ($) => Line_Part(
                        $,
                        {
                            'value deserializers': $p['value deserializers'],
                        }
                    ),
                }
            )],
            'snippet': ($): _i_out._T_Line_Part.SG => ['snippet', _i_generic.process_text(
                $,
                null
            )],
            'sub line': ($): _i_out._T_Line_Part.SG => ['sub line', Line(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
export const Node: _i_signatures._T_Node = ($, $p) => _i_generic.process_unconstrained_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'directory': ($): _i_out._T_Node.SG => ['directory', Directory(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
            'file': ($): _i_out._T_Node.SG => ['file', Group(
                $,
                {
                    'value deserializers': $p['value deserializers'],
                }
            )],
        }),
    }
)
