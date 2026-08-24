# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a VuePress v1 resume site. The content is authored in Markdown under `resume/`, and the site is rendered with a custom VuePress theme in `resume/.vuepress/theme/`.

Two resume entrypoints exist:
- `resume/README.md` is the primary resume content.
- `resume/en/README.md` is the English variant.

The root `README.md` is project documentation, not the resume content.

## Content rules

- When adding or editing Japanese text, use JLPT N3-level wording.
- Keep same punctuation

## Common commands

Install dependencies:
```bash
pnpm install
```

Run the local preview server:
```bash
pnpm run dev
```

Build the static site:
```bash
pnpm run build
```

Run a single command against the resume content after editing:
```bash
pnpm run dev
```

There is no separate test suite or linter configured in `package.json`.

## Content workflow

- Most day-to-day edits happen in `resume/README.md` and `resume/en/README.md`.
- Assets used by the resume live in `resume/img/`.
- VuePress configuration is in `resume/.vuepress/config.js`.
- Theme overrides and layout changes live under `resume/.vuepress/theme/`.
- The generated build output is `resume/.vuepress/dist/`; it should not be edited by hand.

## Architecture notes

- VuePress serves Markdown pages as the source of truth and uses the theme directory for layout, navigation, and styling overrides.
- The custom theme mirrors VuePress default theme structure, so many files are component and style overrides rather than app-specific logic.
- The resume content is written as a single-page document with embedded HTML for layout details such as headings, contact links, and section formatting.

## Important repository details

- `resume/README.md` and `resume/en/README.md` are intentionally separate and should be kept consistent where appropriate.
- The repository already contains built output under `resume/.vuepress/dist/`; check whether a change should affect source content or only regenerated output.
- If you need to adjust the site appearance, prefer the VuePress theme files over editing the generated dist artifacts.
