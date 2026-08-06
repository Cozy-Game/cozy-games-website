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
  hooks/            # useHashRoute — tiny hash-based router (no dependency)
  styles/           # global.css — design tokens (colors, fonts) and all styles
  types/            # Shapes of the site.json content
```

## Notes

- **Edit site text in `src/content/site.json`** — hero title/slogan/blurb and footer links live there.
- **Legal documents** are too long for `site.json`, so they live as HTML strings in `src/features/legal/documents/`. Those files mirror `resources/privacy-policy.html` and `resources/terms-and-conditions.html` byte-for-byte (body content only) — update the resource file and the matching `.ts` constant together.
- Routing is hash-based (`#/privacy`, `#/terms`); no router library. Registered in `src/App.tsx`.
- In-document anchors (tables of contents) are handled by `useInPageAnchors`, which scrolls to the target instead of letting the hash change the route.
- Design tokens (palette, fonts, radii) live as CSS variables at the top of `src/styles/global.css`.
- The logo is `public/logo.png` (copied from `Piramida Logo 2.png`). `logo192.png` / `logo512.png` are resized from it.
