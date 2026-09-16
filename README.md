# Cozy Games — Website

Minimalist landing site for the Cozy Games studio. React 19 + TypeScript, built with Create React App.

## Scripts

```bash
npm install    # install dependencies
npm start      # dev server at http://localhost:3000
npm run build  # production build in build/
npm test       # run tests
```

## Structure

```
src/
  components/       # Reusable presentational components (Footer, Cubes, Logo)
  content/          # site.json — editable site copy (hero, footer)
  features/
    home/           # Landing page (hero + footer)
    legal/          # Privacy Policy + Terms pages
      documents/    # Full legal document markup (privacyPolicy, termsOfService)
  hooks/            # usePathRoute — tiny path-based router (no dependency)
  styles/           # global.css — design tokens (colors, fonts) and all styles
  types/            # Shapes of the site.json content
```

## Notes

- **Edit site text in `src/content/site.json`** — hero title/slogan/blurb and footer links live there.
- **Legal documents** are too long for `site.json`, so they live as HTML strings in `src/features/legal/documents/`. Those files mirror `resources/privacy-policy.html` and `resources/terms-and-conditions.html` byte-for-byte (body content only) — update the resource file and the matching `.ts` constant together.
- Routing is path-based (`/privacy`, `/terms`); no router library. Registered in `src/App.tsx`.
  App stores reject policy links containing a fragment, so the old `#/privacy` form is gone from
  the site — but it is still linked from published games, so `usePathRoute` rewrites it to the
  clean path on arrival. Keep that fallback.
- `npm run build` runs `scripts/emit-route-pages.js`, which copies the built `index.html` to
  `build/privacy/index.html`, `build/terms/index.html` and `build/404.html`. That is what makes a
  cold load of `cozy.game/privacy` work on a plain static host, with no rewrite rule to maintain.
  Adding a route means adding it in both `src/App.tsx` and that script.
- In-document anchors (tables of contents) are handled by `useInPageAnchors`, which scrolls to the target instead of letting the hash change the route.
- Design tokens (palette, fonts, radii) live as CSS variables at the top of `src/styles/global.css`.
- The lockup is three files in `public/`: `cat.png`, `wordmark-cozy.png`, `wordmark-games.png`,
  composed by `src/components/Logo.tsx`. `cat-dark.png` and `wordmark-games-dark.png` are the same
  drawings in white for dark mode; "cozy" is brand yellow and is used in both. Regenerate the dark
  pair by recolouring the light file to white and keeping its alpha, so the geometry still matches.
- Dark mode is a `prefers-color-scheme` block of token overrides at the top of `global.css`.
  `color-scheme: light dark` is declared so phones stop force-darkening the light theme themselves.
- Anything sized to the viewport uses `--stage-h` / `--stage-min` (pinned to `lvh`) rather than
  `vh`/`dvh`/`vmin`, which change as a phone's address bar slides and make fixed ornaments jump.
