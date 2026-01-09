import * as _pi from 'pareto-core-interface'

import * as _i_core from "../../../core/unconstrained"

// **** TYPES

export type _T_Lines = _i_core._T_List<null, string>

export type _T_Directory = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['file', _T_Lines]
    | readonly ['directory', _T_Directory]
>>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Lines = _T_Lines

export type Directory = _T_Directory

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Lines {
    export type L = string
}

export namespace _T_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace file {
            }
            export type file = _T_Lines
            
            export namespace directory {
            }
            export type directory = _T_Directory
        }
        export type SG = 
            | readonly ['file', _T_Lines]
            | readonly ['directory', _T_Directory]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['file', _T_Lines]
        | readonly ['directory', _T_Directory]
    >
}

// *** ALIASES FOR NESTED TYPES

export namespace Lines {
    export type L = string
}

export namespace Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace file {
            }
            export type file = _T_Lines
            
            export namespace directory {
            }
            export type directory = _T_Directory
        }
        export type SG = 
            | readonly ['file', _T_Lines]
            | readonly ['directory', _T_Directory]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['file', _T_Lines]
        | readonly ['directory', _T_Directory]
    >
}
