
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/lines/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/lines/data"
export const Lines: t_signatures.Lines = ($,) => $.__l_map(($,) => $)
export const Directory: t_signatures.Directory = ($,) => $.__d_map(($,key,) => _p.decide.state($, ($,): t_out.Directory.D => {
    switch ($[0]) {
        case 'file':
            return _p.ss($, ($,) => ['file', Lines($)])
        case 'directory':
            return _p.ss($, ($,) => ['directory', Directory($)])
        default:
            return _p.au($[0])
    }
}))
