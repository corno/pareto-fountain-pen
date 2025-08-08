import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/unconstrained"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Directory = (
    $$_: _i_in._T_Directory,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Lines = (
    $$_: _i_in._T_Lines,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Directory = _T_Directory

export type Lines = _T_Lines

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

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

export namespace _T_Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lines
    
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

export namespace Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lines
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
