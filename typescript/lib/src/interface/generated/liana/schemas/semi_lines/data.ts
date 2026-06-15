
import * as p_i from 'pareto-core/dist/interface/__internal/Abort'
import * as p_di from 'pareto-core/dist/interface/data'

export namespace Lines_ {
    
    export namespace L {
        
        export type text = string
        
        export type indentation = number
        
    }
    
    export type L = {
        readonly 'text': L.text
        readonly 'indentation': L.indentation
    }
    
}

export type Lines_ = p_di.List<Lines_.L>

export { 
    Lines_ as Lines, 
}
