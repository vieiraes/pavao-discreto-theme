![Pavão Discreto Logo](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/logo-pavao-discreto.png)

# Pavão Discreto: Your Essential Theme for Coding

## Preview

### Dark Theme - Dimmed Aesthetic
![Dark Theme Preview](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/pd_dark.jpg)

### Light Theme - Macintosh Style
![Light Theme Preview](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/pd_light.jpg)

---

Discover the harmonious balance of modern aesthetics and visual comfort with Pavão Discreto. Now featuring both Dark and Light themes, this meticulously crafted theme enhances contrast while minimizing eye strain, making it an ideal choice for prolonged coding sessions. By providing flexibility in theme selection and utilizing finely-tuned color schemes, this theme ensures a smooth and pleasurable experience regardless of your lighting preference.

**Download**: [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto)

## Key Features
- **Two Carefully Crafted Themes**: Choose between Dark and Light versions, both optimized for visual comfort
  - **Dark Theme**: Dimmed aesthetic with wine-tinted terminal for reduced eye strain
  - **Light Theme**: Macintosh-style with soft grays, muted colors, and bluish terminal - professional and comfortable for extended use
- **Optimized Visual Contrast**: Reduces eye strain in both themes, allowing for comfortable extended coding periods
- **Wide Language Support**: Tailored color schemes for multiple programming languages in both themes (1000+ token color rules)
- **Complete Git Integration**: Visual indicators for file status, line changes, and diff viewing in both themes
- **Advanced Editor Features**: Line numbers, bracket matching, indent guides, debug mode, and minimap indicators
- **Customizable Settings**: Recommended settings provided for optimal experience
- **Individual File Type Customization**: Each file extension was worked on individually to ensure distinct visual differentiation in both themes. This means you can easily identify the type of file you are working with at a glance—rather than just creating generic themes, we focus on delivering quality and clarity for each file format.

## Theme Selection
To switch between themes:
1. Press `Ctrl+K Ctrl+T` (Windows/Linux) or `Cmd+K Cmd+T` (Mac)
2. Select either "Pavao Discreto Dark" or "Pavao Discreto Light"
3. Or use the Command Palette (`Ctrl+Shift+P`) and search for "Color Theme"

## Installation
To install Pavão Discreto, visit the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=BrunoVieira.pavao-discreto) and click 'Install'. Follow the instructions to integrate it into your VS Code environment.

## Recommended Settings
Enhance your coding experience by adjusting these settings in VS Code:

```json
{
  "editor.lineHeight": 30,
  "editor.fontFamily": "'JetBrains Mono', 'Droid Sans Mono', 'monospace', monospace",
  "editor.fontSize": 16,
  "terminal.integrated.fontFamily": "monospace",
  "terminal.integrated.fontSize": 18,
}
```

These settings enhance readability and comfort. For the best experience, use with the `Jet Brains Mono` font. Download it [here](https://www.jetbrains.com/lp/mono/).

## Recommended Icon Theme
For the best visual experience, we recommend using the **Macish Icons** theme alongside Pavão Discreto. This icon theme provides a clean and modern look that perfectly complements our color scheme.

Install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jo-te.macish-icons).

To enable it:
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "File Icon Theme"
3. Select "Macish Icons"

## Language Compatibility
- JavaScript ✨ 100% ✨
- TypeScript ✨ 100% ✨
- Python ✨ 100% ✨
- UML ✨ 100% ✨
- Java ✨ 100% ✨
- YAML  ✨ 100% ✨
- JSON ✨ 100% ✨
- ENV ✨ 100% ✨
- Prisma ORM ✨ 100% ✨
- Markdown ✨ 100% ✨
- HTML/CSS ✨ 80% ✨
- **React/JSX/TSX** ✨ **100%** ✨
- **Shell Script / Bash** ✨ **100%** ✨

## React Development Support
Pavão Discreto now features **dedicated color optimization for React/JSX/TSX** development! We've added comprehensive syntax highlighting rules specifically designed to improve code readability when working with React:

### What's Optimized:
- **Component Tags**: Both custom and native React components have distinct, bold styling for easy identification
- **JSX/TSX Attributes**: Props are styled with italic formatting and contrasting colors for clear visual separation
- **React Hooks**: Special highlighting for hooks (useState, useEffect, etc.) with italic bold styling
- **JSX Expressions**: Curly braces `{}` in JSX have bold, distinctive colors for better visual parsing
- **Fragment Tags**: `<>` and `</>` are properly highlighted
- **JSDoc Comments**: Enhanced support for React component documentation
- **this/super Keywords**: Special styling for class component keywords

### Color Differentiation:
- **Dark Theme**: 
  - Component tags: `#E06C75` (coral)
  - Props: `#D19A66` (orange)
  - Tag punctuation: `#C678DDd3` (purple)
  - JSX expressions: `#5FB3B3` (cyan)
  - Hooks: `#C678DDd3` (purple italic bold)

