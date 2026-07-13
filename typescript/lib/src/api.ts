import * as interface_ from "./interface/api.js"

import * as t_prose_to_list_of_characters from "./_implementation/serializers/prose.js"

export const api: interface_.API = {
    'serializers': {
        'prose': {
            'list of characters': {
                'Paragraph': t_prose_to_list_of_characters.Paragraph,
                'Phrase': t_prose_to_list_of_characters.Phrase,
            }
        }
    }
}