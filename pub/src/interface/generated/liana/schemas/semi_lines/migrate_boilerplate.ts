
import * as _pi from "pareto-core/dist/interface"

import * as i_out from "./data"

import * as i_in from "./data"

export namespace Lines_ {
    
    export type I = i_in.Lines
    
    export type O = i_out.Lines
    
    export namespace P {
        
    }
    
}

export type Lines_ = (
    context: Lines_.I,
) => Lines_.O

export namespace Directory_ {
    
    export type I = i_in.Directory
    
    export type O = i_out.Directory
    
    export namespace P {
        
    }
    
}

export type Directory_ = (
    context: Directory_.I,
) => Directory_.O

export { 
    Lines_ as Lines, 
    Directory_ as Directory, 
}
