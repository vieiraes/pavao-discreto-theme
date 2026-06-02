# Changelog
All notable changes to this project will be documented in this file.

## [0.7.27] - 2026-06-02
### Changed — Antigravity Dark readability hardening
- Improved token readability in `Pavao Discreto Antigravity Dark` after contrast audit against `editor.background` `#0F1520`.
- Replaced low-contrast token foregrounds:
  - `keyword.other.debugger.js`: `#000000` → `#FF616E`
  - `support.function.magic.python`: `#8A2531` → `#E06C75`
  - `variable.key.dotenv` / `keyword.other.definition.ini`: `#8B4E9C` → `#C678DD`
- Result: token foreground audit now reports `0` colors below `4.5:1` in the Antigravity Dark variant.

## [0.7.26] - 2026-06-01
### Added — Pavao Discreto Antigravity Dark
- Added a new dark variant (`Pavao Discreto Antigravity Dark`) converted from the Antigravity Light palette.
- Dark UI surfaces now use a dimmed blue-gray system for the editor, side bar, tabs, panels, command center, chat, and session areas.
- The dark variant keeps the Antigravity identity while matching the rest of the project's low-glare dark aesthetic.

## [0.7.25] - 2026-05-30
### Added — New Pavao Discreto Antigravity Light Theme
- Added a brand new light theme variant (`Pavao Discreto Antigravity Light`) inspired by Google's clean, minimalist, and tech-forward design language.
- Replaced the warm off-white tones with Material/Google design system palette:
  - Editor background: `#F8F9FA` (Google Gray 50)
  - Sidebar background: `#EDF2FA` (Google Workspace light blue-gray tint)
  - Primary accents: `#1a73e8` (Google Blue)
  - Diff and validation elements: `#137333` (Google Green) / `#d93025` (Google Red)
- Mapped token syntax colors to Google-inspired highlights:
  - Keywords, storage, and functions styled in vibrant Google Blue
  - Strings and attributes in Google Green
  - Tags and HTML properties in Google Red
  - Constants and numbers in Amber/Brown

## [0.7.24] - 2026-05-26
### Changed — AI chat and session contrast tuning in both themes

#### Light theme — stronger wine/lilac identity for user conversation surfaces
- `chat.requestBackground`: `#EEE1EA` → `#E7D3E0`
- `chat.requestBubbleBackground`: `#F3E3EFCC` → `#EAD7E3CC`
- `chat.requestBubbleHoverBackground`: `#EAD7E3E6` → `#DFC7D6E6`
- `inlineChat.background`: `#E8D7E4` → `#E1CDDA`
- `inlineChatInput.background`: `#F5E8F1` → `#F0DFEA`
- Kept wine/lilac borders and accents so the user's own messages are easier to identify without relying on hover

#### Dark theme — AI surfaces aligned to the Command Center electric blue accent
- Replaced temporary lilac/green chat/session accents with the dark theme's quick-access blue family: `#7DD8FF`, `#A0E8FF`, `#4A98D8`
- `chat.requestBackground`: `#141820` → `#1D2235`
- `chat.requestBubbleHoverBackground`: `#1D2235E6` → `#27314AE6`
- `inlineChat.background`: `#141820` → `#1D2235`
- `inlineChatInput.background`: `#0F141C` → `#182131`
- `agentSessionReadIndicator.foreground` and `agentSessionSelectedBadge.border` now use `#7DD8FF`
- Result: chat and session panels separate more clearly from the editor background even before hover

## [0.7.23] - 2026-05-25
### Changed — Token contrast fix, Command Center identity colors, dark terminal in light theme

#### Light theme — token color contrast (against new warm bg `#F3F1EC`)
- `#3D8B8B` → `#1F6B6B`: teal operators/brackets/symbols — 3.53:1 → 5.51:1
- `#A07030` → `#8C5C14`: orange numbers/git modified — 3.83:1 → 5.09:1
- `#A07548` → `#845830`: warm amber constants/CSS — 3.62:1 → 5.44:1
- `#9A6B3A` → `#7A5220`: meta-block amber — 4.10:1 → 6.09:1
- `#8E6845` → `#725235`: brown variables/properties — 4.41:1 → 6.26:1
- `#35825A` → `#246A48`: secondary green strings/HTML — 4.14:1 → 5.76:1
- `#6B7480` → `#545E6A`: secondary UI text (tabs, breadcrumbs, titlebar) — 4.19:1 → 5.84:1
- `editorLineNumber.foreground`: `#9DA5B460` (alpha, ~1.5:1) → `#9097A2` solid — 2.61:1
- `editorLineNumber.activeForeground`: `#6D94A6B0` (alpha, ~2.0:1) → `#4A7088` solid — 4.69:1

#### Both themes — Command Center identity (project name in title bar)
- Added full `commandCenter.*` block to both themes
- **Light**: `commandCenter.foreground` `#8B0000` (dark red, 7.5:1) — stands out against warm titlebar
- **Light**: `commandCenter.activeBackground` `#D0C9C0`, `commandCenter.border` `#C8C3BB`
- **Dark**: `commandCenter.foreground` `#7DD8FF` (electric blue, 11.1:1) — pops against deep dark titlebar
- **Dark**: `commandCenter.background` `#141820`, `commandCenter.activeBackground` `#1D2235`

