# Copilot Instructions — Pavão Discreto Theme

## Project Overview

This is a **VS Code color theme extension** with four variants:
- **Dark** (`themes/pavao-discreto-color-theme.json`): WCAG 2.1 AA, every token foreground ≥ 4.5:1 against `#0F1520`
- **Light** (`themes/pavao-discreto-light-theme.json`): warm low-glare, comfort-first; **WCAG is NOT required** (target ≥ 3:1)
- **Antigravity Dark** (`themes/pavao-discreto-antigravity-dark-theme.json`): WCAG 2.1 AA, same rule as Dark
- **Antigravity Light** (`themes/pavao-discreto-antigravity-light-theme.json`): clean Material-style light; WCAG not required (target ≥ 3:1)

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

The `.vscodeignore` excludes `.github/`, `scripts/`, `.vscode/`, `storage/legacy/`, preview screenshots and all `.vsix` files from the published package.

## Accessibility — WCAG Contrast Rules

**Dark variants** (Dark, Antigravity Dark): every `"foreground"` in `tokenColors` must reach ≥ 4.5:1 against `editor.background` `#0F1520`.

**Light variants**: WCAG is **not enforced**. Keep the low-glare palette even when some ratios fall below 4.5:1. Avoid bright whites, icy blue surfaces and oversaturated accents. Aim for token colors ≥ 3:1.

Run the checker from the project root after every color change:

```bash
npm run check          # node scripts/check-contrast.mjs
npm run check -- --verbose
```

It parses JSONC, blends alpha colors over their background, exits 1 when a dark variant breaks the 4.5:1 rule, and prints warnings for light tokens below 3:1 and UI text pairs below 4.5:1.

## Theme File Structure

All theme files are JSONC (comments allowed) and follow `$schema: "vscode://schemas/color-theme"` and have two main sections:

1. **`colors`** — UI chrome (editor, sidebar, activity bar, tabs, git decorations, widgets, etc.)
2. **`tokenColors`** — Syntax highlighting rules; each entry has `scope` (string or array) and `settings.foreground` / `settings.fontStyle`

Colors are hex strings with optional alpha: `#RRGGBB` or `#RRGGBBAA`.

## Key Conventions

- **Scope targeting**: use granular TextMate scopes (e.g., `support.function.magic.python`) for language-specific overrides; broader scopes (e.g., `keyword`) apply globally.
- **All variants must stay in sync for language support**: when adding or updating token rules for a language, apply equivalent changes to every variant.
- **Alpha-channel transparency**: many colors encode transparency in the last two hex digits (e.g., `#8965d799`). Strip the alpha when running WCAG checks — the utility scripts handle this automatically.
- **CHANGELOG**: Follow keep-a-changelog format. Document every color change with the old and new hex value and the resulting contrast ratio (see existing entries for examples).

## Language Priority

The theme has dedicated, carefully tuned rules for: JavaScript, TypeScript, React/JSX/TSX, Python, Shell/Bash, Prisma ORM, DBML, JSON, YAML, Markdown, ENV files, Java, UML. When editing token rules, check whether a scope already exists before adding a new one.

## Publisher & Marketplace

- Publisher ID: `BrunoVieira`
- Marketplace page: `https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto`
- Issues: `https://github.com/vieiraes/pavao-discreto-theme/issues`
