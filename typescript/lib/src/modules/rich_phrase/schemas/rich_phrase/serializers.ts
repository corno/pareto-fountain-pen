import * as p_ from 'pareto-core/implementation/serializer'

//schemas
import type * as s_in from "./schema.js"

//dependencies


export const Phrase: p_.Serializer<s_in.Phrase> = (
    $: s_in.Phrase
): string => {
    return p_.from.state($).decide(
        ($): string => {
            switch ($[0]) {
                case 'value': return p_.option($, ($) => p_.from.state($).decide(
                    ($): string => {
                        switch ($[0]) {
                            case 'text': return p_.option($, ($) => $)
                            default: return p_.exhaustive($[0])
                        }
                    }
                ))
                case 'rich phrase': return p_.option($, ($) => {
                    const $v_rich_list = $
                    return p_.from.list($.items).on_has_items(
                        ($) => {
                            const sep = $v_rich_list['if not empty'].separator
                            const amount = p_.from.list($).amount_of_items()
                            let current = -1
                            return p_.ph.list(
                                p_.literal.list<string>([
                                    Phrase($v_rich_list['if not empty'].before),
                                    p_.ph.list(
                                        p_.from.list($).map(
                                            ($): string => {
                                                current++
                                                return current < amount - 1
                                                    ? p_.ph.list(
                                                        p_.literal.list([
                                                            Phrase($),
                                                            Phrase(sep)
                                                        ])
                                                    )
                                                    : Phrase($)
                                            }
                                        ),
                                    ),
                                    Phrase($v_rich_list['if not empty'].after)

                                ]))
                        },
                        () => Phrase($['if empty'])
                    )
                })
                case 'composed': return p_.option($, ($) => p_.ph.list(
                    p_.from.list($).map(
                        ($) => Phrase($)
                    ),
                ))
                case 'optional': return p_.option($, ($) => p_.from.optional($).decide(
                    ($) => Phrase($),
                    () => "",
                ))
                case 'nothing': return p_.option($, ($) => "")
                default: return p_.exhaustive($[0])
            }
        })
}
