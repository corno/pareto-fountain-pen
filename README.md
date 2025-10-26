# Pareto Fountain Pen

A TypeScript library for generating structured text output with automatic indentation and formatting. Fountain Pen provides a declarative API for building complex text documents with proper nesting, indentation, and line management.

## Installation

```bash
npm install pareto-fountain-pen
```

## Overview

Fountain Pen is designed around two core concepts:
- **Blocks**: Top-level structural units that represent complete sections
- **Line Parts**: Components that make up individual lines within blocks

The library automatically handles:
- Consistent indentation
- Line breaks and spacing
- Nested structure formatting
- Optional content rendering

## Basic Usage

### Importing

```typescript
import * as d_out from "pareto-fountain-pen/dist/generated/interface/schemas/block/unresolved"
import { b, l, block } from "pareto-fountain-pen/dist/shorthands/block"
```

### Creating Simple Output

```typescript
// Create a basic block with a single line
const simpleBlock: d_out.Block = block([
    b.nested_line([
        l.snippet("Hello, "),
        l.snippet("world!")
    ])
])
```

## Core Components

### Blocks (`b`)

Blocks represent structural units and provide methods for organizing content:

#### `b.nested_line(parts: Line_Part[])`
Creates a 'single' line with nested parts:
```typescript
b.nested_line([
    l.snippet("function "),
    l.snippet("myFunction() {")
])
```

#### `b.sub(blocks: Block[])`
Creates a collection of sub-blocks with automatic formatting:
```typescript
b.sub(items.map(item => 
    b.nested_line([l.snippet(`- ${item}`)])
))
```

### Line Parts (`l`)

Line parts are the building blocks of individual lines:

#### `l.snippet(text: string)`
Outputs literal text:
```typescript
l.snippet("const x = 42;")
```

#### `l.sub(parts: Line_Part[])`
Combines multiple line parts:
```typescript
l.sub([
    l.snippet("if ("),
    l.snippet("condition"),
    l.snippet(") {")
])
```

#### `l.indent(blocks: Block[])`
Creates indented content blocks:
```typescript
l.indent([
    b.nested_line([l.snippet("// indented comment")]),
    b.nested_line([l.snippet("console.log('indented');")]) 
])
```

#### `l.sub(parts: Line_Part[])`
Creates a decorated collection of line parts:
```typescript
l.sub(parameters.map(param => 
    l.snippet(param.name)
))
```

#### `l.nothing()`
Represents empty/optional content:
```typescript
optionalValue.transform(
    (value) => l.snippet(value),
    () => l.nothing()  // renders nothing if value is absent
)
```

## Advanced Patterns

### Conditional Rendering

Use ternary operators for conditional content:
```typescript
b.nested_line([
    isStrict ? l.snippet("strict ") : l.nothing(),
    l.snippet("digraph myGraph")
])
```

### Optional Content with Transform

Handle optional values elegantly:
```typescript
name.transform(
    (value) => l.sub([
        l.snippet("name: "),
        l.snippet(value)
    ]),
    () => l.nothing()  // renders nothing if name is undefined
)
```

### Lists and Collections

Process arrays with automatic positioning:
```typescript
b.sub(items.map(item => {
    return b.nested_line([
        l.snippet(`${item.name}: `),
        l.snippet(item.value)
    ])
}))
```

### Nested Structures

