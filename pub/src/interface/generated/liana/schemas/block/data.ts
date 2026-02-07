
import * as _pi from 'pareto-core/dist/interface'

export namespace Directory_ {
    
    export type D = Node_
    
}

export type Directory_ = _pi.Dictionary<Directory_.D>

export namespace Node_ {
    
    export type file = Paragraph_
    
    export type directory = Directory_
    
}

export type Node_ = 
    | readonly ['file', Node_.file]
    | readonly ['directory', Node_.directory]

export namespace Paragraph_ {
    
    export namespace composed {
        
        export type L = Paragraph_
        
    }
    
    export type composed = _pi.List<composed.L>
    
    export namespace sentences {
        
        export type L = Sentence_
        
    }
    
    export type sentences = _pi.List<sentences.L>
    
    export namespace optional {
        
        export type O = Paragraph_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
    export namespace rich_list {
        
        export namespace items {
            
            export type L = Sentence_
            
        }
        
        export type items = _pi.List<items.L>
        
        export namespace if_empty {
            
            export type O = Sentence_
            
        }
        
        export type if_empty = _pi.Optional_Value<if_empty.O>
        
        export namespace if_not_empty {
            
            export namespace before {
                
                export type O = Sentence_
                
            }
            
            export type before = _pi.Optional_Value<before.O>
            
            export type indent = boolean
            
            export namespace separator {
                
                export type O = Phrase_
                
            }
            
            export type separator = _pi.Optional_Value<separator.O>
            
            export namespace after {
                
                export type O = Sentence_
                
            }
            
            export type after = _pi.Optional_Value<after.O>
            
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

export type Sentence_ = _pi.List<Sentence_.L>

export namespace Phrase_ {
    
    export namespace value {
        
        export type text = string
        
        export type list_of_characters = List_of_Characters_
        
    }
    
    export type value = 
        | readonly ['text', value.text]
        | readonly ['list of characters', value.list_of_characters]
    
    export type indent = Paragraph_
    
    export namespace composed {
        
        export type L = Phrase_
        
    }
    
    export type composed = _pi.List<composed.L>
    
    export namespace optional {
        
        export type O = Phrase_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
    export namespace rich_list {
        
        export namespace items {
            
            export type L = Phrase_
            
        }
        
        export type items = _pi.List<items.L>
        
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

export namespace List_of_Characters_ {
    
    export type L = number
    
}

export type List_of_Characters_ = _pi.List<List_of_Characters_.L>

export { 
    Directory_ as Directory, 
    Node_ as Node, 
    Paragraph_ as Paragraph, 
    Sentence_ as Sentence, 
    Phrase_ as Phrase, 
    List_of_Characters_ as List_of_Characters, 
}
