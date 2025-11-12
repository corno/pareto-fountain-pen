import * as _pt from 'exupery-core-types'

import * as _i_out from "./data_types/target"
import * as _i_vd from "./value_deserializers"

// **** TYPES

export type _T_Block_Part = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Block_Part

export type _T_Block = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Block

export type _T_Group_Part = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Group_Part

export type _T_Group = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Group

export type _T_Node = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
) => _i_out._T_Node

export type _T_Directory = (
    $$_: string,
    $$_p: {
        readonly 'value deserializers': _i_vd._T_Value_Deserializers
    },
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
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block_Part
}

export namespace _T_Block {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block
}

export namespace _T_Group_Part {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group_Part
}

export namespace _T_Group {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group
}

export namespace _T_Node {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace _T_Directory {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Directory
}

// *** ALIASES FOR NESTED TYPES

export namespace Block_Part {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block_Part
}

export namespace Block {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Block
}

export namespace Group_Part {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group_Part
}

export namespace Group {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Group
}

export namespace Node {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Node
}

export namespace Directory {
    export type CONTEXT = string
    
    export namespace PARAMS {
        
        export namespace value_deserializers {
        }
        export type value_deserializers = _i_vd._T_Value_Deserializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Directory
}
