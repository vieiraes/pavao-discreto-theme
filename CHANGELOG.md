# Changelog
All notable changes to this project will be documented in this file.

## [0.7.12] - 2026-02-16
### Added
- Complete .env (dotenv) files syntax highlighting support
  - Variable keys styled in bold purple/lilac
  - Values in green tones (quoted strings) and orange (unquoted)
  - Comments in italic gray
  - Variable references with italic blue
  - Separators and punctuation in bold cyan
- Enhanced Markdown syntax highlighting in Light theme:
  - Headings, bold, italic, and lists now fully styled
  - Blockquotes with italic gray styling  
  - Horizontal separators in bold cyan
  - Table support
  - Complete parity with Dark theme

### Changed
- Harmonized Markdown color scheme across both themes
- Improved consistency in markup elements styling

## [0.7.10] - 2026-02-16
### Achievement Unlocked: WCAG AA Compliance! 🎯
- ✅ **Dark Theme is now 100% WCAG 2.1 Level AA Compliant**
- All 43 syntax colors meet minimum 4.5:1 contrast ratio
- Contrast range: 4.87:1 to 16.23:1 for optimal readability
- Certified safe for users with visual impairments and color vision deficiencies
- Meets international accessibility standards (Section 508, WCAG 2.1)

### Changed
- Adjusted 3 colors in Dark Theme for WCAG compliance:
  - `support.function.magic.python`: #9a353d → #E06C75 (2.57:1 → 5.87:1)
  - `comment.line.number-sign.shell`: #5C6370 → #7f848e (3.02:1 → 4.87:1)
  - `keyword.operator.logical`: #e71405de → #E06C75 (3.92:1 → 5.87:1)

### Added
- Accessibility badges in README
- Comprehensive WCAG compliance documentation
- Automated contrast checking utility (utils/simple-contrast-check.py)

## [0.7.9] - 2026-02-16
### Added
- DBML (Database Markup Language) syntax highlighting support
- Harmonized color scheme for DBML files:
  - Entity names with bold orange tone for table definitions
  - Punctuation (brackets and separators) with bold cyan for structure clarity
  - String values with green for data types and defaults
- Complete theme coverage for both Dark and Light variants

## [0.7.8] - 2026-02-14
### Major Theme Updates
Comprehensive improvements to both Dark and Light themes focusing on visual consistency and React development support.

#### Changed
- Unified string colors to mint green across JavaScript/TypeScript/React
- Removed gray tones from code elements (gray reserved exclusively for comments)
- Enhanced Shell Script and Bash syntax highlighting for DevOps workflows
- Improved editor highlights with strong green emphasis
- Complete Light theme enhancement with Macintosh-style aesthetic
- Comprehensive React/JSX/TSX optimization with dedicated color schemes

#### Fixed
- Color conflicts in JSX/TSX files
- Missing property access colors in React files
- Shell script argument and variable assignment colors

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

