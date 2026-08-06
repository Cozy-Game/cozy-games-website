import { RefObject, useEffect, useRef } from 'react';

/**
 * Keeps in-document anchors (e.g. a table of contents) working inside the
 * hash router: intercepts clicks on `#anchor` links and scrolls to the target
 * instead of letting the hash change and navigate away from the page.
 */
export function useInPageAnchors(): RefObject<HTMLElement | null> {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onClick = (event: MouseEvent): void => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a');
      const href = anchor?.getAttribute('href') ?? '';
      // `#/route` links belong to the router; only plain `#id` links are ours.
      if (!href.startsWith('#') || href.startsWith('#/') || href.length < 2) return;

      const destination = container.querySelector(`[id="${CSS.escape(href.slice(1))}"]`);
      if (!destination) return;

      event.preventDefault();
      destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    container.addEventListener('click', onClick);
    return () => container.removeEventListener('click', onClick);
  }, []);

  return containerRef;
}
