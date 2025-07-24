import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/unresolved"

// **** TYPES

export type _T_Directory = _i_core._T_Dictionary<null, _i_core._T_State_Group<null, 
    | readonly ['directory', _T_Directory]
    | readonly ['file', _T_Lines]
>>

export type _T_Lines = _i_core._T_List<null, {
    readonly 'indentation': number
    readonly 'text': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Directory = _T_Directory

export type Lines = _T_Lines

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory = _T_Directory
            
            export namespace file {
            }
            export type file = _T_Lines
        }
        export type SG = 
            | readonly ['directory', _T_Directory]
            | readonly ['file', _T_Lines]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['directory', _T_Directory]
        | readonly ['file', _T_Lines]
    >
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

export namespace Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory = _T_Directory
            
            export namespace file {
            }
            export type file = _T_Lines
        }
        export type SG = 
            | readonly ['directory', _T_Directory]
            | readonly ['file', _T_Lines]
    }
    export type D = _i_core._T_State_Group<null, 
        | readonly ['directory', _T_Directory]
        | readonly ['file', _T_Lines]
    >
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
