---
name: verify
description: Build, launch, and drive the Morpho Studio site to verify changes end-to-end in the Browser pane.
---

# Verify Morpho Studio changes

## Build & launch

- `npm run build` — static export of all routes (home + /work/[slug] × 9). Catches TS/lint.
- Dev server: `preview_start` with name `morpho-dev` (defined in `.claude/launch.json`, `autoPort: true` — port 3000 is often taken by the user's own dev server; the tool assigns a free port).

## Flows worth driving

- Home hero: scramble animation runs ~9s through 3 slogans, ends on "MORPHO STUDIO / THINK . BUILD . / SHIP . REPEAT ." Check spelling, CTAs (`View work` → /#work, `Let's Talk` → /#contact), sr-only h1.
- Work section: marquee + 9 rows. Click a row → expands with screens art, summary, CONCEPT tag, "Open case study" → `/work/<slug>`. Rows are keyboard-actionable (role="button", Enter/Space).
- Case page: per-page `<title>`, concept badge, meta grid, wide art, challenge/approach/outcome, gallery, context note, next-project card.
- Probe: `/work/<garbage>` must 404.
- Mobile preset: hamburger menu open/close, stacked work rows.

## Environment gotchas (Browser pane)

- The pane's renderer throttles rAF/WAAPI clocks when not visible: screenshots after scrolling come back black/offset, and framer-motion `whileInView` reveals freeze mid-opacity. This is the pane, not the site.
  - Capture only at `scrollY = 0`. To "scroll", set `document.body.style.transform = translateY(-<docTop>px)` instead of scrolling, then screenshot.
  - Fast-forward frozen reveals: `document.getAnimations().forEach(a => a.finish())` — run it twice ~300ms apart (IntersectionObserver spawns new animations late).
  - `document.body` persists across App Router navigations — clear the transform (and any injected styles) after navigating.
  - Remove `.cursor-ring`/`.cursor-dot` before captures to cut a repaint source.
- Click via `ref_N` from read_page, not screenshot coordinates (screenshot pixel space ≠ viewport space here).
