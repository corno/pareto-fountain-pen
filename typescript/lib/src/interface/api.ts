import * as p_t from 'pareto-core/interface/transformer'
import * as p_s from 'pareto-core/implementation/serializer'


import * as s_serialize_prose from "./schemas/serialize_prose.js"
import * as s_prose from "./schemas/prose.js"

export type API = {
    'serializers': {
        'prose': {
            'list of characters': {
                'Paragraph': p_s.Serializer_With_Parameter<
                    s_prose.Paragraph,
                    s_serialize_prose.Parameters
                >,
                'Phrase': p_s.Serializer_With_Parameter<
                    s_prose.Phrase,
                    s_serialize_prose.Parameters
                >,
            }
        }
    }
}