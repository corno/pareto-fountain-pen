
import * as _pi from "pareto-core-interface"

import * as i__location from "../../core/location"

export type Lines_ = string

export namespace Directory_ {
    
    export namespace D {
        
        export type file = Lines_
        
        export type directory = Directory_
        
    }
    
    export type D = 
        | readonly ['file', D.file]
        | readonly ['directory', D.directory]
    
}

export type Directory_ = _pi.Dictionary<Directory_.D>

export { 
    Lines_ as Lines, 
    Directory_ as Directory, 
}