- **Light Theme**: 
  - Component tags: `#A8455D` (muted coral)
  - Props: `#8E6845` (brown)
  - Tag punctuation: `#8D5A9F` (purple)
  - JSX expressions: `#3D8B8B` (teal)
  - Hooks: `#8D5A9F` (purple italic bold)

This specialized support makes React code significantly more readable by creating clear visual distinctions between different syntax elements, reducing confusion and improving your development workflow.

## Shell Script / Bash Support
Pavão Discreto now features **comprehensive Shell Script optimization** for improved DevOps and automation workflow!

### What's Optimized:
- **Shebang**: `#!/bin/bash` highlighted with bold italic purple styling
- **Keywords**: Control structures (`if`, `then`, `else`, `fi`, `for`, `while`, `case`, etc.) with italic bold purple
- **Built-in Commands**: `echo`, `cd`, `ls`, `mkdir`, etc. in bold blue
- **Variables**: `$var`, `${var}`, `$1`, `$@` in coral/red with bold punctuation
- **Strings**: Both single and double quotes in green
- **Pipes & Redirections**: `|`, `>`, `>>`, `<` in bold cyan
- **Operators**: Assignment (`=`) and comparison (`-eq`, `-ne`, etc.) in cyan
- **Functions**: Custom function names in purple bold
- **Comments**: Subdued gray with italic styling
- **Numbers**: Orange/brown colors for constants
- **Escape Characters**: Special highlighting with italic styling

### Color Scheme:
**Dark Theme**:
- Keywords: `#C678DDd3` (purple)
- Built-ins: `#61AFEF` (blue)
- Variables: `#E06C75` (coral)
- Strings: `#5FCC88D9` (mint green with dimmed transparency)
- Pipes/Redirects: `#5FB3B3` (cyan)

**Light Theme**:
- Keywords: `#8D5A9F` (purple)
- Built-ins: `#3A6A93` (blue)
- Variables: `#A8455D` (muted coral)
- Strings: `#2B9B6A` (mint green, bold)
- Pipes/Redirects: `#3D8B8B` (teal)

Perfect for DevOps engineers, system administrators, and developers working with automation scripts!

## Theme Philosophy
Pavão Discreto is crafted with a focus on creating a comfortable coding experience, particularly for users with visual impairments. Both our Dark and Light themes avoid pure white backgrounds and employ carefully selected color schemes to significantly reduce eye strain. The color schemes have been thoughtfully curated to ensure optimal contrast and readability in any lighting condition.

**Dark Theme**: Features a dimmed aesthetic with discrete borders and wine-tinted terminal/panel backgrounds, creating visual separation while maintaining comfort.

**Light Theme**: Inspired by the classic Macintosh aesthetic, featuring soft grays, muted professional colors, and a bluish terminal background. The neutral gray editor (#F5F7F9) contrasts beautifully with the bluish terminal (#DDE8F4), providing clear visual areas without brightness fatigue. Over 1200 carefully adapted color rules ensure every language looks harmonious and professional.

We encourage users with monitors that support eye-safe functionality to enable it for an enhanced experience. Each file type features distinct color combinations for easy visual identification. We dedicated considerable effort to ensure that every extension was meticulously designed, allowing you to quickly discern the type of file you are working with at a glance.

As a personal user of this theme, I have dedicated significant time and effort to its development to alleviate my own eye strain. I invite you to compare your comfort level before and after using Pavão Discreto. Furthermore, I continuously seek to adapt the theme for improved functionality.

Please note that some macOS users have reported color adaptation issues; I apologize for any inconvenience this may cause, and I appreciate your understanding. Your enjoyment and feedback are invaluable—don't forget to leave a positive review!

## Screenshots
Experience Pavão Discreto in action:

### Dark Theme Preview
Get a complete view of the Dark theme workspace:

![Pavao Discreto Dark Theme Full Preview](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/pd_dark.jpg)

### Light Theme Preview (Macintosh Style)
Get a complete view of the Light theme workspace:

![Pavao Discreto Light Theme Full Preview](https://raw.githubusercontent.com/vieiraes/pavao-discreto-theme/master/storage/pd_light.jpg)

## Feedback and Contributions
Your feedback is invaluable to us. Report issues and suggest improvements on our [GitHub repository](https://github.com/vieiraes/pavao-discreto-theme/issues).

## The Team
- **Development**: Bruno Vieira ([vieira.es@gmail.com](mailto:vieira.es@gmail.com))
- **Art and Logo**: Ruan Rodrigues ([ru.1170@hotmail.com](mailto:ru.1170@hotmail.com))

## License
Pavão Discreto is licensed under the [MIT License]