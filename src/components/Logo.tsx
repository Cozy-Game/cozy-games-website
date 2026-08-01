import { ReactElement } from 'react';

/** Studio logo (served from public/logo.png). */
export function Logo(): ReactElement {
  return (
    <img
      className="logo"
      src={`${process.env.PUBLIC_URL}/logo.png`}
      alt="Cozy Games logo — a pyramid of glossy cubes"
    />
  );
}
