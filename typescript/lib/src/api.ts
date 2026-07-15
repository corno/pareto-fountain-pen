import * as interface_ from "./interface/api.js"

import * as ser_rich_phrase from "./_implementation/serializers/rich_phrase.js"
import * as t_paragraph_to_lines from "./_implementation/transformers/paragraph/serialized.js"

export const api: interface_.API = {
    'serializers': {
        'rich_phrase': ser_rich_phrase.Phrase,
    },
    'transformers': {
        'paragraph': {
            'serialized': {
                'Paragraph': t_paragraph_to_lines.Paragraph,
            }
        },
    },
}