Create complex nested documents:
```typescript
export const generateClass = (classData: ClassData): d_out.Block => {
    return block([
        b.nested_line([
            l.snippet(`class ${classData.name} {`)
        ]),
        l.indent([
            b.sub(classData.methods.map(method => 
                b.nested_line([
                    l.snippet(`${method.name}(`),
                    l.sub(method.parameters.map((param, index) =>
                        l.sub([
                            l.snippet(param.name),
                            index < method.parameters.length - 1 
                                ? l.snippet(", ") 
                                : l.nothing()
                        ])
                    )),
                    l.snippet(") {"),
                    l.indent([
                        b.nested_line([l.snippet("// method body")])
                    ]),
                    l.snippet("}")
                ])
            ))
        ]),
        b.nested_line([
            l.snippet("}")
        ])
    ])
}
```

## Integration with State Groups

Fountain Pen works well with pattern-matched state groups:

```typescript
pa.cc(node.type, (type) => {
    switch (type[0]) {
        case 'function': return pa.ss(type, (func) => 
            l.snippet(`function ${func.name}()`)
        )
        case 'variable': return pa.ss(type, (variable) => 
            l.snippet(`const ${variable.name} = ${variable.value}`)
        )
        default: return pa.au(type[0])
    }
})
```

## Common Use Cases

### Code Generation
Generate source code with proper indentation and structure.

### Documentation Generation  
Create formatted documentation with nested sections and lists.

### Configuration Files
Output structured configuration files with consistent formatting.

### Report Generation
Build formatted reports with tables, sections, and hierarchical data.

## Best Practices

1. **Use meaningful names**: Choose descriptive variable names for complex structures
2. **Leverage transform**: Use `transform()` for optional content rather than manual conditionals
3. **Group related content**: Use `l.sub()` to group logically related line parts
4. **Consistent indentation**: Let `l.indent()` handle indentation automatically
5. **Separate concerns**: Keep block structure separate from content generation logic

## Type Safety

Fountain Pen is fully typed and integrates seamlessly with TypeScript's type system. The `d_out.Block` and `d_out.Line_Part` types ensure compile-time correctness of your document structure.

## Writing Output to Disk

After creating your structured document, you can write it directly to disk using the `write_to_disk` function from pareto-fountain-pen.

### Basic File Writing

```typescript
import { write_to_disk } from "pareto-fountain-pen/dist/other/write_to_disk"
import * as sh from "pareto-fountain-pen/dist/shorthands/lines"

// Create your document structure
const myDocument = sh.d.directory(documentContent)

// Write to disk with path parameter
write_to_disk(
    myDocument,
    {
        'path': "./output"
    }
)
```

### Real-world Example from Code Generation

Here's how it's used in practice for generating multiple files:

```typescript
import { write_to_disk } from "pareto-fountain-pen/dist/other/write_to_disk"
import * as sh from "pareto-fountain-pen/dist/shorthands/lines"

export const generate_source_code = ($: null, $p: { 'path': string }) => {
    write_to_disk(
        modules.map(($, key) => {
            return sh.d.directory(transformToOutput(
                getModule(key)
            ))
        }),
        {
            'path': $p.path
        }
    )
}
```

### Directory Structure Generation

The `write_to_disk` function works with directory structures using the shorthands:

```typescript
import * as _ea from 'exupery-core-alg'

import * as sh from "pareto-fountain-pen/dist/shorthands/lines"

// Create a directory structure with multiple files
const projectStructure = sh.d.directory({
    'files': _ea.dictionary_literal({
        'readme.md': documentationBlock,
        'package.json': packageJsonBlock,
        'src/index.ts': sourceCodeBlock
    }),
    'directories': _ea.dictionary_literal({
        'dist': compiledOutput,
        'types': typeDefinitions
    })
})

write_to_disk(
    projectStructure,
    { 'path': "./generated-project" }
)
```

### Function Signature

The `write_to_disk` function takes:
- **First parameter**: The document structure (can be a single document or directory structure)
- **Second parameter**: Configuration object with `'path'` property specifying the output directory

```typescript
write_to_disk(
    content,  // d_out.Block or directory structure
    { 'path': string }  // output path configuration
)
```

### Integration with Build Processes

Use in build scripts and code generation workflows:

```typescript
export const generateDocumentation = ($: null, $p: { 'path': string }) => {
    const documentation = sh.d.directory(createDocumentationStructure())
    
    write_to_disk(documentation, { 'path': $p.path })
    
    console.log(`Documentation generated at ${$p.path}`)
}
```

The `write_to_disk` function handles all file system operations, directory creation, and path resolution automatically.

## Contributing

This library is part of the Pareto ecosystem. Contributions should follow the established patterns and maintain type safety throughout.
