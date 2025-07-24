import * as _pt from 'exupery-core-types'

import * as _i_core from "../../core/poormans_parser"

// **** TYPES

export type _T_Directory<G_Source> = _i_core._T_Dictionary<G_Source, _i_core._T_State_Group<G_Source, 
    | readonly ['directory', _T_Directory<G_Source>]
    | readonly ['file', _T_Lines<G_Source>]
>>

export type _T_Lines<G_Source> = _i_core._T_List<G_Source, {
    readonly 'indentation': number
    readonly 'text': string
}>

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Directory<G_Source> = _T_Directory<G_Source>

export type Lines<G_Source> = _T_Lines<G_Source>

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory<G_Source> = _T_Directory<G_Source>
            
            export namespace file {
            }
            export type file<G_Source> = _T_Lines<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['directory', _T_Directory<G_Source>]
            | readonly ['file', _T_Lines<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['directory', _T_Directory<G_Source>]
        | readonly ['file', _T_Lines<G_Source>]
    >
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

export namespace Directory {
    
    export namespace D {
        
        export namespace SG {
            
            export namespace directory {
            }
            export type directory<G_Source> = _T_Directory<G_Source>
            
            export namespace file {
            }
            export type file<G_Source> = _T_Lines<G_Source>
        }
        export type SG<G_Source> = 
            | readonly ['directory', _T_Directory<G_Source>]
            | readonly ['file', _T_Lines<G_Source>]
    }
    export type D<G_Source> = _i_core._T_State_Group<G_Source, 
        | readonly ['directory', _T_Directory<G_Source>]
        | readonly ['file', _T_Lines<G_Source>]
    >
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
