import * as interface_ from "./interface/api.js"

import * as ser from "./_implementation/serializers/prose.js"

export const api: interface_.API = {

    'serializers': {
        'prose': {
            'Phrase': ser.Phrase,
        },
    },
}