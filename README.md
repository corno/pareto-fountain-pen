# Pareto Fountain Pen

## Direct paragraph serialization

`modules/paragraph/schemas/paragraph/serializers` exports
`Paragraph(paragraph, { indentation, newline }, write)`.
The serializer walks the paragraph directly and calls `write(text)` with text,
indentation, and newline chunks. It does not construct mapped paragraphs,
intermediate lines, or a complete output string.

Each serialized sentence ends with the configured newline. Empty paragraphs
produce no output; empty sentences produce an empty line. Nested paragraphs use
the configured indentation string, typically four spaces.

The existing paragraph-to-lines transformers remain available for callers that
need a materialized list.

After compiling the library, run regression tests with:

```sh
node --test testdata/paragraph-serialization.test.mjs
```
