import { CSSProperties, ReactElement } from 'react';

interface CubeSpec {
  size: string;
  top: string;
  left: string;
  delay: string;
  tilt: string;
  color: string;
}

/* Tints sampled from the logo cubes, faded against the dark background. */
const CUBES: CubeSpec[] = [
  { size: '22vmin', top: '6%', left: '-5%', delay: '0s', tilt: '-8deg', color: 'rgba(217, 154, 184, 0.16)' },
  { size: '12vmin', top: '66%', left: '8%', delay: '-3s', tilt: '10deg', color: 'rgba(184, 212, 196, 0.14)' },
  { size: '17vmin', top: '10%', left: '80%', delay: '-6s', tilt: '6deg', color: 'rgba(143, 131, 214, 0.18)' },
  { size: '8vmin', top: '44%', left: '89%', delay: '-2s', tilt: '-12deg', color: 'rgba(169, 184, 224, 0.15)' },
  { size: '26vmin', top: '70%', left: '78%', delay: '-8s', tilt: '8deg', color: 'rgba(192, 122, 84, 0.16)' },
  { size: '6vmin', top: '28%', left: '20%', delay: '-5s', tilt: '14deg', color: 'rgba(196, 145, 191, 0.15)' },
];

/** Decorative floating glossy cubes, echoing the logo, behind page content. */
export function Cubes(): ReactElement {
  return (
    <div className="cubes" aria-hidden="true">
      {CUBES.map((cube, index) => {
        const style: CSSProperties = {
          width: cube.size,
          height: cube.size,
          top: cube.top,
          left: cube.left,
          animationDelay: cube.delay,
          backgroundColor: cube.color,
          rotate: cube.tilt,
        };
        return <span key={index} className="cube" style={style} />;
      })}
    </div>
  );
}
