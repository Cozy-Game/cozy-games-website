import { ReactElement } from 'react';

/**
 * The studio lockup, composed from the three artwork files: the cat mascot
 * with the "cozy" wordmark beside it and "games" tucked underneath.
 *
 * The cat and "games" are drawn in ink, so they need a white counterpart on a
 * dark ground; "cozy" is brand yellow and reads on both. `<picture>` picks the
 * right file before the image loads, so there is no flash of the wrong one.
 *
 * Every measurement in the CSS derives from one `--cat-w` custom property, so
 * the proportions between cat and type hold at any size. The images are
 * decorative — the studio name is carried by the page's hidden heading.
 */
export function Logo(): ReactElement {
  const base = process.env.PUBLIC_URL;

  return (
    <div className="logo">
      <picture>
        <source srcSet={`${base}/cat-dark.png`} media="(prefers-color-scheme: dark)" />
        <img className="logo__cat" src={`${base}/cat.png`} alt="" />
      </picture>
      <div className="logo__type">
        <img className="logo__cozy" src={`${base}/wordmark-cozy.png`} alt="" />
        <picture>
          <source
            srcSet={`${base}/wordmark-games-dark.png`}
            media="(prefers-color-scheme: dark)"
          />
          <img className="logo__games" src={`${base}/wordmark-games.png`} alt="" />
        </picture>
      </div>
    </div>
  );
}
