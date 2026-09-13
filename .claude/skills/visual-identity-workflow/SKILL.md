---
name: visual-identity-workflow
description: Use for every request on this website that touches how it looks, feels or is branded — new logo/icon, colours, type, layout, redesign, "make it feel more X". Defines who the user is, how to hand work back to her, and the asset/branch workflow.
---

# Visual Identity Workflow

## Who you are working with

Charlie is Cozy Games' **artist and visual identity lead**. She designs the
brand; she does not write code and does not want to. She judges work by looking
at it, not by reading it.

Cozy Games is a small, deeply passionate video game studio — a handful of people
with different specialities in the same field whose skills happen to complete
each other. The site should read like that: warm, human, made by people who love
this, not like a corporate template.

## How to hand work back to her — non-negotiable

- **Never give her something to run, open, install, or paste.** No terminal
  commands, no `npm` anything, no "open localhost:3000", no "try clicking X in
  the sidebar". If a command needs running, run it yourself in the background.
- **Always show, don't tell.** Every visual change ends with her being able to
  see it. Keep the dev server running in the background so the preview inside VS
  Code updates itself; if a change is hard to see live, render a preview image
  and put it in the reply.
- **Describe changes in two or three plain sentences.** Say what it looks like
  now, not how it is implemented. "The logo is bigger and the background is a
  warmer purple" — not "adjusted the clamp() on `.logo` and the radial-gradient
  stops".
- **No file paths, no code blocks, no CSS values in the reply** unless she asks
  for them. Colours are fine to name as hex if she is picking colours — she's an
  artist, hex is her language, code is not.
- Handle git yourself — branching, commits, merges. Don't narrate it unless she
  asks.

## Be a creative partner, not an order-taker

She wants ideas back. When she describes a direction, propose one concrete
interpretation and say what you'd add — a motion idea, a layout shift, a texture.
Offer it as a suggestion she can wave off, not a menu of four options to pick
from.

If something is genuinely ambiguous — which of two logos is primary, whether a
colour is the background or the accent, whether a section should be cut —
**ask**. One or two sharp questions, not a questionnaire. Guessing wrong and
building on it wastes her time far more than asking does.

## Assets

New logos, icons, wordmarks and reference images land in `brand/`, or she pastes
them straight into the chat. Treat `brand/` as source material: pick from it,
export what the site needs, copy that into `public/`. Never assume an old asset
is still current once a new one arrives — ask which replaces what.

Favicons and the PWA manifest icons have to be regenerated whenever the mark
changes, or the browser tab keeps the old identity. This is easy to forget.

## Hard constraints — do not break these

- **Every existing link and URL stays exactly as it is.** `#/privacy` and
  `#/terms` are already live in customers' hands and linked from inside shipped
  games. Routes, hash fragments and in-page anchor ids are frozen. Redesign
  around them.
- **Legal text (Privacy Policy, Terms) is not yours to rewrite.** Restyle it
  freely; leave the wording alone.
- Marketing copy is reusable as-is by default. Suggest rewrites, never apply
  them silently.

## Working shape

Redesigns happen on their own branch, merged to `main` only when she says she's
happy. Build in passes she can react to — shell and palette first, then type,
then motion and detail — rather than disappearing for one giant rewrite.
