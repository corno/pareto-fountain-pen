import * as _pa from 'exupery-core-alg'
import * as _pd from 'exupery-core-dev'

import * as _i_generic from "../../generic/unmarshall"
import * as _i_out from "../../../interface/schemas/lines/data_types/unconstrained"
import * as _i_signatures from "../../../interface/schemas/lines/unmarshall"


export const Directory: _i_signatures._T_Directory = ($) => _i_generic.process_unconstrained_dictionary(
    $,
    {
        'value': ($) => _i_generic.process_state_group(
            $,
            {
                'states': _pa.dictionary_literal({
                    'directory': ($): _i_out._T_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['directory', Directory(
                            $,
                            null
                        )],
                        null
                    ),
                    'file': ($): _i_out._T_Directory.D => _i_generic.wrap_unconstrained_state_group(
                        ['file', Lines(
                            $,
                            null
                        )],
                        null
                    ),
                }),
            }
        ),
    }
)
export const Lines: _i_signatures._T_Lines = ($) => _i_generic.process_unconstrained_list(
    $,
    {
        'value': ($) => _i_generic.process_text(
            $,
            null
        ),
    }
)
