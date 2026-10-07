import * as p_ from 'pareto-core/transformer'
import p_unreachable_code_path from 'pareto-core/transformer/specials/unreachable_code_path'

import type * as s from "./schema.js"

export type Parameters = {
    'indentation': string
    'newline': string
}

const each = <T>(items: readonly T[], action: (item: T, index: number) => void): void => {
    for (let index = 0; index < items.length; index++) {
        const item = items[index]
        if (item === undefined) {
            p_unreachable_code_path("paragraph lists must not contain undefined items")
        } else {
            action(item, index)
        }
    }
}

const optional = <T>(value: null | readonly [T], action: (item: T) => void): void => {
    if (value !== null) {
        action(value[0])
    }
}

export const Paragraph = (
    paragraph: s.Paragraph,
    parameters: Parameters,
    write: (text: string) => void,
): void => {
    const sentence = (
        value: s.Sentence,
        level: number,
        before_line: () => void,
        separator: s.Phrase | null = null,
    ): void => {
        let open = false
        let found_indentation = false

        const start = (): void => {
            if (!open) {
                before_line()
                for (let i = 0; i < level; i++) {
                    write(parameters.indentation)
                }
                open = true
            }
        }
        const finish = (): void => {
            if (open) {
                write(parameters.newline)
                open = false
            }
        }
        const nested = (): void => {
            found_indentation = true
            finish()
            before_line()
        }
        const phrase = (value: s.Phrase): void => {
            switch (value[0]) {
                case 'value':
                    switch (value[1][0]) {
                        case 'text':
                            start()
                            write(value[1][1])
                            return
                        default: return p_.exhaustive(value[1][0])
                    }
                case 'indent':
                    visit(value[1], level + 1, nested)
                    return
                case 'composed':
                    each(value[1].__get_raw(), phrase)
                    return
                case 'optional':
                    optional(value[1].__get_raw(), phrase)
                    return
                case 'nothing': return
                case 'rich phrase': {
                    const items = value[1].items.__get_raw()
                    const nonempty = value[1]['if not empty']
                    if (items.length === 0) {
                        phrase(value[1]['if empty'])
                    } else {
                        phrase(nonempty.before)
                        each(items, (item, index) => {
                            phrase(item)
                            if (index < items.length - 1) {
                                phrase(nonempty.separator)
                            }
                        })
                        phrase(nonempty.after)
                    }
                    return
                }
                case 'rich paragraph': {
                    const items = value[1].items.__get_raw()
                    const nonempty = value[1]['if not empty']
                    if (items.length === 0) {
                        phrase(value[1]['if empty'])
                    } else {
                        phrase(nonempty.before)
                        each(items, (item, index) => {
                            sentence(item, level + 1, nested, index < items.length - 1 ? nonempty.separator : null)
                        })
                        phrase(nonempty.after)
                    }
                    return
                }
                default: return p_.exhaustive(value[0])
            }
        }

        each(value.__get_raw(), phrase)
        if (separator !== null) {
            phrase(separator)
        }
        if (!open && !found_indentation) {
            start()
        }
        finish()
    }

    const visit = (value: s.Paragraph, level: number, before_line: () => void): void => {
        switch (value[0]) {
            case 'composed':
                each(value[1].__get_raw(), (item) => visit(item, level, before_line))
                return
            case 'sentences':
                each(value[1].__get_raw(), (item) => sentence(item, level, before_line))
                return
            case 'optional':
                optional(value[1].__get_raw(),
                    (item) => visit(item, level, before_line),
                )
                return
            case 'nothing': return
            case 'rich list': {
                const items = value[1].items.__get_raw()
                const nonempty = value[1]['if not empty']
                if (items.length === 0) {
                    optional(value[1]['if empty'].__get_raw(),
                        (item) => sentence(item, level, before_line),
                    )
                } else {
                    optional(nonempty.before.__get_raw(),
                        (item) => sentence(item, level, before_line),
                    )
                    each(items, (item, index) => {
                        const raw_separator = nonempty.separator.__get_raw()
                        const separator = index < items.length - 1
                            ? raw_separator === null ? null : raw_separator[0]
                            : null
                        sentence(item, level + (nonempty.indent ? 1 : 0), before_line, separator)
                    })
                    optional(nonempty.after.__get_raw(),
                        (item) => sentence(item, level, before_line),
                    )
                }
                return
            }
            default: return p_.exhaustive(value[0])
        }
    }

    visit(paragraph, 0, () => {})
}
