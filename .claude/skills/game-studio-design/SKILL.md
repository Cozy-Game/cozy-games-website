---
name: game-studio-design
description: Use when designing or styling any UI for this website — layout, colors, animations, effects, panels. Sets the creative direction: modern mobile-game-studio aesthetic, minimalist, UX-first.
---

# Game Studio Design Direction

Goal: the site should feel like a top mobile game studio's website (think Supercell, King, Voodoo, Playrix) — playful and premium, but minimalist.

## What makes those sites catchy — replicate it
- **Bold hero**: full-viewport hero, one big statement headline, one CTA, strong visual (gradient/artwork), nothing else.
- **Cards & panels**: content lives in rounded cards (16–24px radius), soft shadows, generous padding, hover lift (`transform: translateY(-4px)` + shadow grow).
- **Motion everywhere, subtle**: scroll-reveal fade/slide-ins, smooth hover transitions (150–250ms ease-out), micro-interactions on buttons. Animate `transform` and `opacity` only. Respect `prefers-reduced-motion`.
- **Color**: near-white or near-black base, 1 vibrant accent color (+ optional gradient of it) used sparingly for CTAs and highlights. Define as CSS variables in one place.
- **Type**: one bold display font for headings, one clean sans for body. Big size contrast between them.

## Minimalism & UX rules
- Lots of whitespace; max content width ~1200px, centered.
- One idea per section; sections separated by space, not lines.
- Every page answers in 5 seconds: who we are, what we make, what to click.
- Mobile-first responsive; touch targets ≥ 44px.
- Fast: no heavy libraries for effects — CSS + IntersectionObserver cover 90% of it.

When in doubt, remove elements rather than add them.
