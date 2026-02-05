    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/semi_lines/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/semi_lines/data"
    
    export const Lines: t_signatures.Lines = ($) => _p.list.map(
        $,
        ($) => ({
            'text': _p_change_context(
                $['text'],
                ($) => $,
            ),
            'indentation': _p_change_context(
                $['indentation'],
                ($) => $,
            ),
        }),
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
                                $,
                            )],
                        )
                    case 'directory':
                        return _p.ss(
                            $,
                            ($) => ['directory', Directory(
                                $,
                            )],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
