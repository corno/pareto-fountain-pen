import { Raw_Or_Normal_Dictionary, wrap_dictionary } from 'pareto-core-shorthands/dist/unconstrained'

import * as _target from "../interface/generated/pareto/schemas/lines/data_types/target"

export namespace d {

    export const file = (
        lines: _target.Lines
    ): _target.Directory.D => ['file', lines]

    export const directory = (
        children: Raw_Or_Normal_Dictionary<_target.Directory.D>,
    ): _target.Directory.D => ['directory', wrap_dictionary(children)]
}
