import { CSSProperties, ReactElement } from 'react';
import { YarnBall } from './YarnBall';

/**
 * Shared placement fields for every floating ornament.
 *
 * `scale` is a fraction of the stage's short side rather than a `vmin` length:
 * `vmin` is measured against the live viewport, which on a phone changes every
 * time the address bar slides away, so the ornaments would resize and jump
 * mid-scroll. `--stage-min` is pinned to the largest viewport and never moves.
 */
interface Drifter {
  scale: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
}

interface Bubble extends Drifter {
  tint: string;
}

/** Turns a fraction of the stage into a CSS length. */
function stage(scale: number): string {
  return `calc(var(--stage-min) * ${scale})`;
}

/**
 * Soft blown bubbles in the brand colours. Kept to the edges of the screen so
 * they frame the cat rather than crowd it. The large ones stay violet and
 * blush so they melt into the ground; only the small ones are yellow, where
 * they read as sparks rather than haze. Each tint is a token, so the whole set
 * re-tunes itself in dark mode.
 */
const BUBBLES: Bubble[] = [
  { scale: 0.28, top: '-8%', left: '-9%', delay: '0s', duration: '15s', tint: 'var(--bubble-violet)' },
  { scale: 0.15, top: '60%', left: '3%', delay: '-4s', duration: '12s', tint: 'var(--bubble-blush)' },
  { scale: 0.2, top: '4%', left: '77%', delay: '-7s', duration: '17s', tint: 'var(--bubble-violet)' },
  { scale: 0.09, top: '38%', left: '91%', delay: '-2s', duration: '11s', tint: 'var(--bubble-spark)' },
  { scale: 0.32, top: '66%', left: '72%', delay: '-9s', duration: '19s', tint: 'var(--bubble-blush)' },
  { scale: 0.07, top: '20%', left: '13%', delay: '-6s', duration: '10s', tint: 'var(--bubble-spark)' },
  { scale: 0.11, top: '82%', left: '31%', delay: '-3s', duration: '14s', tint: 'var(--bubble-violet)' },
  { scale: 0.05, top: '48%', left: '22%', delay: '-8s', duration: '9s', tint: 'var(--bubble-spark)' },
  { scale: 0.065, top: '70%', left: '52%', delay: '-1s', duration: '13s', tint: 'var(--bubble-blush)' },
  { scale: 0.13, top: '1%', left: '29%', delay: '-11s', duration: '16s', tint: 'var(--bubble-violet)' },
];

/** Stray yarn balls the cat has lost track of. */
const STRAY_YARN: Drifter[] = [
  { scale: 0.046, top: '33%', left: '5%', delay: '0s', duration: '13s' },
  { scale: 0.032, top: '12%', left: '90%', delay: '-5s', duration: '10s' },
];

/**
 * The playful layer behind everything: brand-coloured bubbles and a couple of
 * stray yarn balls. Decorative only, and held still for anyone who prefers
 * reduced motion.
 */
export function CozyBackdrop(): ReactElement {
  return (
    <div className="backdrop" aria-hidden="true">
      {BUBBLES.map((bubble, index) => {
        const style = {
          width: stage(bubble.scale),
          height: stage(bubble.scale),
          top: bubble.top,
          left: bubble.left,
          animationDelay: bubble.delay,
          animationDuration: bubble.duration,
          '--tint': bubble.tint,
        } as CSSProperties;
        return <span key={`bubble-${index}`} className="bubble" style={style} />;
      })}

      {STRAY_YARN.map((yarn, index) => {
        const style: CSSProperties = {
          top: yarn.top,
          left: yarn.left,
          animationDelay: yarn.delay,
          animationDuration: yarn.duration,
        };
        return (
          <YarnBall
            key={`yarn-${index}`}
            className="stray-yarn"
            size={stage(yarn.scale)}
            style={style}
          />
        );
      })}
    </div>
  );
}
