    
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
            
            export type if_empty = Sentence_
            
            export namespace if_not_empty {
                
                export type indent = boolean
                
                export type before = Phrase_
                
                export type separator = Phrase_
                
                export type after = Phrase_
                
            }
            
            export type if_not_empty = {
                readonly 'indent': if_not_empty.indent
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
    
    export type Paragraph_ = 
        | readonly ['composed', Paragraph_.composed]
        | readonly ['sentences', Paragraph_.sentences]
        | readonly ['optional', Paragraph_.optional]
        | readonly ['nothing', Paragraph_.nothing]
        | readonly ['rich list', Paragraph_.rich_list]
    
    export type Sentence_ = Phrase_
    
    export namespace Phrase_ {
        
        export type single_line = Single_Line_
        
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
        | readonly ['single line', Phrase_.single_line]
        | readonly ['indent', Phrase_.indent]
        | readonly ['composed', Phrase_.composed]
        | readonly ['optional', Phrase_.optional]
        | readonly ['nothing', Phrase_.nothing]
        | readonly ['rich list', Phrase_.rich_list]
    
    export namespace Single_Line_ {
        
        export namespace L {
            
            export type snippet = string
            
            export type serialize = List_of_Characters_
            
            export namespace rich_list {
                
                export namespace items {
                    
                    export type L = Single_Line_
                    
                }
                
                export type items = _pi.List<items.L>
                
                export type if_empty = Single_Line_
                
                export namespace if_not_empty {
                    
                    export type before = Single_Line_
                    
                    export type separator = Single_Line_
                    
                    export type after = Single_Line_
                    
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
        
        export type L = 
            | readonly ['snippet', L.snippet]
            | readonly ['serialize', L.serialize]
            | readonly ['rich list', L.rich_list]
        
    }
    
    export type Single_Line_ = _pi.List<Single_Line_.L>
    
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
        Single_Line_ as Single_Line, 
        List_of_Characters_ as List_of_Characters, 
    }
