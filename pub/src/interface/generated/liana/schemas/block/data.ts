
import * as _pi from "pareto-core/dist/interface"

export namespace Block_Part_ {
    
    export type snippet = string
    
    export type indent = Group_
    
    export type sub_block = Block_
    
    export namespace optional {
        
        export type O = Block_Part_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
    export namespace rich_list {
        
        export namespace items {
            
            export type L = Block_Part_
            
        }
        
        export type items = _pi.List<items.L>
        
        export type if_empty = Block_Part_
        
        export namespace if_not_empty {
            
            export type before = Block_Part_
            
            export type separator = Block_Part_
            
            export type after = Block_Part_
            
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

export type Block_Part_ = 
    | readonly ['snippet', Block_Part_.snippet]
    | readonly ['indent', Block_Part_.indent]
    | readonly ['sub block', Block_Part_.sub_block]
    | readonly ['optional', Block_Part_.optional]
    | readonly ['nothing', Block_Part_.nothing]
    | readonly ['rich list', Block_Part_.rich_list]

export namespace Block_ {
    
    export type L = Block_Part_
    
}

export type Block_ = _pi.List<Block_.L>

export namespace Group_Part_ {
    
    export type nested_block = Block_
    
    export type block = string
    
    export type sub_group = Group_
    
    export namespace optional {
        
        export type O = Group_Part_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
    export namespace rich_list {
        
        export namespace items {
            
            export type L = Group_Part_
            
        }
        
        export type items = _pi.List<items.L>
        
        export type if_empty = Group_Part_
        
        export namespace if_not_empty {
            
            export type indent = boolean
            
            export type before = Group_Part_
            
            export type separator = Group_Part_
            
            export type after = Group_Part_
            
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

export type Group_Part_ = 
    | readonly ['nested block', Group_Part_.nested_block]
    | readonly ['block', Group_Part_.block]
    | readonly ['sub group', Group_Part_.sub_group]
    | readonly ['optional', Group_Part_.optional]
    | readonly ['nothing', Group_Part_.nothing]
    | readonly ['rich list', Group_Part_.rich_list]

export namespace Group_ {
    
    export type L = Group_Part_
    
}

export type Group_ = _pi.List<Group_.L>

export namespace Node_ {
    
    export type file = Group_
    
    export type directory = Directory_
    
}

export type Node_ = 
    | readonly ['file', Node_.file]
    | readonly ['directory', Node_.directory]

export namespace Directory_ {
    
    export type D = Node_
    
}

export type Directory_ = _pi.Dictionary<Directory_.D>

export { 
    Block_Part_ as Block_Part, 
    Block_ as Block, 
    Group_Part_ as Group_Part, 
    Group_ as Group, 
    Node_ as Node, 
    Directory_ as Directory, 
}
