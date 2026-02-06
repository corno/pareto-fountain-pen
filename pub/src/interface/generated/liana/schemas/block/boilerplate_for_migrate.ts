    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_out from "./data"
    
    import * as i_in from "./data"
    
    export namespace Directory_ {
        
        export type I = i_in.Directory
        
        export type O = i_out.Directory
        
        export namespace P {
            
        }
        
    }
    
    export type Directory_ = (
        context: Directory_.I,
    ) => Directory_.O
    
    export namespace Node_ {
        
        export type I = i_in.Node
        
        export type O = i_out.Node
        
        export namespace P {
            
        }
        
    }
    
    export type Node_ = (
        context: Node_.I,
    ) => Node_.O
    
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
    
    export namespace Single_Line_ {
        
        export type I = i_in.Single_Line
        
        export type O = i_out.Single_Line
        
        export namespace P {
            
        }
        
    }
    
    export type Single_Line_ = (
        context: Single_Line_.I,
    ) => Single_Line_.O
    
    export namespace List_of_Characters_ {
        
        export type I = i_in.List_of_Characters
        
        export type O = i_out.List_of_Characters
        
        export namespace P {
            
        }
        
    }
    
    export type List_of_Characters_ = (
        context: List_of_Characters_.I,
    ) => List_of_Characters_.O
    
    export { 
        Directory_ as Directory, 
        Node_ as Node, 
        Paragraph_ as Paragraph, 
        Sentence_ as Sentence, 
        Phrase_ as Phrase, 
        Single_Line_ as Single_Line, 
        List_of_Characters_ as List_of_Characters, 
    }
