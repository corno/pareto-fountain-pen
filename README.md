# Pareto Fountain Pen

A TypeScript library for generating formatted text and source code with automatic indentation management. Pareto Fountain Pen provides a composable, functional API for building complex text outputs with proper formatting.

## Overview

Pareto Fountain Pen is designed for code generation and formatted text output in the Pareto ecosystem. It provides a structured approach to building text content through a hierarchical model: **Directory** → **Node** → **Paragraph** → **Sentence** → **Phrase**. The library automatically handles indentation, line breaks, and formatting concerns, allowing you to focus on content structure.

## Installation

```bash
npm install pareto-fountain-pen
```

## Core Concepts

### Hierarchical Structure

Pareto Fountain Pen uses a hierarchical model for text generation:

- **Directory**: A collection of named nodes (files and subdirectories)
- **Node**: Either a file (containing a paragraph) or a directory (containing more nodes)
- **Paragraph**: A logical block of content (multiple sentences, lists, or composed paragraphs)
- **Sentence**: A single line of output (composed of phrases)
- **Phrase**: A fragment of text within a line (literals, values, or composed phrases)

### Key Components

#### Paragraphs (`pg`)

Paragraphs represent blocks of content and support several patterns:

- **`nothing`**: An empty paragraph
- **`sentences`**: A list of sentences (lines)
- **`composed`**: Multiple paragraphs combined
- **`rich`**: Advanced list handling with separators and conditional content
- **`optional`**: Conditionally included content

#### Phrases (`ph`)

Phrases are the building blocks of sentences:

- **`literal`**: Static text content
- **`decimal`**: Numeric values
- **`serialize`**: Pre-serialized character lists
- **`indent`**: Nested content with automatic indentation
- **`composed`**: Multiple phrases combined
- **`rich`**: List of phrases with separators
- **`optional`**: Conditionally included phrases
- **`nothing`**: Empty placeholder

#### Nodes (`n`)

Nodes represent file system structure:

- **`file`**: A file containing a paragraph
- **`directory`**: A directory containing more nodes

## Usage

### Basic Example

```typescript
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

// Create a simple paragraph
const paragraph = sh.pg.sentences([
    sh.sentence([
        sh.ph.literal("function "),
        sh.ph.literal("greet"),
        sh.ph.literal("() {")
        sh.ph.indent(
            sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("console.log('Hello, World!')")
                ])
            ])
        )
        sh.ph.literal("}")
    ])
])
```

Output:
```
function greet() {
    console.log('Hello, World!')
}
```

### TypeScript Code Generation

```typescript
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

const generateInterface = (name: string, properties: Array<{ name: string, type: string }>) =>
    sh.pg.sentences([
        sh.sentence([
            sh.ph.literal("export interface "),
            sh.ph.literal(name),
            sh.ph.literal(" {")
        ]),
        sh.sentence([
            sh.ph.indent(
                sh.pg.sentences(
                    properties.map(prop => 
                        sh.sentence([
                            sh.ph.literal(prop.name),
                            sh.ph.literal(": "),
                            sh.ph.literal(prop.type)
                        ])
                    )
                )
            )
        ]),
        sh.sentence([
            sh.ph.literal("}")
        ])
    ])
```

### Rich Lists

Rich lists provide advanced formatting with separators, before/after content, and conditional empty handling:

```typescript
// Generate a comma-separated list
sh.ph.rich(
    items.map(item => sh.ph.literal(item)),
    sh.ph.nothing(),           // if empty
    sh.ph.literal("[ "),       // before
    sh.ph.literal(", "),       // separator
    sh.ph.literal(" ]")        // after
)
// Output: [ item1, item2, item3 ]
```

### Error Messages

Pareto Fountain Pen is extensively used for formatting error messages:

```typescript
const formatError = (file: string, line: number, column: number, message: string) =>
    sh.pg.sentences([
        sh.sentence([
            sh.ph.literal(file),
            sh.ph.literal(":"),
            sh.ph.decimal(line),
            sh.ph.literal(":"),
            sh.ph.decimal(column),
            sh.ph.literal(": Error: "),
            sh.ph.literal(message)
        ])
    ])
// Output: src/main.ts:42:15: Error: Type mismatch
```

### Directory Structure

Generate file and directory structures:

```typescript
const projectStructure = sh.directory({
    "src": sh.n.directory({
        "index.ts": sh.n.file(
            sh.pg.sentences([
                sh.sentence([sh.ph.literal("export * from './lib'")])
            ])
        ),
        "lib": sh.n.directory({
            "main.ts": sh.n.file(mainFileContent)
        })
    }),
    "package.json": sh.n.file(packageJsonContent)
})
```

