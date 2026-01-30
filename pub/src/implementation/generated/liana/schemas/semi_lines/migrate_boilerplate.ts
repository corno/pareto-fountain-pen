
import * as _p from "pareto-core/dist/transformer"

import {
    _p_cc,
} from "pareto-core/dist/change_context"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/semi_lines/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/semi_lines/data"

export const Lines: t_signatures.Lines = ($) => _p.list.map(
    $,
    ($) => ({
        'text': _p_cc(
            $['text'],
            ($) => $
        ),
        'indentation': _p_cc(
            $['indentation'],
            ($) => $
        ),
    })
)

export const Directory: t_signatures.Directory = ($) => _p.dictionary.map(
    $,
    ($, id) => _p.decide.state(
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
