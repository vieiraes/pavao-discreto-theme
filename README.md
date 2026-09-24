<p align="center">
  <img src="https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/logo.png" width="128" alt="Pavão Discreto logo">
</p>

<h1 align="center">Pavão Discreto</h1>

<p align="center">
  A VS Code theme built for long sessions, with controlled contrast, muted surfaces and careful syntax colors.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto"><img src="https://img.shields.io/visual-studio-marketplace/v/BrunoVieira.pavao-discreto?style=flat-square&label=marketplace&color=0F1520" alt="Marketplace version"></a>
  <a href="https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto"><img src="https://img.shields.io/visual-studio-marketplace/i/BrunoVieira.pavao-discreto?style=flat-square&color=0F1520" alt="Installs"></a>
  <img src="https://img.shields.io/badge/dark%20themes-WCAG%20AA-5FB3B3?style=flat-square" alt="Dark themes meet WCAG AA">
  <a href="LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-8BC34A?style=flat-square" alt="MIT license"></a>
</p>

---

## Variants

Four variants that follow one rule: comfort first. None of them uses pure white or pure black for the editor.

| Variant | Type | Editor | Accent | Character |
|---|---|---|---|---|
| **Pavao Discreto Dark** | dark | `#0F1520` | `#8BC34A` / `#5FB3B3` | The original. Deep blue-gray, green and teal accents. |
| **Pavao Discreto Light** | light | `#F3F1EC` | `#4B7285` / `#047857` | Warm off-white with low glare and a dark terminal. |
| **Pavao Discreto Antigravity Dark** | dark | `#0F1520` | `#4DC4FF` | Dimmed blue-gray with a cool blue accent. |
| **Pavao Discreto Antigravity Light** | light | `#F8F9FA` | `#1967d2` | Clean light theme in the style of Material design. |

### Dark
![Pavão Discreto Dark](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/screenshots/dark.png)

### Light
![Pavão Discreto Light](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/screenshots/light.png)

### Antigravity Dark
![Pavão Discreto Antigravity Dark](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/screenshots/antigravity-dark.png)

### Antigravity Light
![Pavão Discreto Antigravity Light](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/screenshots/antigravity-light.png)

## Install

1. Install from the [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto), or run `ext install BrunoVieira.pavao-discreto` from Quick Open (`Ctrl+P`).
2. Press `Ctrl+K Ctrl+T` (`Cmd+K Cmd+T` on macOS) and pick one of the four **Pavao Discreto** variants.

## Highlights

- **Readable in the dark.** In both dark variants every syntax color reaches at least 4.5:1 against the editor background (WCAG AA). A script checks this on every change.
- **Gentle in the light.** The light variants use warm or neutral surfaces instead of bright white and keep contrast moderate to reduce glare.
- **Complete UI coverage.** Colors are set for the editor, terminal (all 16 ANSI colors), git decorations, diff editor, bracket pairs, Copilot chat, inline edits, notifications, charts and more.
- **Tuned languages.** JavaScript, TypeScript, React (JSX/TSX), Python, Shell/Bash, Java, JSON, YAML, Markdown, `.env`/INI, Prisma, DBML and UML have their own rules. HTML/CSS is covered, with fewer dedicated rules.

## Recommended settings

```jsonc
{
  "editor.fontFamily": "'JetBrains Mono', 'Droid Sans Mono', monospace",
  "editor.fontSize": 16,
  "editor.lineHeight": 30,
  "terminal.integrated.fontSize": 16,
  "workbench.iconTheme": "macish-icons"
}
```

- Font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Icons: [Macish Icons](https://marketplace.visualstudio.com/items?itemName=jo-te.macish-icons)

Your monitor's night or low-blue-light mode works well with the dark variants. Colors can look slightly different on macOS because of display color management.

## Accessibility

Contrast is measured with the WCAG 2.1 formula. Colors with transparency are blended over their background before measuring.

| Variant | Syntax colors | Lowest ratio | Rule |
|---|---|---|---|
| Dark | 45 | 4.56:1 | ≥ 4.5:1 (enforced) |
| Antigravity Dark | 12 | 4.88:1 | ≥ 4.5:1 (enforced) |
| Light | 28 | 3.10:1 | ≥ 3:1 (comfort target) |
| Antigravity Light | 19 | 3.04:1 | ≥ 3:1 (comfort target) |

The light variants lower contrast on purpose to reduce glare. They do not claim WCAG AA.

## Development

There is no build step. VS Code reads the theme files in [themes/](themes/) directly. They are JSONC, so comments are allowed.

```bash
npm run check     # contrast audit for all four variants (fails if a dark variant drops below 4.5:1)
npm run package   # build the .vsix with @vscode/vsce
```

Press `F5` in VS Code to open a development window with the themes loaded.

When you change a color:

1. Edit the variant in `themes/`. If you change language support, update all variants.
2. Run `npm run check`.
3. Write down the old and new hex values and the contrast ratio in [CHANGELOG.md](CHANGELOG.md).

## Feedback

Report bugs and suggestions in [GitHub Issues](https://github.com/vieiraes/pavao-discreto-theme/issues).

## Credits

- **Development:** Bruno Vieira ([vieira.es@gmail.com](mailto:vieira.es@gmail.com))
- **Original logo and art:** Ruan Rodrigues ([ru.1170@hotmail.com](mailto:ru.1170@hotmail.com)). The original is kept in [storage/legacy/](storage/legacy/).

## License

[MIT](LICENSE.md) © Bruno Vieira
