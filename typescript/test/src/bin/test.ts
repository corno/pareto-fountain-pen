#!/usr/bin/env node

import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as lib from "lib/api"

import * as sh from "lib/shorthands/paragraph/deprecated"

p_log_debug_message("TEST NOT IMPLEMENTED YET", () => { })

const phrase = sh.ph.indent(
    sh.pg.sentences([
        sh.sentence([
            sh.ph.literal("hello"),
            sh.ph.literal("world"),
        ]),
        sh.sentence([
            sh.ph.literal("goodbye"),
            sh.ph.literal("world"),
        ]),
    ])
)

// p_log_debug_message(
//     p_text_from_list(
//         lib.api.transformers.prose['list of characters'].Phrase(
//             phrase,
//             {
//                 'newline': "\n",
//                 'indentation': "  ",
//             }
//         ),
//         ($) => $
//     ),
//     () => { }
// )