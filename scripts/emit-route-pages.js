/**
 * Writes a real page at every route so the site needs no server rewrite rule.
 *
 * The app is a single HTML file that picks its page from `window.location`.
 * For `cozy.game/privacy` to survive a cold load — which is how an app-store
 * reviewer will open it — the host has to find something at that path. Copying
 * the built `index.html` into `build/privacy/index.html` gives it exactly that
 * on any static host, with no `.htaccess`, `_redirects` or nginx config to keep
 * in sync. `404.html` is the safety net for hosts that answer unknown paths
 * with their not-found page; the app still reads the path and renders right.
 *
 * Runs automatically after `npm run build`. Add new routes to ROUTES below and
 * to the route table in `src/App.tsx` together.
 */

const fs = require('fs');
const path = require('path');

const ROUTES = ['privacy', 'terms'];

const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('emit-route-pages: no build/index.html — run the build first.');
  process.exit(1);
}

const html = fs.readFileSync(indexPath);

for (const route of ROUTES) {
  fs.mkdirSync(path.join(buildDir, route), { recursive: true });
  fs.writeFileSync(path.join(buildDir, route, 'index.html'), html);
}
fs.writeFileSync(path.join(buildDir, '404.html'), html);

console.log(`emit-route-pages: wrote ${ROUTES.map((r) => `/${r}`).join(', ')} and 404.html`);
