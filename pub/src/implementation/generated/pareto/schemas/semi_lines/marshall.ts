    import * as _p from 'pareto-core-transformer'
    import * as _pdev from 'pareto-core-dev'
    
    import * as _i_signatures from "../../../../../interface/generated/pareto/schemas/semi_lines/marshall"
    import * as _i_out from "../../../../../interface/generated/pareto/core/astn_target"
    
    
    export const Lines: _i_signatures._T_Lines = ($, $p) => ['list', $.__l_map(($) => ['verbose group', _p.dictionary.literal({
        'text': _p.deprecated_cc($['text'], ($) => ['text', ({
            'delimiter': ['quote', null],
            'value': $,
        })]),
        'indentation': _p.deprecated_cc($['indentation'], ($) => ['text', ({
            'delimiter': ['backtick', null],
            'value': $p['value serializers']['default number'](
                $,
                null
            ),
        })]),
    })])]
    export const Directory: _i_signatures._T_Directory = ($, $p) => ['dictionary', $.__d_map(($) => ['state', _p.deprecated_cc($, ($): _i_out._T_Value.SG.state => {
        switch ($[0]) {
            case 'file': return _p.ss($, ($) => ({
                'state': "file",
                'value': Lines(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            case 'directory': return _p.ss($, ($) => ({
                'state': "directory",
                'value': Directory(
                    $,
                    {
                        'value serializers': $p['value serializers'],
                    }
                ),
            }))
            default: return _p.au($[0])
        }
    })])]
