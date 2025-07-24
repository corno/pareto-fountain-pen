import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unresolved"

// **** TYPES

export type _T_Block = _i_core._T_List<null, _T_Block_Part>

export type _T_Block_Part = _i_core._T_State_Group<null, 
    | readonly ['line', string]
    | readonly ['nested line', _T_Line]
    | readonly ['nothing', null]
    | readonly ['sub block', _T_Block]
>

export type _T_Directory = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['directory', _T_Directory]
    | readonly ['file', _T_Block]
>>

export type _T_Line = _i_core._T_List<null, _T_Line_Part>

export type _T_Line_Part = _i_core._T_State_Group<null, 
    | readonly ['indent', _T_Block]
    | readonly ['nothing', null]
    | readonly ['snippet', string]
    | readonly ['sub line', _T_Line]
>

export type _T_Lines = _i_core._T_List<null, {
    readonly 'indentation': number
    readonly 'text': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Block = _T_Block

export type Block_Part = _T_Block_Part

export type Directory = _T_Directory

export type Line = _T_Line

export type Line_Part = _T_Line_Part

export type Lines = _T_Lines

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Block {
    
    export namespace L {
    }
    export type L = _T_Block_Part
}

export namespace _T_Block_Part {
    
    export namespace SG {
        export type line = string
        
        export namespace nested_line {
        }
        export type nested_line = _T_Line
        export type nothing = null
        
        export namespace sub_block {
        }
        export type sub_block = _T_Block
    }
    export type SG = 
        | readonly ['line', string]
        | readonly ['nested line', _T_Line]
        | readonly ['nothing', null]
        | readonly ['sub block', _T_Block]
}

export namespace _T_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory = _T_Directory
            
            export namespace file {
            }
            export type file = _T_Block
        }
        export type SG = 
            | readonly ['directory', _T_Directory]
            | readonly ['file', _T_Block]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['directory', _T_Directory]
        | readonly ['file', _T_Block]
    >
}

export namespace _T_Line {
    
    export namespace L {
    }
    export type L = _T_Line_Part
}

export namespace _T_Line_Part {
    
    export namespace SG {
        
        export namespace indent {
        }
        export type indent = _T_Block
        export type nothing = null
        export type snippet = string
        
        export namespace sub_line {
        }
        export type sub_line = _T_Line
    }
    export type SG = 
        | readonly ['indent', _T_Block]
        | readonly ['nothing', null]
        | readonly ['snippet', string]
        | readonly ['sub line', _T_Line]
}

export namespace _T_Lines {
    
    export namespace L {
        export type indentation = number
        export type text = string
    }
    export type L = {
        readonly 'indentation': number
        readonly 'text': string
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Block {
    
    export namespace L {
    }
    export type L = _T_Block_Part
}

export namespace Block_Part {
    
    export namespace SG {
        export type line = string
        
        export namespace nested_line {
        }
        export type nested_line = _T_Line
        export type nothing = null
        
        export namespace sub_block {
        }
        export type sub_block = _T_Block
    }
    export type SG = 
        | readonly ['line', string]
        | readonly ['nested line', _T_Line]
        | readonly ['nothing', null]
        | readonly ['sub block', _T_Block]
}

export namespace Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory = _T_Directory
            
            export namespace file {
            }
            export type file = _T_Block
        }
        export type SG = 
            | readonly ['directory', _T_Directory]
            | readonly ['file', _T_Block]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['directory', _T_Directory]
        | readonly ['file', _T_Block]
    >
}

export namespace Line {
    
    export namespace L {
    }
    export type L = _T_Line_Part
}

export namespace Line_Part {
    
    export namespace SG {
        
        export namespace indent {
        }
        export type indent = _T_Block
        export type nothing = null
        export type snippet = string
        
        export namespace sub_line {
        }
        export type sub_line = _T_Line
    }
    export type SG = 
        | readonly ['indent', _T_Block]
        | readonly ['nothing', null]
        | readonly ['snippet', string]
        | readonly ['sub line', _T_Line]
}

export namespace Lines {
    
    export namespace L {
        export type indentation = number
        export type text = string
    }
    export type L = {
        readonly 'indentation': number
        readonly 'text': string
    }
}
