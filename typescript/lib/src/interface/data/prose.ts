
import * as p_i from 'pareto-core/interface/__internal/Abort'
import * as p_di from 'pareto-core/interface/data'

import * as i_imports_list_of_characters from "./list_of_characters.js"

export namespace Paragraph_ {
    
    export namespace composed {
        
        export type L = Paragraph_
        
    }
    
    export type composed = p_di.List<composed.L>
    
    export namespace sentences {
        
        export type L = Sentence_
        
    }
    
    export type sentences = p_di.List<sentences.L>
    
    export namespace optional {
        
        export type O = Paragraph_
        
    }
    
    export type optional = p_di.Optional_Value<optional.O>
    
    export type nothing = null
    
    export namespace rich_list {
        
        export namespace items {
            
            export type L = Sentence_
            
        }
        
        export type items = p_di.List<items.L>
        
        export namespace if_empty {
            
            export type O = Sentence_
            
        }
        
        export type if_empty = p_di.Optional_Value<if_empty.O>
        
        export namespace if_not_empty {
            
            export namespace before {
                
                export type O = Sentence_
                
            }
            
            export type before = p_di.Optional_Value<before.O>
            
            export type indent = boolean
            
            export namespace separator {
                
                export type O = Phrase_
                
            }
            
            export type separator = p_di.Optional_Value<separator.O>
            
            export namespace after {
                
                export type O = Sentence_
                
            }
            
            export type after = p_di.Optional_Value<after.O>
            
        }
        
        export type if_not_empty = {
            readonly 'before': if_not_empty.before
            readonly 'indent': if_not_empty.indent
            readonly 'separator': if_not_empty.separator
            readonly 'after': if_not_empty.after
        }
        
    }
    
    export type rich_list = {
        readonly 'items': rich_list.items
        readonly 'if empty': rich_list.if_empty
        readonly 'if not empty': rich_list.if_not_empty
    }
    
}

export type Paragraph_ = 
    | readonly ['composed', Paragraph_.composed]
    | readonly ['sentences', Paragraph_.sentences]
    | readonly ['optional', Paragraph_.optional]
    | readonly ['nothing', Paragraph_.nothing]
    | readonly ['rich list', Paragraph_.rich_list]

export namespace Sentence_ {
    
    export type L = Phrase_
    
}

export type Sentence_ = p_di.List<Sentence_.L>

export namespace Phrase_ {
    
    export namespace value {
        
        export type text = string
        
        export type list_of_characters = i_imports_list_of_characters.List_of_Characters
        
    }
    
    export type value = 
        | readonly ['text', value.text]
        | readonly ['list of characters', value.list_of_characters]
    
    export type indent = Paragraph_
    
    export namespace composed {
        
        export type L = Phrase_
        
    }
    
    export type composed = p_di.List<composed.L>
    
    export namespace optional {
        
        export type O = Phrase_
        
    }
    
    export type optional = p_di.Optional_Value<optional.O>
    
    export type nothing = null
    
    export namespace rich_list {
        
        export namespace items {
            
            export type L = Phrase_
            
        }
        
        export type items = p_di.List<items.L>
        
        export type if_empty = Phrase_
        
        export namespace if_not_empty {
            
            export type before = Phrase_
            
            export type separator = Phrase_
            
            export type after = Phrase_
            
        }
        
        export type if_not_empty = {
            readonly 'before': if_not_empty.before
            readonly 'separator': if_not_empty.separator
            readonly 'after': if_not_empty.after
        }
        
    }
    
    export type rich_list = {
        readonly 'items': rich_list.items
        readonly 'if empty': rich_list.if_empty
        readonly 'if not empty': rich_list.if_not_empty
    }
    
}

export type Phrase_ = 
    | readonly ['value', Phrase_.value]
    | readonly ['indent', Phrase_.indent]
    | readonly ['composed', Phrase_.composed]
    | readonly ['optional', Phrase_.optional]
    | readonly ['nothing', Phrase_.nothing]
    | readonly ['rich list', Phrase_.rich_list]

export type { 
    Paragraph_ as Paragraph, 
    Sentence_ as Sentence, 
    Phrase_ as Phrase, 
}
