# Changelog
All notable changes to this project will be documented in this file.

## [0.7.8] - 2026-02-14
### String Colors Unification - Mint Green Theme
**Major Change**: Unified all string colors to mint green across JavaScript/TypeScript/React

#### Changed
**Dark Theme Strings**:
- All string types now use mint green `#5FCC88D9` (with dimmed transparency)
- Affected scopes:
  - `string.js` - JavaScript strings
  - `string.template.js` - Template literals
  - `string.quoted.double.js` - Double-quoted strings
  - `string.quoted.single` - Single-quoted strings
  - `string.quoted.double` - Generic double-quoted strings
  - `string.template` - Generic template strings
  - `punctuation.definition.string.template.*` - Template literal punctuation (backticks)

**Light Theme Strings**:
- All string types now use darker mint green `#2B9B6A` with **bold** style
- Same scopes as dark theme with bold font weight for enhanced visibility
- Better contrast on light background while maintaining the mint green harmony

#### Theme Philosophy
- Moved away from multiple green tones to unified mint green
- Creates visual consistency across all string types
- Inspired by sash hover border color for cohesive UI experience
- Dark theme: Soft dimmed appearance for reduced eye strain
- Light theme: Bold appearance for clear readability

## [0.7.7] - 2026-02-14
### Critical Theme Philosophy Fix - No Gray Tones Except Comments
**Major Change**: Removed ALL gray tones from code elements - gray reserved ONLY for comments

#### Changed
**JSX/TSX Content & Scopes**:
- `meta.tag.tsx meta.jsx.children` (JSX text content)
  - Dark: Changed from gray `#7A8590` to **green** `#9BB86E`
  - Light: Changed from gray `#2D3845` to **green** `#35825A`
  - Text inside JSX tags now uses vibrant green color

- `meta.block.tsx/jsx/ts/js` (code blocks)
  - Dark: Changed from gray `#7A8590` to **orange** `#D4A574`
  - Light: Changed from gray `#4A5464` to **brown** `#9A6B3A`

- `meta.function.tsx/jsx` (function scopes)
  - Dark: Changed from gray `#7A8590` to **blue** `#82AAFF`
  - Light: Changed from gray `#4A5464` to **blue** `#3A6A93`

- `source.tsx/jsx` (base file scope)
  - Dark: Changed from gray `#7A8590` to **orange** `#D4A574`
  - Light: Changed from gray `#4A5464` to **brown** `#9A6B3A`

**Shell Script Elements**:
- `string.unquoted.argument.shell`, `meta.argument.shell`
  - Dark: Changed from gray `#ABB2BF` to **orange** `#D4A574`
  - Light: Changed from gray `#5D6978` to **brown** `#9A6B3A`

- `meta.expression.assignment.shell`
  - Dark: Changed from gray `#ABB2BF` to **green** `#9BB86E`
  - Light: Changed from gray `#5D6978` to **green** `#35825A`

- `source.shell`
  - Dark: Changed from gray `#ABB2BF` to **orange** `#D4A574`
  - Light: Changed from gray `#2D3845` to **brown** `#9A6B3A`

#### Theme Philosophy
**Critical Rule**: Gray/neutral tones are **exclusively reserved for comments**. All code elements must use distinctive colors:
- ✅ Green: Strings, JSX content, expressions
- ✅ Orange/Brown: Arguments, blocks, base scopes
- ✅ Blue: Functions, methods
- ✅ Red/Coral: Variables, tags
- ✅ Purple: Keywords, operators
- ❌ Gray: **ONLY for comments** - maintains discretion without visual fatigue

This ensures:
- Clear visual distinction between all code elements
- No ambiguity or "washed out" appearance
- Comments properly subdued with gray
- Active code elements use vibrant, meaningful colors

## [0.7.6] - 2026-02-14
### Bug Fixes - Generic TSX/JSX Scopes
**Critical Fix**: Added color rules for generic TSX/JSX file scopes that were using editor default

#### Fixed
- **`meta.block.tsx`, `meta.block.jsx`** - Code blocks in TSX/JSX files
  - Dark theme: `#7A8590` (muted gray)
  - Light theme: `#4A5464` (dark gray)
  - Previously using bright editor default `#C5CAD3` (contrast 11.12)

