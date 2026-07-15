#!/usr/bin/env node

import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as lib from "lib/api"

import * as sh from "lib/shorthands/paragraph/deprecated"

p_log_debug_message("TEST NOT IMPLEMENTED YET", () => { })

const phrase = sh.ph.indent(
    sh.pg.sentences([
        sh.sentence([
            sh.ph.text("hello"),
            sh.ph.text("world"),
        ]),
        sh.sentence([
            sh.ph.text("goodbye"),
            sh.ph.text("world"),
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