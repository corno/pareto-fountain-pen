import * as _pi from 'pareto-core-interface'

import * as _i_out from "./data_types/target"
import * as _i_in from "./data_types/source"

// **** TYPES

export type _T_Block_Part = (
    $$_: _i_in._T_Block_Part,
    $$_p: null,
) => _i_out._T_Block_Part

export type _T_Block = (
    $$_: _i_in._T_Block,
    $$_p: null,
) => _i_out._T_Block

export type _T_Group_Part = (
    $$_: _i_in._T_Group_Part,
    $$_p: null,
) => _i_out._T_Group_Part

export type _T_Group = (
    $$_: _i_in._T_Group,
    $$_p: null,
) => _i_out._T_Group

export type _T_Node = (
    $$_: _i_in._T_Node,
    $$_p: null,
) => _i_out._T_Node

export type _T_Directory = (
    $$_: _i_in._T_Directory,
    $$_p: null,
) => _i_out._T_Directory

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Block_Part = _T_Block_Part

export type Block = _T_Block

export type Group_Part = _T_Group_Part

export type Group = _T_Group

export type Node = _T_Node

export type Directory = _T_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Block_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block_Part
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block_Part
}

export namespace _T_Block {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block
}

export namespace _T_Group_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group_Part
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group_Part
}

export namespace _T_Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group
}

export namespace _T_Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace _T_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Directory
}

// *** ALIASES FOR NESTED TYPES

export namespace Block_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block_Part
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block_Part
}

export namespace Block {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block
}

export namespace Group_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group_Part
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group_Part
}

export namespace Group {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Group
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group
}

export namespace Node {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Node
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Directory
}
