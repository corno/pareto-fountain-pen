import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/resolved"

// **** TYPES

export type _T_Block_Part = _i_core._T_State_Group<null, 
    | readonly ['snippet', string]
    | readonly ['indent', _T_Group]
    | readonly ['sub block', _T_Block]
    | readonly ['optional', _pi.Optional_Value<_T_Block_Part>]
    | readonly ['nothing', null]
>

export type _T_Block = _i_core._T_List<null, _T_Block_Part>

export type _T_Group_Part = _i_core._T_State_Group<null, 
    | readonly ['nested block', _T_Block]
    | readonly ['block', string]
    | readonly ['sub group', _T_Group]
    | readonly ['optional', _pi.Optional_Value<_T_Group_Part>]
    | readonly ['nothing', null]
>

export type _T_Group = _i_core._T_List<null, _T_Group_Part>

export type _T_Node = _i_core._T_State_Group<null, 
    | readonly ['file', _T_Group]
    | readonly ['directory', _T_Directory]
>

export type _T_Directory = _i_core._T_Dictionary<null, _T_Node>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Block_Part = _T_Block_Part

export type Block = _T_Block

export type Group_Part = _T_Group_Part

export type Group = _T_Group

export type Node = _T_Node

export type Directory = _T_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Block_Part {
    
    export namespace SG {
        export type snippet = string
        
        export namespace indent {
        }
        export type indent = _T_Group
        
        export namespace sub_block {
        }
        export type sub_block = _T_Block
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Block_Part
        }
        export type optional = _pi.Optional_Value<_T_Block_Part>
        export type nothing = null
    }
    export type SG = 
        | readonly ['snippet', string]
        | readonly ['indent', _T_Group]
        | readonly ['sub block', _T_Block]
        | readonly ['optional', _pi.Optional_Value<_T_Block_Part>]
        | readonly ['nothing', null]
}

export namespace _T_Block {
    
    export namespace L {
    }
    export type L = _T_Block_Part
}

export namespace _T_Group_Part {
    
    export namespace SG {
        
        export namespace nested_block {
        }
        export type nested_block = _T_Block
        export type block = string
        
        export namespace sub_group {
        }
        export type sub_group = _T_Group
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Group_Part
        }
        export type optional = _pi.Optional_Value<_T_Group_Part>
        export type nothing = null
    }
    export type SG = 
        | readonly ['nested block', _T_Block]
        | readonly ['block', string]
        | readonly ['sub group', _T_Group]
        | readonly ['optional', _pi.Optional_Value<_T_Group_Part>]
        | readonly ['nothing', null]
}

export namespace _T_Group {
    
    export namespace L {
    }
    export type L = _T_Group_Part
}

export namespace _T_Node {
    
    export namespace SG {
        
        export namespace file {
        }
        export type file = _T_Group
        
        export namespace directory {
        }
        export type directory = _T_Directory
    }
    export type SG = 
        | readonly ['file', _T_Group]
        | readonly ['directory', _T_Directory]
}

export namespace _T_Directory {
    
    export namespace D {
    }
    export type D = _T_Node
}

// *** ALIASES FOR NESTED TYPES

export namespace Block_Part {
    
    export namespace SG {
        export type snippet = string
        
        export namespace indent {
        }
        export type indent = _T_Group
        
        export namespace sub_block {
        }
        export type sub_block = _T_Block
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Block_Part
        }
        export type optional = _pi.Optional_Value<_T_Block_Part>
        export type nothing = null
    }
    export type SG = 
        | readonly ['snippet', string]
        | readonly ['indent', _T_Group]
        | readonly ['sub block', _T_Block]
        | readonly ['optional', _pi.Optional_Value<_T_Block_Part>]
        | readonly ['nothing', null]
}

export namespace Block {
    
    export namespace L {
    }
    export type L = _T_Block_Part
}

export namespace Group_Part {
    
    export namespace SG {
        
        export namespace nested_block {
        }
        export type nested_block = _T_Block
        export type block = string
        
        export namespace sub_group {
        }
        export type sub_group = _T_Group
        
        export namespace optional {
            
            export namespace O {
            }
            export type O = _T_Group_Part
        }
        export type optional = _pi.Optional_Value<_T_Group_Part>
        export type nothing = null
    }
    export type SG = 
        | readonly ['nested block', _T_Block]
        | readonly ['block', string]
        | readonly ['sub group', _T_Group]
        | readonly ['optional', _pi.Optional_Value<_T_Group_Part>]
        | readonly ['nothing', null]
}

export namespace Group {
    
    export namespace L {
    }
    export type L = _T_Group_Part
}

export namespace Node {
    
    export namespace SG {
        
        export namespace file {
        }
        export type file = _T_Group
        
        export namespace directory {
        }
        export type directory = _T_Directory
    }
    export type SG = 
        | readonly ['file', _T_Group]
        | readonly ['directory', _T_Directory]
}

export namespace Directory {
    
    export namespace D {
    }
    export type D = _T_Node
}
