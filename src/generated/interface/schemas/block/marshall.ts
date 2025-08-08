import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/unconstrained"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Block = (
    $$_: _i_in._T_Block,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Block_Part = (
    $$_: _i_in._T_Block_Part,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Directory = (
    $$_: _i_in._T_Directory,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Line = (
    $$_: _i_in._T_Line,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Line_Part = (
    $$_: _i_in._T_Line_Part,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Block = _T_Block

export type Block_Part = _T_Block_Part

export type Directory = _T_Directory

export type Line = _T_Line

export type Line_Part = _T_Line_Part

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Block {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Block_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Block {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Block_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
