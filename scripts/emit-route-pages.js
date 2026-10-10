/**
 * Writes a real page at every route so the site needs no server rewrite rule —
 * and puts the legal text INTO that page, so it reads without JavaScript.
 *
 * The app is a single HTML file that picks its page from `window.location`.
 * For `cozy.game/privacy` to survive a cold load — which is how an app-store
 * reviewer will open it — the host has to find something at that path. Copying
 * the built `index.html` into `build/privacy/index.html` gives it exactly that
 * on any static host, with no `.htaccess`, `_redirects` or nginx config to keep
 * in sync. `404.html` is the safety net for hosts that answer unknown paths
 * with their not-found page; the app still reads the path and renders right.
 *
 * Each legal route's page also carries the document's own HTML inside
 * `<div id="root">` (the same markup `LegalDocument` renders), with its own
 * `<title>`. A store reviewer's fetch tool, a crawler or a phone with scripts
 * off therefore sees the policy text, not "You need to enable JavaScript".
 * React takes the root over on load and renders the same page in its place.
 *
 * Runs automatically after `npm run build`. Add new routes to ROUTES below and
 * to the route table in `src/App.tsx` together.
 */

const fs = require('fs');
const path = require('path');

const ROUTES = {
  privacy: { title: 'Privacy Policy — Cozy Games', document: 'privacy-policy.html' },
  terms: { title: 'Terms of Service — Cozy Games', document: 'terms-and-conditions.html' },
};

const buildDir = path.join(__dirname, '..', 'build');
const resourcesDir = path.join(__dirname, '..', '..', 'resources');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('emit-route-pages: no build/index.html — run the build first.');
  process.exit(1);
}

const html = fs.readFileSync(indexPath, 'utf8');

/** The document's body, as `src/features/legal/documents/*.ts` mirrors it. */
function legalBody(file) {
  const source = fs.readFileSync(path.join(resourcesDir, file), 'utf8');
  return source.split('<body>')[1].split('</body>')[0];
}

/** The built page with the legal document pre-rendered into the root and a page title. */
function prerender(route) {
  const article = legalBody(route.document);
  const page =
    '<div class="page"><main class="legal-doc">' +
    '<a class="legal-doc__back" href="/">← Back home</a>' +
    `<article class="legal-doc__card">${article}</article>` +
    '</main></div>';
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error('emit-route-pages: build/index.html has no empty #root to fill.');
  return html
    .replace(marker, `<div id="root">${page}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);
}

for (const [slug, route] of Object.entries(ROUTES)) {
  fs.mkdirSync(path.join(buildDir, slug), { recursive: true });
  fs.writeFileSync(path.join(buildDir, slug, 'index.html'), prerender(route));
}
fs.writeFileSync(path.join(buildDir, '404.html'), html);

console.log(`emit-route-pages: wrote ${Object.keys(ROUTES).map((r) => `/${r}`).join(', ')} (pre-rendered) and 404.html`);
