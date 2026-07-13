import * as p_t from 'pareto-core/interface/transformer'

import * as s_serialize_prose from "./schemas/serialize_prose.js"
import * as s_prose from "./schemas/prose.js"
import * as s_list_of_characters from "./schemas/list_of_characters.js"

export type API = {
    'transformers': {
        'prose': {
            'list of characters': {
                'Paragraph': p_t.Transformer_With_Parameter<
                    s_prose.Paragraph,
                    s_list_of_characters.List_of_Characters,
                    s_serialize_prose.Parameters
                >,
                'Phrase': p_t.Transformer_With_Parameter<
                    s_prose.Phrase,
                    s_list_of_characters.List_of_Characters,
                    s_serialize_prose.Parameters
                >,
            }
        }
    }
}