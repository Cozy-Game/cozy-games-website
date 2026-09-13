import { ReactElement } from 'react';

/**
 * Decorative background motion: a ball of yarn rolling slowly across the page,
 * trailing the thread it has unwound. Purely ornamental — hidden from screen
 * readers and stilled by `prefers-reduced-motion`.
 */
export function RollingYarn(): ReactElement {
  return (
    <div className="rolling-yarn" aria-hidden="true">
      <svg className="rolling-yarn__svg" viewBox="0 0 340 110" fill="none">
        {/* The unwound thread, trailing back to the left. */}
        <path
          className="rolling-yarn__thread"
          d="M14 78 C 22 62, 34 84, 62 80 C 108 73, 128 50, 176 48 C 214 46, 232 58, 250 64"
          stroke="var(--violet)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* The ball itself. The outer group places it; the inner one spins,
            so the CSS rotation never overwrites the positioning transform. */}
        <g transform="translate(286 62)">
          <g className="rolling-yarn__ball">
            <circle r="26" fill="var(--violet)" />
            <g
              stroke="var(--paper)"
              strokeWidth="2.6"
              strokeLinecap="round"
              opacity="0.5"
            >
              <path d="M-23 -10 Q -1 -33 21 -15" />
              <path d="M-22 7 Q 2 -15 24 1" />
              <path d="M-12 21 Q 10 2 25 13" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
