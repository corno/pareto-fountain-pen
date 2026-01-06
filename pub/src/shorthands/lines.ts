import * as _p from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/generated/pareto/schemas/lines/data_types/target"

export namespace d {

    export const file = (
        lines: d_target.Lines
    ): d_target.Directory.D => ['file', lines]

    export const directory = (
        children: _p.Raw_Or_Normal_Dictionary<d_target.Directory.D>,
    ): d_target.Directory.D => ['directory', _p.dictionary.literal(children)]
}
