import * as _pt from 'exupery-core-types'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Block = _i_core._T_List<null, _T_Block_Part>

export type _T_Block_Part = _i_core._T_State_Group<null, 
    | readonly ['indent', _T_Group]
    | readonly ['nothing', null]
    | readonly ['optional', _pt.Optional_Value<_T_Block_Part>]
    | readonly ['snippet', string]
    | readonly ['sub block', _T_Block]
>

export type _T_Directory = _i_core._T_Dictionary<null, _T_Node>

export type _T_Group = _i_core._T_List<null, _T_Group_Part>

export type _T_Group_Part = _i_core._T_State_Group<null, 
    | readonly ['block', string]
    | readonly ['nested block', _T_Block]
    | readonly ['nothing', null]
    | readonly ['optional', _pt.Optional_Value<_T_Group_Part>]
    | readonly ['sub group', _T_Group]
>

export type _T_Node = _i_core._T_State_Group<null, 
    | readonly ['directory', _T_Directory]
    | readonly ['file', _T_Group]
>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Block = _T_Block

export type Block_Part = _T_Block_Part

export type Directory = _T_Directory

export type Group = _T_Group

export type Group_Part = _T_Group_Part

export type Node = _T_Node

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Block {
    
    export namespace L {
    }
    export type L = _T_Block_Part
}

export namespace _T_Block_Part {
    
    export namespace SG {
        
        export namespace indent {
        }
        export type indent = _T_Group
        export type nothing = null
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Block_Part
        }
        export type optional = _pt.Optional_Value<_T_Block_Part>
        export type snippet = string
        
        export namespace sub_block {
        }
        export type sub_block = _T_Block
    }
    export type SG = 
        | readonly ['indent', _T_Group]
        | readonly ['nothing', null]
        | readonly ['optional', _pt.Optional_Value<_T_Block_Part>]
        | readonly ['snippet', string]
        | readonly ['sub block', _T_Block]
}

export namespace _T_Directory {
    
    export namespace D {
    }
    export type D = _T_Node
}

export namespace _T_Group {
    
    export namespace L {
    }
    export type L = _T_Group_Part
}

export namespace _T_Group_Part {
    
    export namespace SG {
        export type block = string
        
        export namespace nested_block {
        }
        export type nested_block = _T_Block
        export type nothing = null
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Group_Part
        }
        export type optional = _pt.Optional_Value<_T_Group_Part>
        
        export namespace sub_group {
        }
        export type sub_group = _T_Group
    }
    export type SG = 
        | readonly ['block', string]
        | readonly ['nested block', _T_Block]
        | readonly ['nothing', null]
        | readonly ['optional', _pt.Optional_Value<_T_Group_Part>]
        | readonly ['sub group', _T_Group]
}

export namespace _T_Node {
    
    export namespace SG {
        
        export namespace directory {
        }
        export type directory = _T_Directory
        
        export namespace file {
        }
        export type file = _T_Group
    }
    export type SG = 
        | readonly ['directory', _T_Directory]
        | readonly ['file', _T_Group]
}

// *** ALIASES FOR NESTED TYPES

export namespace Block {
    
    export namespace L {
    }
    export type L = _T_Block_Part
}

export namespace Block_Part {
    
    export namespace SG {
        
        export namespace indent {
        }
        export type indent = _T_Group
        export type nothing = null
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Block_Part
        }
        export type optional = _pt.Optional_Value<_T_Block_Part>
        export type snippet = string
        
        export namespace sub_block {
        }
        export type sub_block = _T_Block
    }
    export type SG = 
        | readonly ['indent', _T_Group]
        | readonly ['nothing', null]
        | readonly ['optional', _pt.Optional_Value<_T_Block_Part>]
        | readonly ['snippet', string]
        | readonly ['sub block', _T_Block]
}

export namespace Directory {
    
    export namespace D {
    }
    export type D = _T_Node
}

export namespace Group {
    
    export namespace L {
    }
    export type L = _T_Group_Part
}

export namespace Group_Part {
    
    export namespace SG {
        export type block = string
        
        export namespace nested_block {
        }
        export type nested_block = _T_Block
        export type nothing = null
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Group_Part
        }
        export type optional = _pt.Optional_Value<_T_Group_Part>
        
        export namespace sub_group {
        }
        export type sub_group = _T_Group
    }
    export type SG = 
        | readonly ['block', string]
        | readonly ['nested block', _T_Block]
        | readonly ['nothing', null]
        | readonly ['optional', _pt.Optional_Value<_T_Group_Part>]
        | readonly ['sub group', _T_Group]
}

export namespace Node {
    
    export namespace SG {
        
        export namespace directory {
        }
        export type directory = _T_Directory
        
        export namespace file {
        }
        export type file = _T_Group
    }
    export type SG = 
        | readonly ['directory', _T_Directory]
        | readonly ['file', _T_Group]
}
