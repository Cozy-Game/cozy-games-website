import { CSSProperties, ReactElement } from 'react';

interface YarnBallProps {
  /** CSS length for width and height, e.g. '2rem'. */
  size?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * The studio's yarn-ball mark: a wound ball of thread.
 * Drawn on a centred -32..32 viewBox so it can be rotated about its own middle.
 */
export function YarnBall({ size = '2rem', className, style }: YarnBallProps): ReactElement {
  return (
    <svg
      className={className}
      style={{ width: size, height: size, ...style }}
      viewBox="-32 -32 64 64"
      aria-hidden="true"
    >
      <circle r="24" fill="var(--violet)" />
      <g
        fill="none"
        stroke="var(--paper)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.5"
      >
        <path d="M-21 -9 Q -1 -30 19 -14" />
        <path d="M-20 6 Q 2 -14 22 1" />
        <path d="M-11 19 Q 9 2 23 12" />
      </g>
    </svg>
  );
}
