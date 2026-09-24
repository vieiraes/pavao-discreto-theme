#!/usr/bin/env node
// WCAG contrast audit for every theme listed in package.json.
//
//   node scripts/check-contrast.mjs            # summary
//   node scripts/check-contrast.mjs --verbose  # also list every UI pair
//
// Rules
// - Dark variants: every tokenColors foreground must reach 4.5:1 against
//   editor.background (error, exit code 1).
// - Light variants: comfort-first, WCAG not enforced. Tokens below 3:1 are
//   reported as warnings only.
// - UI text pairs (tabs, status bar, buttons, badges, ...) below 4.5:1 are
//   reported as warnings on every variant.
// Alpha colors are composited over their background before measuring.

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const verbose = process.argv.includes('--verbose');
const HEX = /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;

// [foreground key, background key] — background falls back to editor.background.
const UI_PAIRS = [
    ['editor.foreground', 'editor.background'],
    ['sideBar.foreground', 'sideBar.background'],
    ['statusBar.foreground', 'statusBar.background'],
    ['statusBar.debuggingForeground', 'statusBar.debuggingBackground'],
    ['titleBar.activeForeground', 'titleBar.activeBackground'],
    ['activityBar.foreground', 'activityBar.background'],
    ['activityBar.inactiveForeground', 'activityBar.background'],
    ['activityBarBadge.foreground', 'activityBarBadge.background'],
    ['tab.activeForeground', 'tab.activeBackground'],
    ['tab.inactiveForeground', 'tab.inactiveBackground'],
    ['button.foreground', 'button.background'],
    ['badge.foreground', 'badge.background'],
    ['input.foreground', 'input.background'],
    ['list.activeSelectionForeground', 'list.activeSelectionBackground'],
    ['editorSuggestWidget.selectedForeground', 'editorSuggestWidget.selectedBackground'],
    ['editorSuggestWidget.highlightForeground', 'editorSuggestWidget.background'],
    ['commandCenter.foreground', 'commandCenter.background'],
    ['statusBarItem.remoteForeground', 'statusBarItem.remoteBackground'],
    ['statusBarItem.errorForeground', 'statusBarItem.errorBackground'],
    ['statusBarItem.warningForeground', 'statusBarItem.warningBackground'],
    ['descriptionForeground', 'sideBar.background'],
    ['terminal.foreground', 'terminal.background'],
];

// Strip // and /* */ comments plus trailing commas (theme files are JSONC).
function parseJsonc(text) {
    let out = '';
    for (let i = 0, inString = false; i < text.length; i++) {
        const ch = text[i];
        if (inString) {
            out += ch;
            if (ch === '\\') out += text[++i];
            else if (ch === '"') inString = false;
        } else if (ch === '"') {
            inString = true;
            out += ch;
        } else if (text.startsWith('//', i)) {
            const end = text.indexOf('\n', i);
            i = end < 0 ? text.length : end - 1;
        } else if (text.startsWith('/*', i)) {
            const end = text.indexOf('*/', i);
            i = end < 0 ? text.length : end + 1;
        } else {
            out += ch;
        }
    }
    return JSON.parse(out.replace(/,(\s*[}\]])/g, '$1'));
}

function rgba(hex) {
    let h = hex.slice(1);
    if (h.length <= 4) h = [...h].map((c) => c + c).join('');
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return [n(0), n(2), n(4), h.length === 8 ? n(6) / 255 : 1];
}

function composite(fg, bg) {
    const [r, g, b, a] = rgba(fg);
    const [br, bgc, bb] = rgba(bg);
    return [r * a + br * (1 - a), g * a + bgc * (1 - a), b * a + bb * (1 - a)];
}

function luminance([r, g, b]) {
    const f = (c) => ((c /= 255) <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

function contrast(fg, bg, base) {
    const solidBg = composite(bg, base);
    const toHex = (c) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
    const l1 = luminance(composite(fg, toHex(solidBg)));
    const l2 = luminance(solidBg);
    return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
}

const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
let errors = 0;

for (const { label, path, uiTheme } of pkg.contributes.themes) {
    const theme = parseJsonc(readFileSync(join(root, path), 'utf8'));
    const dark = uiTheme !== 'vs';
    const colors = theme.colors;
    const bg = colors['editor.background'];
    const problems = [];
    const warnings = [];

    for (const [key, value] of Object.entries(colors)) {
        if (!HEX.test(value)) problems.push(`invalid color ${key}: ${value}`);
    }

    const seen = new Map();
    for (const rule of theme.tokenColors ?? []) {
        const fg = rule.settings?.foreground;
        if (!fg) continue;
        if (!HEX.test(fg)) {
            problems.push(`invalid token color ${fg} (${rule.scope})`);
            continue;
        }
        if (!seen.has(fg)) seen.set(fg, [contrast(fg, bg, bg), rule.scope]);
    }
    const tokenMin = dark ? 4.5 : 3;
    for (const [fg, [ratio, scope]] of seen) {
        if (ratio >= tokenMin) continue;
        const msg = `token ${fg} ${ratio.toFixed(2)}:1 < ${tokenMin} (${String(scope).slice(0, 60)})`;
        (dark ? problems : warnings).push(msg);
    }

    const ratios = [...seen.values()].map(([r]) => r);
    for (const [fgKey, bgKey] of UI_PAIRS) {
        const fg = colors[fgKey];
        if (!fg) continue;
        const pairBg = colors[bgKey] ?? bg;
        const ratio = contrast(fg, pairBg, bg);
        const line = `${fgKey} ${fg} on ${pairBg} ${ratio.toFixed(2)}:1`;
        if (ratio < 4.5) warnings.push(`ui ${line}`);
        else if (verbose) console.log(`    ok ${line}`);
    }

    errors += problems.length;
    const status = problems.length ? 'FAIL' : 'PASS';
    console.log(
        `${status}  ${label}  (${ratios.length} token colors, ` +
            `${Math.min(...ratios).toFixed(2)}–${Math.max(...ratios).toFixed(2)}:1)`,
    );
    for (const p of problems) console.log(`   ✗ ${p}`);
    for (const w of warnings) console.log(`   ! ${w}`);
}

process.exit(errors ? 1 : 0);
