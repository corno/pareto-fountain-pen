
import * as _pi from 'pareto-core/dist/interface'

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Paragraph_ {
    
    export type I = i_in.Paragraph
    
    export type O = i_out.Paragraph
    
    export namespace P {
        
    }
    
}

export type Paragraph_ = (
    context: Paragraph_.I,
) => Paragraph_.O

export namespace Sentence_ {
    
    export type I = i_in.Sentence
    
    export type O = i_out.Sentence
    
    export namespace P {
        
    }
    
}

export type Sentence_ = (
    context: Sentence_.I,
) => Sentence_.O

export namespace Phrase_ {
    
    export type I = i_in.Phrase
    
    export type O = i_out.Phrase
    
    export namespace P {
        
    }
    
}

export type Phrase_ = (
    context: Phrase_.I,
) => Phrase_.O

export { 
    Paragraph_ as Paragraph, 
    Sentence_ as Sentence, 
    Phrase_ as Phrase, 
}
