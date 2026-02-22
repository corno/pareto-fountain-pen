#!/usr/bin/env node

import * as _pdev from 'pareto-core-dev'
import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as t_fountain_pen_to_loc from "pub/dist/implementation/manual/transformers/prose/list_of_characters"

import * as sh from "pub/dist/shorthands/prose"

_pdev.log_debug_message("TEST NOT IMPLEMENTED YET", () => { })

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

_pdev.log_debug_message(
    _p_text_from_list(
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