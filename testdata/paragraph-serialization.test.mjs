import assert from 'node:assert/strict'
import test from 'node:test'

import * as p_ from '../typescript/lib/node_modules/pareto-core/dist/transformer.js'
import * as sh from '../typescript/lib/dist/modules/paragraph/schemas/paragraph/shorthands/deprecated.js'
import { Paragraph as serialize } from '../typescript/lib/dist/modules/paragraph/schemas/paragraph/serializers.js'
import { Paragraph as lines } from '../typescript/lib/dist/modules/paragraph/schemas/paragraph/transformers/serialized.js'

const sentence = (...phrases) => sh.sentence(phrases)
const paragraph = (...sentences) => sh.pg.sentences(sentences)
const text = sh.ph.text
const nothing = sh.ph.nothing
const optional = (value) => p_.literal.set(value)
const absent = () => p_.literal.not_set()
const composed = (...items) => ['composed', p_.literal.list(items)]
const rich = (items, indent, separator = text(',')) => ['rich list', {
    items: p_.literal.list(items),
    'if empty': optional(sentence(text('empty'))),
    'if not empty': {
        before: optional(sentence(text('before'))),
        indent,
        separator: optional(separator),
        after: optional(sentence(text('after'))),
    },
}]

const fixtures = {
    'empty paragraph': paragraph(),
    'nothing paragraph': ['nothing', null],
    'absent paragraph': ['optional', absent()],
    'present paragraph': ['optional', optional(paragraph(sentence(text('present'))))],
    'empty sentence': paragraph(sentence()),
    'nothing and optional phrases': paragraph(sentence(nothing(), ['optional', absent()], ['optional', optional(text('yes'))])),
    'adjacent text': paragraph(sentence(text('one'), text('two'))),
    'embedded newline and Unicode': paragraph(sentence(text('first\nsecond 😀'))),
    'indent with surrounding text': paragraph(sentence(text('{'), sh.ph.indent(paragraph(sentence(text('nested')))), text('}'))),
    'empty indentation': paragraph(sentence(text('before'), sh.ph.indent(paragraph()), text('after'))),
    'only empty indentation': paragraph(sentence(sh.ph.indent(paragraph()))),
    'indented empty sentence': paragraph(sentence(sh.ph.indent(paragraph(sentence())))),
    'nested indentation': paragraph(sentence(sh.ph.indent(paragraph(sentence(sh.ph.indent(paragraph(sentence(text('deep'))))))))),
    'composed paragraphs': composed(paragraph(sentence(text('a'))), ['nothing', null], paragraph(sentence(text('b')))),
    'rich list': rich([sentence(text('a')), sentence(text('b'))], false),
    'indented rich list': rich([sentence(text('a')), sentence(text('b'))], true),
    'empty rich list': rich([], true),
    'absent rich list wrappers': ['rich list', {
        items: p_.literal.list([sentence(text('a')), sentence(text('b'))]),
        'if empty': absent(),
        'if not empty': { before: absent(), indent: false, separator: absent(), after: absent() },
    }],
    'rich list with multiline separator': rich([sentence(text('a')), sentence(text('b'))], true, sh.ph.indent(paragraph(sentence(text('separator'))))),
    'rich phrase': paragraph(sentence(sh.ph.rich_phrase([text('a'), text('b')], text('empty'), text('['), text(','), text(']')))),
    'empty rich phrase': paragraph(sentence(sh.ph.rich_phrase([], text('empty'), text('['), text(','), text(']')))),
    'rich paragraph': paragraph(sentence(sh.ph.rich_paragraph([sentence(text('a')), sentence(text('b'))], nothing(), text('{'), text(','), text('}')))),
    'empty rich paragraph': paragraph(sentence(sh.ph.rich_paragraph([], text('empty'), text('{'), text(','), text('}')))),
    'rich paragraph with nested sentence': paragraph(sentence(sh.ph.rich_paragraph([sentence(sh.ph.indent(paragraph(sentence(text('deep')))))], nothing(), nothing(), nothing(), nothing()))),
}

