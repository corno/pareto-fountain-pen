import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"

// **** TYPES

export type _T_Block<G_Source> = _i_core._T_List<G_Source, _T_Block_Part<G_Source>>

export type _T_Block_Part<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['line', string]
    | readonly ['nested line', _T_Line<G_Source>]
    | readonly ['nothing', null]
    | readonly ['sub block', _T_Block<G_Source>]
>

export type _T_Directory<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['directory', _T_Directory<G_Source>]
    | readonly ['file', _T_Block<G_Source>]
>>

export type _T_Line<G_Source> = _i_core._T_List<G_Source, _T_Line_Part<G_Source>>

export type _T_Line_Part<G_Source> = _i_core._T_State_Group<G_Source, 
    | readonly ['indent', _T_Block<G_Source>]
    | readonly ['nothing', null]
    | readonly ['snippet', string]
    | readonly ['sub line', _T_Line<G_Source>]
>

export type _T_Lines<G_Source> = _i_core._T_List<G_Source, {
    readonly 'indentation': number
    readonly 'text': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Block<G_Source> = _T_Block<G_Source>

export type Block_Part<G_Source> = _T_Block_Part<G_Source>

export type Directory<G_Source> = _T_Directory<G_Source>

export type Line<G_Source> = _T_Line<G_Source>

export type Line_Part<G_Source> = _T_Line_Part<G_Source>

export type Lines<G_Source> = _T_Lines<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Block {
    
    export namespace L {
    }
    export type L<G_Source> = _T_Block_Part<G_Source>
}

export namespace _T_Block_Part {
    
    export namespace SG {
        export type line<G_Source> = string
        
        export namespace nested_line {
        }
        export type nested_line<G_Source> = _T_Line<G_Source>
        export type nothing<G_Source> = null
        
        export namespace sub_block {
        }
        export type sub_block<G_Source> = _T_Block<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['line', string]
        | readonly ['nested line', _T_Line<G_Source>]
        | readonly ['nothing', null]
        | readonly ['sub block', _T_Block<G_Source>]
}

export namespace _T_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory<G_Source> = _T_Directory<G_Source>
            
            export namespace file {
            }
            export type file<G_Source> = _T_Block<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['directory', _T_Directory<G_Source>]
            | readonly ['file', _T_Block<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['directory', _T_Directory<G_Source>]
        | readonly ['file', _T_Block<G_Source>]
    >
}

export namespace _T_Line {
    
    export namespace L {
    }
    export type L<G_Source> = _T_Line_Part<G_Source>
}

export namespace _T_Line_Part {
    
    export namespace SG {
        
        export namespace indent {
        }
        export type indent<G_Source> = _T_Block<G_Source>
        export type nothing<G_Source> = null
        export type snippet<G_Source> = string
        
        export namespace sub_line {
        }
        export type sub_line<G_Source> = _T_Line<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['indent', _T_Block<G_Source>]
        | readonly ['nothing', null]
        | readonly ['snippet', string]
        | readonly ['sub line', _T_Line<G_Source>]
}

export namespace _T_Lines {
    
    export namespace L {
        export type indentation<G_Source> = number
        export type text<G_Source> = string
    }
    export type L<G_Source> = {
        readonly 'indentation': number
        readonly 'text': string
    }
}

// *** ALIASES FOR NESTED TYPES

export namespace Block {
    
    export namespace L {
    }
    export type L<G_Source> = _T_Block_Part<G_Source>
}

export namespace Block_Part {
    
    export namespace SG {
        export type line<G_Source> = string
        
        export namespace nested_line {
        }
        export type nested_line<G_Source> = _T_Line<G_Source>
        export type nothing<G_Source> = null
        
        export namespace sub_block {
        }
        export type sub_block<G_Source> = _T_Block<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['line', string]
        | readonly ['nested line', _T_Line<G_Source>]
        | readonly ['nothing', null]
        | readonly ['sub block', _T_Block<G_Source>]
}

export namespace Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory<G_Source> = _T_Directory<G_Source>
            
            export namespace file {
            }
            export type file<G_Source> = _T_Block<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['directory', _T_Directory<G_Source>]
            | readonly ['file', _T_Block<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['directory', _T_Directory<G_Source>]
        | readonly ['file', _T_Block<G_Source>]
    >
}

export namespace Line {
    
    export namespace L {
    }
    export type L<G_Source> = _T_Line_Part<G_Source>
}

export namespace Line_Part {
    
    export namespace SG {
        
        export namespace indent {
        }
        export type indent<G_Source> = _T_Block<G_Source>
        export type nothing<G_Source> = null
        export type snippet<G_Source> = string
        
        export namespace sub_line {
        }
        export type sub_line<G_Source> = _T_Line<G_Source>
    }
    export type SG<G_Source> = 
        | readonly ['indent', _T_Block<G_Source>]
        | readonly ['nothing', null]
        | readonly ['snippet', string]
        | readonly ['sub line', _T_Line<G_Source>]
}

export namespace Lines {
    
    export namespace L {
        export type indentation<G_Source> = number
        export type text<G_Source> = string
    }
    export type L<G_Source> = {
        readonly 'indentation': number
        readonly 'text': string
    }
}