## Transformation Pipeline

Pareto Fountain Pen processes content through a transformation pipeline:

1. **Block/Paragraph**: High-level structure
2. **Semi Lines**: Intermediate representation with indentation markers
3. **Lines**: Formatted lines with proper indentation
4. **List of Characters**: Final character array output

### Converting to Text

```typescript
import * as t_fp_to_loc from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/list_of_characters"

const text = t_fp_to_loc.Paragraph(paragraph, {
    'indentation': '    ',  // 4 spaces
    'newline': '\n'         // Unix line endings
})
```

## Common Use Cases in Pareto Canon

### 1. Code Generators
- **TypeScript**: Interface, type, and implementation generation
- **GraphViz**: DOT file generation for diagrams
- **JSON**: Formatted JSON output

### 2. Error Reporting
- Compiler error messages
- Validation errors
- Parse error formatting

### 3. File Operations
- Writing generated code to files
- Console logging with formatting
- Directory structure creation

### 4. Documentation
- API documentation generation
- Schema documentation
- Code comments

## API Reference

### Shorthands (`sh`)

```typescript
import * as sh from "pareto-fountain-pen/dist/shorthands/block"

// Paragraphs
sh.pg.nothing()
sh.pg.sentences([...])
sh.pg.composed([...])
sh.pg.rich(items, if_empty, indent, before, separator, after)
sh.pg.optional(paragraph)

// Sentences
sh.sentence([...])

// Phrases
sh.ph.literal(string)
sh.ph.decimal(number)
sh.ph.indent(paragraph)
sh.ph.composed([...])
sh.ph.rich(items, if_empty, before, separator, after)
sh.ph.serialize(list_of_characters)
sh.ph.optional(phrase)
sh.ph.nothing()

// Nodes
sh.n.file(paragraph)
sh.n.directory(children)

// Directories
sh.directory(nodes)
```

### Transformers

```typescript
import * as t_to_loc from "pareto-fountain-pen/dist/implementation/manual/schemas/block/transformers/list_of_characters"

// Paragraph to text
t_to_loc.Paragraph(paragraph, {
    'indentation': string,
    'newline': string
})

// Phrase to text
t_to_loc.Phrase(phrase, {
    'indentation': string,
    'newline': string
})
```

## Integration with Pareto Ecosystem

Pareto Fountain Pen is a core dependency used throughout the Pareto ecosystem:

- **pareto-liana**: Schema compilation and code generation
- **pareto**: TypeScript light code generation
- **astn/astn-core**: ASTN serialization and authoring
- **pareto-graphviz**: Graph visualization file generation
- **pareto-json**: JSON document formatting
- **pareto-resources**: File system operations
- **pareto-development-tools**: Build tooling and error reporting

## Design Principles

1. **Composability**: All components can be nested and combined
2. **Type Safety**: Full TypeScript typing for correctness
3. **Separation of Concerns**: Structure separate from formatting
4. **Functional Style**: Immutable data and pure transformations
5. **Automatic Formatting**: Indentation and layout handled automatically

## Advanced Features

### Conditional Content

Use `optional` to conditionally include content:

```typescript
sh.ph.optional(
    value !== null 
        ? { 'has value': sh.ph.literal(value) }
        : { 'has no value': null }
)
```

### Nested Indentation

Indentation is automatically tracked and applied:

```typescript
sh.pg.sentences([
    sh.sentence([
        sh.ph.literal("outer level"),
        sh.ph.indent(
            sh.pg.sentences([
                sh.sentence([
                    sh.ph.literal("indented level 1"),
                    sh.ph.indent(
                        sh.pg.sentences([
                            sh.sentence([sh.ph.literal("indented level 2")])
                        ])
                    )
                ])
            ])
        )
    ])
])
```

### List Transformation

Convert data structures to formatted output:

```typescript
const formatList = (items: Array<string>) =>
    sh.pg.sentences(
        items.map(item => 
            sh.sentence([sh.ph.literal(item)])
        )
    )
```

## Contributing

Pareto Fountain Pen is part of the Pareto eco syste. When contributing:

1. Maintain functional programming principles
2. Ensure type safety throughout
3. Follow existing naming conventions
4. Add tests for new features
5. Update documentation

## License

Apache-2.0

## Links

- [GitHub Repository](https://github.com/corno/pareto-fountain-pen)
- [Issues](https://github.com/corno/pareto-fountain-pen/issues)
- [Pareto Canon](https://github.com/corno/pareto-canon)
