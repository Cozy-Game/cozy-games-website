import { useEffect, useState } from 'react';

/**
 * The site serves its pages as plain paths — `cozy.game/privacy`, not
 * `cozy.game/#/privacy` — because app stores reject policy links that carry a
 * fragment. The build writes a real `index.html` at each route (see
 * `scripts/emit-route-pages.js`), so a cold load of `/privacy` is served by the
 * host without any rewrite rule; this hook only handles what happens after.
 */

/** Slug of the current page, `''` for the landing page. */
function readPath(): string {
  return window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
}

/**
 * Older builds linked to `#/privacy`, and those links are already out in
 * published games, so they have to keep landing on the right page. Only a
 * `#/`-prefixed fragment is a route — a bare `#anchor` belongs to the document
 * it is in.
 */
function readLegacyHashRoute(): string | null {
  const match = window.location.hash.match(/^#\/([a-z-]*)$/i);
  return match ? match[1].toLowerCase() : null;
}

/** A click we are allowed to handle ourselves rather than let the browser load. */
function isPlainLeftClick(event: MouseEvent): boolean {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    !event.defaultPrevented
  );
}

/** Returns the current route slug and re-renders on navigation. */
export function usePathRoute(): string {
  const [route, setRoute] = useState<string>(readPath);

  useEffect(() => {
    // Swap a legacy `#/privacy` arrival for the clean path, without adding a
    // history entry — going back should leave the site, not re-enter it.
    const legacy = readLegacyHashRoute();
    if (legacy !== null) {
      window.history.replaceState(null, '', `/${legacy}`);
      setRoute(legacy);
    }

    const onPopState = (): void => setRoute(readPath());

    // Same-origin links navigate in place; everything else (external hosts,
    // mailto, downloads, new tabs, in-page anchors) is left to the browser.
    const onClick = (event: MouseEvent): void => {
      if (!isPlainLeftClick(event)) return;

      const target = event.target;
      const anchor = target instanceof Element ? target.closest('a') : null;
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.hash && url.pathname === window.location.pathname) return;

      event.preventDefault();
      window.history.pushState(null, '', url.pathname);
      setRoute(readPath());
    };

    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onClick);
    };
  }, []);

  return route;
}
