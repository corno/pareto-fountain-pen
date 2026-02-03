import * as _pi from 'pareto-core/dist/interface'
import * as _pt from 'pareto-core/dist/expression'

export const $$ = <T>($: _pi.List<T>): _pi.List<{
    'value': T
    'is first': boolean
    'is last': boolean
    'index': number
}> => {
    const length = $.__get_number_of_items()
    let index = -1
    return $.__l_map(($) => {
        index += 1
        return {
            'value': $,
            'is first': index === 0,
            'is last': index === length - 1,
            'index': index,
        }
    })
}