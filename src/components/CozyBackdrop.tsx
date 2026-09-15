import { CSSProperties, ReactElement } from 'react';
import { YarnBall } from './YarnBall';

/** Shared placement fields for every floating ornament. */
interface Drifter {
  size: string;
  top: string;
  left: string;
  delay: string;
  duration: string;
}

interface Bubble extends Drifter {
  tint: string;
}

/**
 * Soft blown bubbles in the brand colours. Kept to the edges of the screen so
 * they frame the cat rather than crowd it.
 */
const BUBBLES: Bubble[] = [
  { size: '28vmin', top: '-8%', left: '-9%', delay: '0s', duration: '15s', tint: 'rgba(253, 204, 16, 0.4)' },
  { size: '15vmin', top: '60%', left: '3%', delay: '-4s', duration: '12s', tint: 'rgba(163, 111, 175, 0.34)' },
  { size: '20vmin', top: '4%', left: '77%', delay: '-7s', duration: '17s', tint: 'rgba(163, 111, 175, 0.3)' },
  { size: '9vmin', top: '38%', left: '91%', delay: '-2s', duration: '11s', tint: 'rgba(253, 204, 16, 0.46)' },
  { size: '32vmin', top: '66%', left: '72%', delay: '-9s', duration: '19s', tint: 'rgba(255, 186, 132, 0.4)' },
  { size: '7vmin', top: '20%', left: '13%', delay: '-6s', duration: '10s', tint: 'rgba(253, 204, 16, 0.48)' },
  { size: '11vmin', top: '82%', left: '31%', delay: '-3s', duration: '14s', tint: 'rgba(163, 111, 175, 0.28)' },
  { size: '5vmin', top: '48%', left: '22%', delay: '-8s', duration: '9s', tint: 'rgba(163, 111, 175, 0.34)' },
  { size: '6.5vmin', top: '70%', left: '52%', delay: '-1s', duration: '13s', tint: 'rgba(253, 204, 16, 0.4)' },
  { size: '13vmin', top: '1%', left: '29%', delay: '-11s', duration: '16s', tint: 'rgba(255, 186, 132, 0.34)' },
];

/** Stray yarn balls the cat has lost track of. */
const STRAY_YARN: Drifter[] = [
  { size: '4.6vmin', top: '33%', left: '5%', delay: '0s', duration: '13s' },
  { size: '3.2vmin', top: '12%', left: '90%', delay: '-5s', duration: '10s' },
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
          width: bubble.size,
          height: bubble.size,
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
          <YarnBall key={`yarn-${index}`} className="stray-yarn" size={yarn.size} style={style} />
        );
      })}
    </div>
  );
}
