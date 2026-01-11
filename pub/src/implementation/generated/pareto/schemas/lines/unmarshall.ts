    import * as _p from 'pareto-core-refiner'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_generic from "../../generic/unmarshall"
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/lines/unmarshall"
    import * as _i_in from "../../../../../interface/generated/pareto/core/astn_source"
    import * as _i_out from "../../../../../interface/generated/pareto/schemas/lines/data_types/target"
    
    
    export const Lines: _i_signatures._T_Lines = ($, $p) => _i_generic.process_unconstrained_list(
        $,
        {
            'value': ($) => _i_generic.process_text(
                $,
                null
            ),
        }
    )
    export const Directory: _i_signatures._T_Directory = ($, $p) => _i_generic.process_unconstrained_dictionary(
        $,
        {
            'value': ($) => _i_generic.process_unconstrained_state_group(
                $,
                {
                    'states': _p.dictionary.literal({
                        'file': ($): _i_out._T_Directory.D.SG => ['file', Lines(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                        'directory': ($): _i_out._T_Directory.D.SG => ['directory', Directory(
                            $,
                            {
                                'value deserializers': $p['value deserializers'],
                            }
                        )],
                    }),
                }
            ),
        }
    )