for (const [name, value] of Object.entries(fixtures)) {
    test(name, () => {
        for (const indentation of ['', '    ', '\t', '--']) {
            for (const newline of ['\n', '\r\n', '']) {
                let actual = ''
                serialize(value, { indentation, newline }, (chunk) => { actual += chunk })
                const expected = lines(value, { indentation }).__get_raw().map((line) => line + newline).join('')
                assert.equal(actual, expected)
            }
        }
    })
}

test('writes directly without constructing mapped paragraph lists', () => {
    const raw = [
        [['value', ['text', 'first']]],
        [['indent', ['sentences', [[['value', ['text', 'nested']]]]]]],
    ]
    const list = (items) => ({
        __list: true,
        __get_raw: () => items,
        __deprecated_get_possible_item_at: () => assert.fail('must walk raw lists directly'),
        __deprecated_get_item_at: () => assert.fail('must walk raw lists directly'),
    })
    const value = ['sentences', list(raw.map((items) => list(items.map((phrase) =>
        phrase[0] === 'indent'
            ? ['indent', ['sentences', list(phrase[1][1].map((items) => list(items)))]]
            : phrase
    ))))]
    const chunks = []
    serialize(value, { indentation: '    ', newline: '\n' }, (chunk) => chunks.push(chunk))
    assert.deepEqual(chunks, ['first', '\n', '    ', 'nested', '\n'])
})

test('propagates writer failures', () => {
    const error = new Error('write failed')
    assert.throws(() => serialize(paragraph(sentence(text('output'))),
        { indentation: '    ', newline: '\n' },
        () => { throw error },
    ), (actual) => actual === error)
})

test('mixed nested paragraph structures match the existing transformer', () => {
    let seed = 123456
    const choose = (amount) => {
        seed = (seed * 1664525 + 1013904223) >>> 0
        return seed % amount
    }
    const phrase = (depth) => {
        if (depth === 0) {
            return choose(2) ? text('text') : nothing()
        }
        switch (choose(6)) {
            case 0: return text('')
            case 1: return sh.ph.indent(group(depth - 1))
            case 2: return sh.ph.composed([phrase(depth - 1), phrase(depth - 1)])
            case 3: return ['optional', choose(2) ? optional(phrase(depth - 1)) : absent()]
            case 4: return sh.ph.rich_paragraph(
                Array.from({ length: choose(3) }, () => sentence(phrase(depth - 1))),
                phrase(depth - 1), phrase(depth - 1), phrase(depth - 1), phrase(depth - 1),
            )
            default: return sh.ph.rich_phrase(
                Array.from({ length: choose(3) }, () => phrase(depth - 1)),
                phrase(depth - 1), phrase(depth - 1), phrase(depth - 1), phrase(depth - 1),
            )
        }
    }
    const group = (depth) => {
        if (depth === 0) {
            return paragraph(sentence(text('leaf')))
        }
        const sentences = Array.from({ length: choose(3) }, () =>
            sentence(...Array.from({ length: choose(3) }, () => phrase(depth - 1)))
        )
        switch (choose(4)) {
            case 0: return composed(group(depth - 1), group(depth - 1))
            case 1: return ['optional', choose(2) ? optional(group(depth - 1)) : absent()]
            case 2: return rich(sentences, choose(2) === 1, phrase(depth - 1))
            default: return paragraph(...sentences)
        }
    }
    for (let index = 0; index < 500; index++) {
        const value = group(4)
        let actual = ''
        serialize(value, { indentation: '--', newline: '\r\n' }, (chunk) => { actual += chunk })
        const expected = lines(value, { indentation: '--' }).__get_raw().map((line) => line + '\r\n').join('')
        assert.equal(actual, expected, `fixture ${index}`)
    }
})