- **`meta.function.tsx`, `meta.function.jsx`** - Function scopes in TSX/JSX
  - Dark theme: `#7A8590` (muted gray)
  - Light theme: `#4A5464` (dark gray)
  - Ensures function bodies use dimmed colors

- **`source.tsx`, `source.jsx`** - Base file scope for TSX/JSX files
  - Dark theme: `#7A8590` (muted gray)
  - Light theme: `#4A5464` (dark gray)
  - Provides default color for all TSX/JSX content

- **Also added for consistency**:
  - `meta.block.ts`, `meta.block.js` - To ensure all JS/TS variants are covered

#### Why This Update?
These generic scopes act as fallback colors when no more specific rule matches. They were defaulting to the editor foreground color (`#C5CAD3` in dark theme) which is too bright and violates the "no white" theme philosophy.

#### Impact
This fix ensures that **all content** in TypeScript React (`.tsx`) and JavaScript React (`.jsx`) files uses appropriately dimmed colors, even when specific token rules don't match.

**Color Hierarchy**:
1. Specific tokens (variables, functions, etc.) use their defined colors
2. Generic scopes (blocks, functions, base) now use `#7A8590` (dark) / `#4A5464` (light)
3. No more fallback to bright editor default

## [0.7.5] - 2026-02-14
### Bug Fixes - Remove Remaining White/Bright Colors in JSX/TSX
**Critical Fix**: Removed remaining bright colors from JSX/TSX elements

#### Fixed
- **JSX/TSX Children Content** (`meta.tag.tsx meta.jsx.children`)
  - Dark theme: Changed from bright `#ABB2BF` to darker `#7A8590` (muted gray)
  - Light theme: Already using dark `#2D3845` (no change needed)
  - Affects text content inside JSX tags
  - Example: In `<div>Hello</div>`, "Hello" now uses darker color

- **TSX/JSX Property Access** (`variable.other.property.tsx`, `variable.other.property.jsx`)
  - Added missing scope rules (previously using default editor color)
  - Dark theme: `#DEB38AED` (warm orange, consistent with .js and .ts)
  - Light theme: `#A07548` (brown/orange, consistent with .js and .ts)
  - Example: In `obj.prop`, "prop" now properly colored

#### Why This Update?
- These scopes were using bright colors (`#ABB2BF`) or default editor foreground
- `#ABB2BF` has high contrast (8.58) and appears too close to white
- New darker colors maintain readability while following "no white" philosophy
- Ensures consistency across all JavaScript/TypeScript/React file types

#### Color Philosophy Compliance
✅ All JSX/TSX elements now use appropriately dimmed colors
✅ No elements using bright/white foreground colors
✅ Maintains visual hierarchy without brightness fatigue

## [0.7.4] - 2026-02-14
### Enhanced Editor Highlights - Strong Green Emphasis
**Visual Enhancement**: Changed word highlight and AI suggestion colors to strong green for better visibility

#### Changed
- **Word Highlights**: When you edit text and VS Code highlights other occurrences
  - Dark theme: Changed from subtle gray to **strong emerald green** (`#10b981`)
  - Light theme: Changed to **dark green** (`#059669` / `#047857`)
  - Background: Semi-transparent green with varying opacity
  - Border: Solid green for strong emphasis

- **AI Inline Suggestions**: Ghost text and inline hints
  - Dark theme: Emerald green (`#10b981`) with transparency
  - Light theme: Dark emerald green (`#059669`) for contrast
  - `editorGhostText.*`: AI-generated code suggestions
  - `editorInlayHint.*`: Type hints and parameter names

- **Suggestion Widget**: Enhanced autocomplete selection
  - Dark theme: Green background (`#10b98133`) with green highlights
  - Light theme: Strong green selection (`#059669aa`) with dark green text
  - `editorSuggestWidget.highlightForeground`: Bright green for matched characters
  - `editorSuggestWidget.selectedBackground`: Green selection background

