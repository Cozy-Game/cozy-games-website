import { ReactElement } from 'react';

/**
 * The studio lockup, composed from the three artwork files: the cat mascot
 * with the "cozy" wordmark beside it and "games" tucked underneath.
 *
 * Every measurement in the CSS derives from one `--cat-w` custom property, so
 * the proportions between cat and type hold at any size. The images are
 * decorative — the studio name is carried by the page's hidden heading.
 */
export function Logo(): ReactElement {
  const base = process.env.PUBLIC_URL;

  return (
    <div className="logo">
      <img className="logo__cat" src={`${base}/cat.png`} alt="" />
      <div className="logo__type">
        <img className="logo__cozy" src={`${base}/wordmark-cozy.png`} alt="" />
        <img className="logo__games" src={`${base}/wordmark-games.png`} alt="" />
      </div>
    </div>
  );
}
