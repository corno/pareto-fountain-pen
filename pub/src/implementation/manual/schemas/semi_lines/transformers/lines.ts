import * as _p from 'pareto-core/dist/expression'
import * as _pi from 'pareto-core/dist/interface'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'
import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as d_in from "../../../../../interface/generated/liana/schemas/semi_lines/data"
import * as d_out from "../../../../../interface/generated/liana/schemas/lines/data"


export const Lines = (
    $: d_in.Lines,
    $p: {
        'indentation': string
    }
): d_out.Lines => {
    const indent = _p_list_from_text<number>(
        $p.indentation,
        ($) => $,
    )
    return $.__l_map(
        ($) => _p_text_from_list(
            _p.list.nested_literal_old<number>(
                [
                    _p.list.flatten(
                        _p.list.repeat(
                            indent,
                            $.indentation
                        ),
                        ($) => $
                    ),
                    _p_list_from_text<number>($.text, ($) => $)

                ],
            ),
            ($) => $,
        )
    )
}

export const Directory = (
    $: d_in.Directory,
    $p: {
        'indentation': string
    }
): d_out.Directory => $.__d_map(($) => _p.decide.state($, ($): d_out.Directory.D => {
    switch ($[0]) {
        case 'file': return _p.ss($, ($) => ['file', Lines($, { 'indentation': $p.indentation })])
        case 'directory': return _p.ss($, ($) => ['directory', Directory($, { 'indentation': $p.indentation })])
        default: return _p.au($[0])
    }
}))