#### Added Properties (Dark Theme)
- `editor.wordHighlightTextBackground`
- `editor.wordHighlightTextBorder`
- `editorInlayHint.*` (6 properties)
- `editorGhostText.*` (2 properties)  
- `editorSuggestWidget.selectedForeground`
- `editorSuggestWidget.highlightForeground`
- `editorSuggestWidget.focusHighlightForeground`
- `editorSuggestWidget.selectedIconForeground`

#### Added Properties (Light Theme)
- All word highlight properties
- All inline hint properties
- All ghost text properties
- Enhanced suggestion widget properties

#### Why This Update?
The previous subtle gray highlights were hard to see when editing code with repetitive patterns. The new **strong green** color scheme:
- Makes it immediately obvious which text will be affected by your edit
- Provides clear visual feedback for AI suggestions
- Uses an energetic green that stands out without being distracting
- Maintains theme consistency while improving functionality
- Helps prevent accidental edits by making highlights more visible

**Color Philosophy**: Green = "Active/Editable" - a clear signal that these areas are being suggested for modification.

## [0.7.3] - 2026-02-14
### Shell Script - Additional Scopes Coverage
**Enhancement**: Added missing color rules for Shell Script variable assignments and base scope

#### Added
- **`variable.other.assignment.shell`**: Variables being assigned with bold coral/red color
  - Dark theme: `#E06C75` (coral bold)
  - Light theme: `#A8455D` (muted coral bold)
  - Example: `VAR=value` - VAR now properly highlighted

- **`meta.expression.assignment.shell`**: Assignment expression context
  - Dark theme: `#ABB2BF` (subdued gray)
  - Light theme: `#5D6978` (dark gray)
  - Provides proper context for assignment statements

- **`source.shell`**: Base Shell Script file scope
  - Dark theme: `#ABB2BF` (subdued gray)
  - Light theme: `#2D3845` (dark foreground)
  - Ensures all shell content has proper default coloring

#### Why This Update?
These scopes were previously using the default editor foreground color, which could appear too bright (close to white) in some contexts. By explicitly defining colors for these scopes, we ensure:
- Complete adherence to the "no white" theme philosophy
- Better visual distinction for variable assignments
- Consistent coloring across all shell script elements

## [0.7.2] - 2026-02-14
### Bug Fixes - White Color Removal
**Critical Fix**: Removed all white colors from theme following theme philosophy

#### Fixed
- **Shell Script Arguments**: Added specific color rules for `string.unquoted.argument.shell` and `meta.argument.shell`
  - Dark theme: `#ABB2BF` (subdued gray)
  - Light theme: `#5D6978` (dark gray)
  - Previously these were using the default editor color (`#C5CAD3`) which was too bright

- **Invalid/Error Tokens**: Replaced white (`#FFFFFF`) with appropriate error colors
  - `invalid.illegal`: Now uses `#F44747` (bright red)
  - `invalid.broken`: Now uses `#F44747` (bright red)
  - `invalid.deprecated`: Now uses `#E5C07B` (yellow/orange)
  - `invalid.unimplemented`: Now uses `#D19A66` (orange)

- **Debugger Keyword**: Changed from white to `#E5C07B` (yellow) with bold underline

- **Light Theme Status Bar**: Debug mode foreground changed from `#FFFFFF` to `#F5F7F9` (very light gray)

#### Theme Philosophy Compliance
The theme follows a strict rule: **No pure white colors allowed**. This update ensures complete compliance by:
- Using subdued grays for regular text elements
- Using vibrant colors (red, yellow, orange) for errors and warnings
- Maintaining visual comfort and reduced eye strain

All shell script elements now have properly dimmed colors while maintaining excellent readability and visual hierarchy.

## [0.7.1] - 2026-02-14
### Shell Script / Bash Support 🐚
**Major Enhancement**: Comprehensive Shell Script color optimization for DevOps and automation

