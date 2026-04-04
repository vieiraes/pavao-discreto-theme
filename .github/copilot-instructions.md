# Copilot Instructions — Pavão Discreto Theme

## Project Overview

This is a **VS Code color theme extension** with two variants:
- **Dark** (`themes/pavao-discreto-color-theme.json`) — WCAG 2.1 Level AA certified (100% compliant, contrast ≥ 4.5:1)
- **Light** (`themes/pavao-discreto-light-theme.json`) — Macintosh-inspired aesthetic; **WCAG compliance is NOT required** for this variant

There are no build steps. The theme files are consumed directly by VS Code.

## Git Workflow

**Never commit or push automatically.** Always wait for an explicit instruction from the user before running `git commit` or `git push`.

Before every commit:
1. Bump the version in `package.json` (follow semver)
2. Update `CHANGELOG.md` with the changes
3. Run `git commit` only after the user says to

Never add `Co-authored-by: Copilot` or any AI assistant co-author trailer to commit messages.

## Packaging

```bash
# Install vsce if not available
npm install -g @vscode/vsce

# Package the extension
vsce package
# Produces a .vsix file in the project root
```

The `.vscodeignore` excludes `utils/`, `dist/`, `.vscode/`, and all `.vsix` files from the published package.

## Accessibility — WCAG Contrast Rules

**Dark theme only**: every `"foreground"` color in `tokenColors` must achieve ≥ 4.5:1 contrast ratio against the editor background `#0F1520`. Run the checker after every color change to the dark theme.

**Light theme**: WCAG contrast is **not enforced**. The light theme follows a Macintosh-inspired aesthetic — preserve the warm, muted Mac color palette even if some ratios fall below 4.5:1.

Run the contrast checker from the project root:

```bash
python3 utils/contrast-checker.py
# or the simpler version:
python3 utils/simple-contrast-check.py
```

Both scripts read `themes/*.json` relative to the working directory. Run them from the project root.

## Theme File Structure

Both JSON files follow `$schema: "vscode://schemas/color-theme"` and have two main sections:

1. **`colors`** — UI chrome (editor, sidebar, activity bar, tabs, git decorations, widgets, etc.)
2. **`tokenColors`** — Syntax highlighting rules; each entry has `scope` (string or array) and `settings.foreground` / `settings.fontStyle`

Colors are hex strings with optional alpha: `#RRGGBB` or `#RRGGBBAA`.

## Key Conventions

- **Scope targeting**: use granular TextMate scopes (e.g., `support.function.magic.python`) for language-specific overrides; broader scopes (e.g., `keyword`) apply globally.
- **Both themes must stay in sync for language support**: when adding or updating token rules for a language, apply equivalent changes to both dark and light themes.
- **Reference palette**: `utils/colors.json` lists the canonical color values used across the theme. Update it when introducing new colors.
- **Alpha-channel transparency**: many colors encode transparency in the last two hex digits (e.g., `#8965d799`). Strip the alpha when running WCAG checks — the utility scripts handle this automatically.
- **CHANGELOG**: Follow keep-a-changelog format. Document every color change with the old and new hex value and the resulting contrast ratio (see existing entries for examples).

## Language Priority

The theme has dedicated, carefully tuned rules for: JavaScript, TypeScript, React/JSX/TSX, Python, Shell/Bash, Prisma ORM, DBML, JSON, YAML, Markdown, ENV files, Java, UML. When editing token rules, check whether a scope already exists before adding a new one.

## Publisher & Marketplace

- Publisher ID: `BrunoVieira`
- Marketplace page: `https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto`
- Issues: `https://github.com/vieiraes/pavao-discreto-theme/issues`
