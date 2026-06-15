#!/usr/bin/env node

import p_log_debug_message from 'pareto-core-dev/dist/log_debug_message'
import p_text_from_list from 'pareto-core/dist/implementation/specials/text_from_list'

import * as t_fountain_pen_to_loc from "lib/dist/implementation/manual/transformers/prose/list_of_characters"

import * as sh from "lib/dist/shorthands/prose"

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

p_log_debug_message(
    p_text_from_list(
        t_fountain_pen_to_loc.Phrase(
            phrase,
            {
                'newline': "\n",
                'indentation': "  ",
            }
        ),
        ($) => $
    ),
    () => { }
)