#### Added
- **Shebang Highlighting**: `#!/bin/bash` with bold italic purple styling for immediate file type recognition
- **Control Structure Keywords**: `if`, `then`, `else`, `elif`, `fi`, `for`, `while`, `do`, `done`, `case`, `esac`, `until`, `in` with italic bold styling
- **Built-in Commands**: Special highlighting for shell built-ins (`echo`, `cd`, `ls`, `mkdir`, `rm`, etc.) in bold blue
- **Variable Syntax**: Comprehensive support for:
  - Normal variables: `$var`, `${var}`
  - Positional parameters: `$1`, `$2`, `$@`, `$*`
  - Special variables: `$$`, `$?`, `$!`
  - Variable punctuation with bold styling
- **String Handling**: Distinct colors for single and double quotes with bold punctuation
- **Operators & Redirections**:
  - Pipes: `|` in bold cyan
  - Redirections: `>`, `>>`, `<`, `2>&1` in bold cyan
  - Assignment: `=` in cyan bold
  - Comparisons: `-eq`, `-ne`, `-lt`, `-gt`, etc. in cyan bold
- **Function Definitions**: Custom function names in purple bold
- **Numeric Constants**: Orange/brown styling
- **Comments**: Subdued gray with italic for reduced visual noise
- **Escape Characters**: Special italic styling for `\n`, `\t`, etc.
- **Array Support**: Highlighting for array syntax

#### Enhanced
- Clear visual hierarchy between commands, variables, and strings
- Bold styling for important syntax elements (pipes, redirects, operators)
- Consistent color palette aligned with theme philosophy
- Both Dark and Light themes fully supported

#### Why This Update?
Shell scripts can be visually confusing with mixed variables, strings, commands, and operators. This update creates clear visual distinctions for:
- Commands vs. variables vs. strings
- Control flow structures
- Input/output redirections
- Variable declarations and expansions

The result is dramatically improved readability for DevOps, CI/CD scripts, and system automation.

## [0.7.0] - 2026-02-14
### React/JSX/TSX Optimization 🎉
**Major Enhancement**: Comprehensive React development support with dedicated color optimization

#### Added
- **React Component Tags**: Bold styling for both custom and native React components with distinct coral colors
  - Dark theme: `#E06C75` (coral)
  - Light theme: `#A8455D` (muted coral)
- **JSX/TSX Attributes (Props)**: Italic formatting with contrasting colors for clear visual separation
  - Dark theme: `#D19A66` (orange)
  - Light theme: `#8E6845` (brown)
- **React Hooks Support**: Special highlighting for hooks (useState, useEffect, etc.) with italic bold styling
  - Both themes: Purple tones with emphasis
- **JSX Expressions**: Distinctive bold colors for curly braces `{}` in JSX
  - Dark theme: `#5FB3B3` (cyan)
  - Light theme: `#3D8B8B` (teal)
- **Tag Punctuation**: Bold purple styling for `<`, `>`, `</` and `/>`
- **Fragment Tags**: Proper highlighting for `<>` and `</>`
- **JSDoc Comments**: Enhanced support for React component documentation
- **Class Component Keywords**: Special styling for `this` and `super` in React class components

#### Enhanced
- Complete visual separation between different React syntax elements
- Improved readability for complex JSX structures
- Better distinction between HTML tags and React components
- Optimized color contrast for both Dark and Light themes

#### Documentation
- Added dedicated "React Development Support" section in README
- Updated package.json description to highlight React optimization
- Added React-related keywords: react, jsx, tsx, react-theme

### Why This Update?
React developers often struggle with visual clarity in JSX/TSX files due to mixed JavaScript and HTML-like syntax. This update addresses that by creating clear visual distinctions between:
- Component tags vs. regular HTML elements
- Props vs. JavaScript variables
- JSX expressions vs. regular code
- Hooks vs. regular function calls

The result is significantly improved code readability and reduced cognitive load when working with React.

