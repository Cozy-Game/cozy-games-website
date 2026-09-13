import { CSSProperties, ReactElement } from 'react';

interface PawPrintProps {
  size?: string;
  className?: string;
  style?: CSSProperties;
}

/** A cat paw print — four toe beans over a rounded pad. Purely decorative. */
export function PawPrint({ size = '2rem', className, style }: PawPrintProps): ReactElement {
  return (
    <svg
      className={className}
      style={{ width: size, height: size, ...style }}
      viewBox="-32 -32 64 64"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <ellipse cx="-18" cy="-7" rx="7" ry="9" transform="rotate(-20 -18 -7)" />
        <ellipse cx="-6" cy="-18" rx="7" ry="9.5" transform="rotate(-7 -6 -18)" />
        <ellipse cx="8" cy="-18" rx="7" ry="9.5" transform="rotate(7 8 -18)" />
        <ellipse cx="19" cy="-6" rx="7" ry="9" transform="rotate(20 19 -6)" />
        <path d="M0 23c-11.5 0-20-7.2-20-15.4C-20 .4-11.5-3.6 0-3.6S20 .4 20 7.6C20 15.8 11.5 23 0 23z" />
      </g>
    </svg>
  );
}
