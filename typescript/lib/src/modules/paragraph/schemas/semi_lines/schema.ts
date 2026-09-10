
import * as p_di from 'pareto-core/schema'

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



export type Phrase = p_di.List<Phrase_Part>

    
export type Phrase_Part =
    | ['snippet', string]
    | ['paragraph', Lines_]

export type { 
    Lines_ as Lines, 
}
