
import * as _p from "pareto-core/dist/transformer"

import * as t_signatures from "../../../../../interface/generated/liana/schemas/block/migrate_boilerplate"

import * as t_out from "../../../../../interface/generated/liana/schemas/block/data"
export const Block_Part: t_signatures.Block_Part = ($,) => _p.decide.state($, ($,): t_out.Block_Part => {
    switch ($[0]) {
        case 'snippet':
            return _p.ss($, ($,) => ['snippet', $])
        case 'indent':
            return _p.ss($, ($,) => ['indent', Group($)])
        case 'sub block':
            return _p.ss($, ($,) => ['sub block', Block($)])
        case 'optional':
            return _p.ss($, ($,) => ['optional', $.__o_map(($,) => Block_Part($))])
        case 'nothing':
            return _p.ss($, ($,) => ['nothing', null])
        case 'rich list':
            return _p.ss($, ($,) => ['rich list', ({
                'elements': _p.deprecated_cc($['elements'], ($,) => $.__l_map(($,) => Block_Part($))),
                'if empty': _p.deprecated_cc($['if empty'], ($,) => Block_Part($)),
                'if not empty': _p.deprecated_cc($['if not empty'], ($,) => ({
                    'before': _p.deprecated_cc($['before'], ($,) => Block_Part($)),
                    'separator': _p.deprecated_cc($['separator'], ($,) => Block_Part($)),
                    'after': _p.deprecated_cc($['after'], ($,) => Block_Part($)),
                })),
            })])
        default:
            return _p.au($[0])
    }
})
export const Block: t_signatures.Block = ($,) => $.__l_map(($,) => Block_Part($))
export const Group_Part: t_signatures.Group_Part = ($,) => _p.decide.state($, ($,): t_out.Group_Part => {
    switch ($[0]) {
        case 'nested block':
            return _p.ss($, ($,) => ['nested block', Block($)])
        case 'block':
            return _p.ss($, ($,) => ['block', $])
        case 'sub group':
            return _p.ss($, ($,) => ['sub group', Group($)])
        case 'optional':
            return _p.ss($, ($,) => ['optional', $.__o_map(($,) => Group_Part($))])
        case 'nothing':
            return _p.ss($, ($,) => ['nothing', null])
        case 'rich list':
            return _p.ss($, ($,) => ['rich list', ({
                'elements': _p.deprecated_cc($['elements'], ($,) => $.__l_map(($,) => Group_Part($))),
                'if empty': _p.deprecated_cc($['if empty'], ($,) => Group_Part($)),
                'if not empty': _p.deprecated_cc($['if not empty'], ($,) => ({
                    'indent': _p.deprecated_cc($['indent'], ($,) => $),
                    'before': _p.deprecated_cc($['before'], ($,) => Group_Part($)),
                    'separator': _p.deprecated_cc($['separator'], ($,) => Group_Part($)),
                    'after': _p.deprecated_cc($['after'], ($,) => Group_Part($)),
                })),
            })])
        default:
            return _p.au($[0])
    }
})
export const Group: t_signatures.Group = ($,) => $.__l_map(($,) => Group_Part($))
export const Node: t_signatures.Node = ($,) => _p.decide.state($, ($,): t_out.Node => {
    switch ($[0]) {
        case 'file':
            return _p.ss($, ($,) => ['file', Group($)])
        case 'directory':
            return _p.ss($, ($,) => ['directory', Directory($)])
        default:
            return _p.au($[0])
    }
})
export const Directory: t_signatures.Directory = ($,) => $.__d_map(($,key,) => Node($))
