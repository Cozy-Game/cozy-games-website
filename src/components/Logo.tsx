import { ReactElement } from 'react';

/** Studio logo (served from public/logo-compact.png). */
export function Logo(): ReactElement {
  return (
    <img
      className="logo"
      src={`${process.env.PUBLIC_URL}/logo-compact.png`}
      alt="Cozy Games logo — a pyramid of glossy cubes"
    />
  );
}
