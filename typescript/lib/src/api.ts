import * as interface_ from "./interface/api.js"

import * as t_prose_to_list_of_characters from "./_implementation/transformers/prose/list_of_characters.js"

export const api: interface_.API = {
    'transformers': {
        'prose': {
            'list of characters': {
                'Paragraph': t_prose_to_list_of_characters.Paragraph,
                'Phrase': t_prose_to_list_of_characters.Phrase,
            }
        }
    }
}