#### Light theme — dark terminal panel for instant visual differentiation
- `terminal.background`: `#ECE7DE` → `#2A2218` (warm dark charcoal)
- `terminal.foreground`: `#2D3845` → `#D0C8B8` (warm light beige)
- `terminalCursor.foreground`: `#3A6A8A` → `#C8A038` (amber gold cursor)
- Added `terminalCursor.background`: `#1A1510`
- Full ANSI palette replaced with vivid dark-optimized set:
  - `ansiRed` `#E86880`, `ansiGreen` `#42B872`, `ansiYellow` `#C89028`, `ansiBlue` `#4A98D8`
  - `ansiMagenta` `#B880D0`, `ansiCyan` `#36A8A0`, `ansiWhite` `#A8B0BC`
  - Bright variants: Red `#F07888`, Green `#60D090`, Yellow `#E0B040`, Blue `#68C0F8`
  - Bright variants: Magenta `#C898E8`, Cyan `#50D8D0`, White `#D8E0E8`

## [0.7.22] - 2026-05-25
### Added — Massive UI color coverage expansion (both themes)
- **Git decorations**: `addedResourceForeground`, `modifiedResourceForeground`, `deletedResourceForeground`, `untrackedResourceForeground`, `ignoredResourceForeground`, `conflictingResourceForeground`, `stageModifiedResourceForeground`, `stageDeletedResourceForeground`
- **Diff editor**: inserted/removed/unmodified line backgrounds, gutter indicators, overview ruler, diagonal fill, border
- **Bracket pair colorization**: 6 foreground colors + matching pair guides using palette hues
- **Overview ruler**: 13 keys (add/delete/modified/error/warning/info/merge/selection/bracket/word highlight/find)
- **Chat & Inline Chat** (Copilot NES): request/response backgrounds, edit highlight, applied change colors
- **Sticky scroll**: themed for editor, sidebar, panel, terminal, and peek view
- **Agent session**: distinct background for AI session panels
- **Debug icons**: breakpoint, conditional, log point, function, stack frame icons
- **Terminal extras**: command decoration (success/error/default), overview ruler, tab active/inactive border
- **Symbol icons**: 34 types (array, boolean, class, constructor, enum, event, field, file, folder, function, interface, key, method, module, namespace, null, number, object, operator, package, property, reference, snippet, string, struct, text, typeParameter, unit, value, variable, color, constant, enumMember, ruler)
- **Testing icons**: passed, failed, skipped, errored, queued, unset
- **Activity bar**: active/inactive focus border, active background
- **Multi-cursor & folding**: secondary cursor border, fold background
- **Markdown alerts**: Note, Tip, Important, Warning, Caution — border and title colors
- **Notifications & banner**: background, foreground, border, button colors
- **SCM graph**: history item colors, remote/base variants, incoming/outgoing arrows
- **Charts**: chart line colors (1–6)
- **Keybinding labels**: background, foreground, border, modifier foreground
- **Status bar**: error/warning item background and foreground

### Changed — Light theme refinement for lower visual fatigue
- **Warm off-white work surfaces**: `editor.background` `#F5F7F9` → `#F3F1EC`; `sideBar.background` `#E8EEF2` → `#ECE8E1`; `panel.background` `#DDE8F4` → `#E9E4DB`; `terminal.background` `#DDE8F4` → `#ECE7DE`
- **Softer structural contrast**: `editor.selectionBackground` `#C3D0D8` → `#D9D4CA`; `editor.lineHighlightBackground` `#E8EEF2` → `#EFEAE2`; `tab.activeBackground` `#C3D0D880` → `#E4DED4`; `list.activeSelectionBackground` `#D0DBE2` → `#DDD8CF`
- **Less washed-out secondary text**: alpha-based labels like `#2D384580` were replaced by solid muted neutrals such as `#6B7480` for inactive tabs, titlebar, breadcrumbs, panel titles, and activity bar states
- **AI workflow contrast kept, but harmonized**: chat, inline chat, inline edit, sticky scroll, notifications, and keybinding surfaces were shifted from cool blue-grays toward warmer neutrals so they stay readable without looking harsher than the editor canvas
- **Terminal readability preserved**: higher-contrast ANSI updates were kept, while terminal chrome moved to the warmer surface palette to better match the rest of the light theme
- **Word/string noise reduced**: word highlights moved from rose-red overlays to muted amber, and common string tokens no longer render in bold to reduce visual vibration during long sessions

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
- Updated word highlight colors to soft dimmed red tones for better visual comfort
  - Dark Theme: `#d48787` (soft gray-red)
  - Light Theme: `#d77878` (soft rose-red)
- Removed borders from word highlights for cleaner, less distracting appearance
- Improved `editor.wordHighlight*` properties for smoother reading experience

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
- Complete Light theme enhancement with a warm low-glare aesthetic
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