## [0.6.4] - 2026-02-14
### Light Theme - Major Enhancement (Macintosh Style)
- Complete harmonization with Dark theme: ported all 1000+ token color rules from dark theme
- All languages now fully supported: JavaScript, TypeScript, Python, Java, HTML/CSS, YAML, JSON, ENV, Prisma ORM, Markdown
- Macintosh-style aesthetic: soft grays and muted colors for comfortable extended use
- Terminal and panel backgrounds now use bluish tone (#DDE8F4) for visual contrast with editor

### Added to Light Theme
- Terminal ANSI colors (16 colors) - harmonious with Macintosh style
- Git decorations (7 states: added, modified, deleted, untracked, ignored, conflicting, submodule)
- Editor gutter with Git indicators (added/modified/deleted line markers)
- Debug toolbar with distinct orange status bar in debug mode
- Bracket matching with subtle blue highlighting
- Minimap gutter indicators for Git changes
- Diff editor colors for file comparison
- Indent guides with active guide highlighting
- Whitespace and ruler colors
- Line number colors with active line emphasis

### Light Theme Design Philosophy
- Inspired by classic Macintosh aesthetic: muted, professional, comfortable
- Neutral gray editor background (#F5F7F9) contrasts with bluish terminal (#DDE8F4)
- All colors carefully adapted from dark theme to maintain harmony
- Optimized for extended coding sessions with reduced brightness

## [0.6.3] - 2026-02-13
### Enhanced
- Dark theme refactored with "dimmed" aesthetic for reduced eye strain
- Improved text contrast: editor foreground (#C5CAD3), sidebar titles (#D0D5DD)
- Terminal and panel backgrounds now use wine-tinted tone (#1A0F15) for better visual separation from editor
- All UI borders updated to discrete but defined color (#2A3544)

### Added
- Comprehensive JavaScript/TypeScript scope coverage with 10+ new harmonious color rules
- Language constants (`this`, `super`, `true`, `false`, `null`, `undefined`) with italic style
- Control flow keywords (`if`, `else`, `switch`, `for`, `while`, `try`, `catch`) with purple tone and italic
- Async/await keywords with distinct purple variant and italic
- Spread/rest operator (`...`) with cyan color and bold style
- Function parameters with orange tone

### Fixed
- Added missing foreground colors to 3 scopes (punctuation.terminator, keyword.control.note, support.class.builtin)
- Improved overall theme consistency and color harmony

## [0.5.3] - 2025-01-24
- Fix color for tsx files at dark theme

## [0.5.0] - 2025-01-24
### Feature
- Added Light Theme version
- Renamed original theme to "Pavao Discreto Dark"
- Improved theme selection and accessibility
- Both themes optimized for minimal eye strain
- Enhanced support for all supported languages in Light theme
- Consistent color harmony between Dark and Light versions

## [0.2.98] - 2024-10-05
- fix comment block

## [0.2.95] - 2024-10-05
- Added ENV params
- Added Prisma ORM support
- fix deprecated elements patterns
- adjust some colors


## [0.2.9] - 2024-02-08
- FIX python theme
- FIX settings in VSCODE
- FIX color self in pyhton


## [0.2.2] - 2023-07-29
### Feature
- HTML TAG theme fix


## [0.2.1] - 2023-07-22
### Feature
- HTML theme fix


## [0.1.90] - 2023-03-26
### Feature
- Java theme added


## [0.1.67] - 2023-02-19
### Feature
- Python theme completed


## [0.1.50] - 2022-11-23
### Fix
- harmonized list tree color
- Typescript theme commpleted


## [0.1.11] - 2022-11-11
### Features
- Fixed color of selected tab
- change the basic color to blue


## [0.1.6] - 2022-06-11
### Features
- Added undeline in export function JS TS

## [0.1.4] - 2022-06-4
### Features
- Added support for UML files



## [0.1.1] - 2022-06-4
### Features
- Fix punctuation schema color in JS, TS
- Added intial schema for Python language


## [0.1.0] - 2022-06-4
### Features
- Finished Javascript and TypeScript schema

## [0.0.5] - 2022-06-4
### Features
- added logo design by Ruan Rodrigues (ru.1170@hotmail.com)

### Fix
- fixed contrast in exlorer
- fixed contrast in terminal
- fixed color contrast in scrollers


## [0.0.3] - 2022-05-6
### Fix
- fixed contrast in exlorer
- fixed contrast in terminal
- fixed color contrast in scrollers


## [0.0.3] - 2022-04-26
### Fix deployment


## [0.0.1] - 2022-04-25
### Initial release

