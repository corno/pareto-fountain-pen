
import * as _p from "pareto-core/dist/transformer"

import { 
    _p_unreachable_code_path, 
} from "pareto-core/dist/unreachable_code_path"

import { 
    _p_cc, 
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/text/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/text/data"
export const Lines: t_signatures.Lines = ($) => $
export const Directory: t_signatures.Directory = ($) => $.__d_map(
    ($,id) => _p.decide.state(
        $, 
        ($): t_out.Directory.D => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $, 
                        ($) => ['file', Lines(
                            $
                        )]
                    )
                case 'directory':
                    return _p.ss(
                        $, 
                        ($) => ['directory', Directory(
                            $
                        )]
                    )
                default:
                    return _p.au(
                        $[0]
                    )
            }
        }
    )
)
