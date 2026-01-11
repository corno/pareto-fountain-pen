    import * as _p from 'pareto-core-serializer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/semi_lines/serialize"
    import * as _i_serialize from "../../generic/serialize"
    import * as _i_marshall from "./marshall"
    
    
    export const Lines: _i_signatures._T_Lines = ($, $p) => _i_serialize.Document(
        _i_marshall.Lines(
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
