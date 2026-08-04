# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

VuePress 1 site that renders a bilingual job-hunting resume (JA + EN) as a printable web page. Live site: https://cv.anxcye.com. Forked from [Siricee/Resume-vuepress](https://github.com/Siricee/Resume-vuepress) / [Anxcye/vuepress-cv](https://github.com/Anxcye/vuepress-cv).

Also holds Japanese job-hunting materials under `job/` (interview Q&A, company notes, personal reference).

Content rules:

- Japanese must stay at JLPT N3-level wording.
- JA and EN must stay in sync; **Japanese is the source of truth**. Every resume content change updates both files in the same edit.
- Unless explicitly asked, do **not** rewrite existing resume wording, word order, or meaning — even for grammar polish.

Extra personal context (not in-repo): [Notion](https://island-haddock-481.notion.site/2a8c298586a480dbac1acec5b234e761).

## Commands

```bash
pnpm install          # preferred (pnpm-lock.yaml present; package-lock.json also exists)
pnpm run dev          # vuepress dev resume — local preview
pnpm run build        # vuepress build resume — static site → resume/.vuepress/dist
```

No lint, test, or format scripts. Verify changes with `pnpm run dev` (or `build`) and browser preview. Print check: Chrome → Print → Save as PDF; disable headers/footers in more settings.

## Architecture

```
package.json                 # scripts only: vuepress dev/build against resume/
resume/                      # VuePress docs root (not repo root)
  README.md                  # Japanese resume (locale "/")
  en/README.md               # English resume (locale "/en/")
  img/                       # contact icons shared by both locales
  .vuepress/
    config.js                # title, base, locales, themeConfig (navbar off)
    theme/                   # local custom theme (default-theme fork)
      layouts/Layout.vue     # Navbar/Sidebar markup commented out; Page-only chrome
      components/Page.vue    # resume layout + print styles (.right, .role, header flex)
      styles/override.styl   # font size/weight, accent/text/border colors
      index.js               # theme API: plugins, Algolia alias
job/                         # 日本就职活动 (not part of the VuePress build)
  reference/                 # personal facts used when drafting answers
  interview/                 # interview Q&A (general + per-company as needed)
  information/               # company briefing / career fair notes
```

- Root `README.md` is project docs. Resume pages are `resume/README.md` and `resume/en/README.md` — VuePress requires those default page names; do not rename them.
- `resume/.vuepress/config.js` defines `locales` for `/` (ja-JP) and `/en/` (en-US). Theme config disables the navbar; each locale has a single-item sidebar (unused in practice because `Layout.vue` comments out Sidebar/Navbar).
- Resume Markdown is not pure MD: header blocks use inline HTML (`<div>`, contact `<ul>`, `<style>` for icon size). Dates/roles use `<span class="right">` and `<span class="role">` styled in `Page.vue`.
- EN image paths are `../img/...`; JA paths are `./img/...`.
- Build output `resume/.vuepress/dist` is gitignored. Root README mentions GitHub Pages + Actions deploy, but this tree currently has no `.github/` workflows.
- `job/` is working material for 就活 only — not published by VuePress.

## Where to edit what

| Goal | Primary files |
|------|----------------|
| Resume content | `resume/README.md` + `resume/en/README.md` together |
| Site title / locales / sidebar labels | `resume/.vuepress/config.js` |
| Typography, colors, section underlines, date alignment | `resume/.vuepress/theme/components/Page.vue`, `styles/override.styl` |
| Shell (nav/sidebar on/off) | `resume/.vuepress/theme/layouts/Layout.vue` |
| Contact icons | `resume/img/` |
| Interview answers | `job/interview/` (start with `general.md`) |
| Personal facts for drafting | `job/reference/personal-info.md` |
| Company / event notes | `job/information/` |

Do not treat the default-theme Vue components under `theme/components/` (Navbar, Sidebar, Home, etc.) as active product surface unless re-enabling them in `Layout.vue`.

## 日本就职活动

`job/` is the 就职活动 directory. Reference materials:

- 日文简历: `resume/README.md`
- 英文简历: `resume/en/README.md`
- 个人信息: `job/reference/personal-info.md`
- 通用面试问答: `job/interview/general.md`

### 面试问答写法

- 作为面试者: 日文用 JLPT N3 水平 + 敬语
- 作为面试官: 问题用敬语
- 用 STAR（Situation, Task, Action, Result）组织回答
- 紧扣 ISTJ 性格
- 回答按多个点列出；每点用关键短句概括（方便记忆），后面跟详细说明和例子:

```markdown
- 要点A,若干关键词:详细说明A
- 要点B,若干关键词:详细说明B
- 要点C,若干关键词:详细说明C
```
