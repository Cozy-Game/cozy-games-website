import { useEffect, useState } from 'react';

function readHash(): string {
  return window.location.hash.replace(/^#\/?/, '');
}

/** Returns the current hash route (e.g. "privacy") and re-renders on navigation. */
export function useHashRoute(): string {
  const [route, setRoute] = useState<string>(readHash);

  useEffect(() => {
    const onHashChange = (): void => setRoute(readHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}
