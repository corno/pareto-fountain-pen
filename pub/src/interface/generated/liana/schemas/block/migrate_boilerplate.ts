
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Block_Part_ {
    
    export type I = i_in.Block_Part
    
    export type O = i_out.Block_Part
    
    export namespace P {
        
    }
    
}

export type Block_Part_ = (
    $$_: Block_Part_.I,
) => Block_Part_.O

export namespace Block_ {
    
    export type I = i_in.Block
    
    export type O = i_out.Block
    
    export namespace P {
        
    }
    
}

export type Block_ = (
    $$_: Block_.I,
) => Block_.O

export namespace Group_Part_ {
    
    export type I = i_in.Group_Part
    
    export type O = i_out.Group_Part
    
    export namespace P {
        
    }
    
}

export type Group_Part_ = (
    $$_: Group_Part_.I,
) => Group_Part_.O

export namespace Group_ {
    
    export type I = i_in.Group
    
    export type O = i_out.Group
    
    export namespace P {
        
    }
    
}

export type Group_ = (
    $$_: Group_.I,
) => Group_.O

export namespace Node_ {
    
    export type I = i_in.Node
    
    export type O = i_out.Node
    
    export namespace P {
        
    }
    
}

export type Node_ = (
    $$_: Node_.I,
) => Node_.O

export namespace Directory_ {
    
    export type I = i_in.Directory
    
    export type O = i_out.Directory
    
    export namespace P {
        
    }
    
}

export type Directory_ = (
    $$_: Directory_.I,
) => Directory_.O

export { 
    Block_Part_ as Block_Part, 
    Block_ as Block, 
    Group_Part_ as Group_Part, 
    Group_ as Group, 
    Node_ as Node, 
    Directory_ as Directory, 
}
