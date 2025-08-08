import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/block/data_types/unconstrained"
import * as _i_signatures from "../../../interface/schemas/block/unmarshall"


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
export const Block_Part: _i_signatures._T_Block_Part = ($, $p) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'line': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['line', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
            'nested line': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['nested line', Line(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                null
            ),
            'nothing': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'sub block': ($): _i_out._T_Block_Part => _i_generic.wrap_unconstrained_state_group(
                ['sub block', Block(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                null
            ),
        }),
    }
)
export const Directory: _i_signatures._T_Directory = ($, $p) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'directory': ($): _i_out._T_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['directory', Directory(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        null
                    ),
                    'file': ($): _i_out._T_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['file', Block(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        null
                    ),
                }),
            }
        ),
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
export const Line_Part: _i_signatures._T_Line_Part = ($, $p) => _i_generic.process_state_group(
    $,
    {
        'states': _pa.dictionary_literal({
            'indent': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['indent', Block(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                null
            ),
            'nothing': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['nothing', _i_generic.process_nothing(
                    $,
                    null
                )],
                null
            ),
            'snippet': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['snippet', _i_generic.process_text(
                    $,
                    null
                )],
                null
            ),
            'sub line': ($): _i_out._T_Line_Part => _i_generic.wrap_unconstrained_state_group(
                ['sub line', Line(
                    $,
                    {
                        'value deserializers': $p['value deserializers'],
                    }
                )],
                null
            ),
        }),
    }
)
