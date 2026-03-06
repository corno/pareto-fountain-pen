
import * as _pi from 'pareto-core/dist/interface'

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

export type Lines_ = _pi.List<Lines_.L>

export { 
    Lines_ as Lines, 
}
