import * as p_t from 'pareto-core/interface/transformer'
import * as p_s from 'pareto-core/implementation/serializer'

import * as s_paragraph from "./schemas/paragraph.js"
import * as s_serialized from "./schemas/serialized.js"
import * as s_rich_phrase from "./schemas/rich_phrase.js"
import * as s_paragraph_serialization from "./schemas/paragraph_serialization.js"

export type API = {
    'serializers': {
        'rich_phrase': p_s.Serializer<
            s_rich_phrase.Phrase
        >
    }
    'transformers': {
        'paragraph': {
            'serialized': {
                'Paragraph': p_t.Transformer_With_Parameter<
                    s_paragraph.Paragraph,
                    s_serialized.Lines,
                    s_paragraph_serialization.Parameters
                >
            }
        },
    },
}