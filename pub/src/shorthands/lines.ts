import * as ed from 'exupery-core-data'

import * as _target from "../interface/generated/pareto/schemas/lines/data_types/target"
import { Raw_Or_Normal_Dictionary, wrap_dictionary } from 'exupery-core-data/dist/shorthands/unconstrained'

export namespace d {

    export const file = (
        lines: _target.Lines
    ): _target.Directory.D => ['file', lines]

    export const directory = (
        children: Raw_Or_Normal_Dictionary<_target.Directory.D>,
    ): _target.Directory.D => ['directory', wrap_dictionary(children)]
}
