import { ReactElement } from 'react';

const ALT = 'Cozy Games — a sleepy cat curled up with a ball of yarn';

/**
 * The studio lockup. Wide screens get the horizontal cat-beside-wordmark
 * artwork; narrow ones get the stacked variant so the cat stays large.
 */
export function Logo(): ReactElement {
  const base = process.env.PUBLIC_URL;

  return (
    <picture className="logo">
      <source media="(max-width: 720px)" srcSet={`${base}/logo-stacked.svg`} />
      <img className="logo__img" src={`${base}/logo-lockup.svg`} alt={ALT} />
    </picture>
  );
}
