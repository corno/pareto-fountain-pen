    
    import * as _pi from "pareto-core/dist/interface"
    
    export namespace Lines_ {
        
        export namespace L {
            
            export type text = string
            
            export type indentation = number
            
        }
        
        export type L = {
            readonly 'text': L.text
            readonly 'indentation': L.indentation
        }
        
    }
    
    export type Lines_ = _pi.List<Lines_.L>
    
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
