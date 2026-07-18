#!/usr/bin/env node

import p_log_debug_message from 'pareto-core-dev/log_debug_message'
import * as p_ from 'pareto-core/implementation/transformer'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import * as lib from "lib/api"

import * as sh from "lib/shorthands/paragraph/deprecated"

import * as t_paragraph_to_serialized from "lib/_implementation/transformers/paragraph/serialized"
import log_debug_message from 'pareto-core-dev/log_debug_message'

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

log_debug_message("FOO", () => undefined)

const serialized = t_paragraph_to_serialized.Paragraph(
    sh.pg.sentences([
        sh.sentence([
            phrase
        ]),
        sh.sentence([
            sh.ph.composed([
                sh.ph.text("{"),
                sh.ph.rich_paragraph(
                    p_.literal.list([]),
                    sh.ph.nothing(),
                    sh.ph.nothing(),
                    sh.ph.text(","),
                    sh.ph.nothing(),
                ),
                sh.ph.text("}"),

            ])
        ])
    ]),
    {
        'indentation': "   ",
    }
)

p_.from.list(serialized).map(
    ($) => p_log_debug_message($, () => {
        return ""
    })
)