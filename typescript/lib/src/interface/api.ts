import * as p_t from 'pareto-core/interface/transformer'
import * as p_s from 'pareto-core/implementation/serializer'

import * as s_prose from "./schemas/prose.js"

export type API = {
    'serializers': {
        'prose': {
            'Phrase': p_s.Phrase_Serializer<
                s_prose.Phrase
            >
            'Paragraph': p_s.Paragraph_Serializer<
                s_prose.Paragraph
            >
        },
    },
}