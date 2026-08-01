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
  content/          # site.json — ALL editable site copy (hero, footer, pages)
  features/
    home/           # Landing page (hero + footer)
    legal/          # Privacy / Terms / Support page component
  hooks/            # useHashRoute — tiny hash-based router (no dependency)
  styles/           # global.css — design tokens (colors, fonts) and all styles
  types/            # Shapes of the site.json content
```

## Notes

- **Edit site text in `src/content/site.json`** — hero title/slogan/blurb, footer links, and all page copy live there. Adding a key under `pages` automatically creates a page at `#/<key>`.
- Routing is hash-based (`#/privacy`, `#/terms`, `#/support`); no router library.
- Design tokens (palette, fonts, radii) live as CSS variables at the top of `src/styles/global.css`.
- The logo is `public/logo.png` (copied from `Piramida Logo 2.png`). `logo192.png` / `logo512.png` are resized from it.
