    
    import * as _p from "pareto-core/dist/expression"
    
    import _p_change_context from "pareto-core/dist/_p_change_context"
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/block/boilerplate_for_migrate"
    
    import * as t_out from "../../../../../../interface/generated/liana/schemas/block/data"
    
    export const Directory: t_signatures.Directory = ($) => _p.dictionary.map(
        $,
        ($, id) => Node(
            $,
        ),
    )
    
    export const Node: t_signatures.Node = ($) => _p.decide.state(
        $,
        ($): t_out.Node => {
            switch ($[0]) {
                case 'file':
                    return _p.ss(
                        $,
                        ($) => ['file', Paragraph(
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
    )
    
    export const Paragraph: t_signatures.Paragraph = ($) => _p.decide.state(
        $,
        ($): t_out.Paragraph => {
            switch ($[0]) {
                case 'composed':
                    return _p.ss(
                        $,
                        ($) => ['composed', _p.list.map(
                            $,
                            ($) => Paragraph(
                                $,
                            ),
                        )],
                    )
                case 'sentences':
                    return _p.ss(
                        $,
                        ($) => ['sentences', _p.list.map(
                            $,
                            ($) => Phrase(
                                $,
                            ),
                        )],
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', _p.optional.map(
                            $,
                            ($) => Paragraph(
                                $,
                            ),
                        )],
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'rich list':
                    return _p.ss(
                        $,
                        ($) => ['rich list', {
                            'items': _p_change_context(
                                $['items'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Paragraph(
                                        $,
                                    ),
                                ),
                            ),
                            'if empty': _p_change_context(
                                $['if empty'],
                                ($) => Paragraph(
                                    $,
                                ),
                            ),
                            'if not empty': _p_change_context(
                                $['if not empty'],
                                ($) => ({
                                    'indent': _p_change_context(
                                        $['indent'],
                                        ($) => $,
                                    ),
                                    'before': _p_change_context(
                                        $['before'],
                                        ($) => Paragraph(
                                            $,
                                        ),
                                    ),
                                    'separator': _p_change_context(
                                        $['separator'],
                                        ($) => Paragraph(
                                            $,
                                        ),
                                    ),
                                    'after': _p_change_context(
                                        $['after'],
                                        ($) => Paragraph(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        }],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )
    
    export const Phrase: t_signatures.Phrase = ($) => _p.decide.state(
        $,
        ($): t_out.Phrase => {
            switch ($[0]) {
                case 'single line':
                    return _p.ss(
                        $,
                        ($) => ['single line', Single_Line(
                            $,
                        )],
                    )
                case 'indent':
                    return _p.ss(
                        $,
                        ($) => ['indent', Paragraph(
                            $,
                        )],
                    )
                case 'composed':
                    return _p.ss(
                        $,
                        ($) => ['composed', _p.list.map(
                            $,
                            ($) => Phrase(
                                $,
                            ),
                        )],
                    )
                case 'optional':
                    return _p.ss(
                        $,
                        ($) => ['optional', _p.optional.map(
                            $,
                            ($) => Phrase(
                                $,
                            ),
                        )],
                    )
                case 'nothing':
                    return _p.ss(
                        $,
                        ($) => ['nothing', null],
                    )
                case 'rich list':
                    return _p.ss(
                        $,
                        ($) => ['rich list', {
                            'items': _p_change_context(
                                $['items'],
                                ($) => _p.list.map(
                                    $,
                                    ($) => Phrase(
                                        $,
                                    ),
                                ),
                            ),
                            'if empty': _p_change_context(
                                $['if empty'],
                                ($) => Phrase(
                                    $,
                                ),
                            ),
                            'if not empty': _p_change_context(
                                $['if not empty'],
                                ($) => ({
                                    'before': _p_change_context(
                                        $['before'],
                                        ($) => Phrase(
                                            $,
                                        ),
                                    ),
                                    'separator': _p_change_context(
                                        $['separator'],
                                        ($) => Phrase(
                                            $,
                                        ),
                                    ),
                                    'after': _p_change_context(
                                        $['after'],
                                        ($) => Phrase(
                                            $,
                                        ),
                                    ),
                                }),
                            ),
                        }],
                    )
                default:
                    return _p.au(
                        $[0],
                    )
            }
        },
    )
    
    export const Single_Line: t_signatures.Single_Line = ($) => _p.list.map(
        $,
        ($) => _p.decide.state(
            $,
            ($): t_out.Single_Line.L => {
                switch ($[0]) {
                    case 'snippet':
                        return _p.ss(
                            $,
                            ($) => ['snippet', $],
                        )
                    case 'serialize':
                        return _p.ss(
                            $,
                            ($) => ['serialize', List_of_Characters(
                                $,
                            )],
                        )
                    case 'rich list':
                        return _p.ss(
                            $,
                            ($) => ['rich list', {
                                'items': _p_change_context(
                                    $['items'],
                                    ($) => _p.list.map(
                                        $,
                                        ($) => Single_Line(
                                            $,
                                        ),
                                    ),
                                ),
                                'if empty': _p_change_context(
                                    $['if empty'],
                                    ($) => Single_Line(
                                        $,
                                    ),
                                ),
                                'if not empty': _p_change_context(
                                    $['if not empty'],
                                    ($) => ({
                                        'before': _p_change_context(
                                            $['before'],
                                            ($) => Single_Line(
                                                $,
                                            ),
                                        ),
                                        'separator': _p_change_context(
                                            $['separator'],
                                            ($) => Single_Line(
                                                $,
                                            ),
                                        ),
                                        'after': _p_change_context(
                                            $['after'],
                                            ($) => Single_Line(
                                                $,
                                            ),
                                        ),
                                    }),
                                ),
                            }],
                        )
                    default:
                        return _p.au(
                            $[0],
                        )
                }
            },
        ),
    )
    
    export const List_of_Characters: t_signatures.List_of_Characters = ($) => _p.list.map(
        $,
        ($) => $,
    )
