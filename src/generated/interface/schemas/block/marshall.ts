import * as _pt from 'exupery-core-types'

import * as _i_in from "./unconstrained"
import * as _i_out from "../../core/astn_target"

// **** TYPES

export type _T_Value_Serializers = {
    readonly 'boolean': (
        $$_: boolean,
        $$_p: null,
    ) => string
    readonly 'custom numbers': null
    readonly 'default number': (
        $$_: number,
        $$_p: null,
    ) => string
}

export type _T_s_Block = (
    $$_: _i_in._T_Block,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Block_Part = (
    $$_: _i_in._T_Block_Part,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Directory = (
    $$_: _i_in._T_Directory,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Line = (
    $$_: _i_in._T_Line,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Line_Part = (
    $$_: _i_in._T_Line_Part,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_s_Lines = (
    $$_: _i_in._T_Lines,
    $$_p: {
        readonly 'value serializers': _T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Value_Serializers = _T_Value_Serializers

export type s_Block = _T_s_Block

export type s_Block_Part = _T_s_Block_Part

export type s_Directory = _T_s_Directory

export type s_Line = _T_s_Line

export type s_Line_Part = _T_s_Line_Part

export type s_Lines = _T_s_Lines

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
    }
    export type custom_numbers = null
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace _T_s_Block {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Block_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_s_Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lines
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Value_Serializers {
    
    export namespace _boolean {
        export type CONTEXT = boolean
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type _boolean = (
        $$_: boolean,
        $$_p: null,
    ) => string
    
    export namespace custom_numbers {
    }
    export type custom_numbers = null
    
    export namespace default_number {
        export type CONTEXT = number
        
        export namespace PARAMS {
        }
        export type RESULT = string
    }
    export type default_number = (
        $$_: number,
        $$_p: null,
    ) => string
}

export namespace s_Block {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Block_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Block_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Directory {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Directory
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Line {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Line_Part {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Line_Part
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace s_Lines {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Lines
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
