
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

export namespace Block_Part_ {
    
    export type snippet = string
    
    export type indent = Group_
    
    export type sub_block = Block_
    
    export namespace optional {
        
        export type O = Block_Part_
        
    }
    
    export type optional = _pi.Optional_Value<optional.O>
    
    export type nothing = null
    
}

export type Block_Part_ = 
    | readonly ['snippet', Block_Part_.snippet]
    | readonly ['indent', Block_Part_.indent]
    | readonly ['sub block', Block_Part_.sub_block]
    | readonly ['optional', Block_Part_.optional]
    | readonly ['nothing', Block_Part_.nothing]

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
    
}

export type Group_Part_ = 
    | readonly ['nested block', Group_Part_.nested_block]
    | readonly ['block', Group_Part_.block]
    | readonly ['sub group', Group_Part_.sub_group]
    | readonly ['optional', Group_Part_.optional]
    | readonly ['nothing', Group_Part_.nothing]

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
