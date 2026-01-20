import { useCopy } from '../hooks/useCopy';
import styles from './Hero.module.css';

export function Hero() {
  const copy = useCopy();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>{copy.hero.headline}</h1>
          <p className={styles.subheadline}>{copy.hero.subheadline}</p>
          <a href="#waitlist" className="btn btn-primary btn-large">
            {copy.hero.cta}
          </a>
        </div>
        <div className={styles.visual}>
          <HexagonDiagram />
        </div>
      </div>
    </section>
  );
}

function HexagonDiagram() {
  // Central hexagon vertices (pointy-top orientation)
  // Center at (200, 172), with vertices at angles 30, 90, 150, 210, 270, 330 degrees
  // For a pointy-top hex: top vertex is at 270deg (straight up)
  const centerX = 200;
  const centerY = 172;
  const centerRadius = 92; // Distance from center to vertex

  // Small hexagon radius
  const smallRadius = 24;

  // Distance from center to small hexagon centers
  const outerDistance = 140;

  // Calculate positions for 6 outer hexagons
  // They are positioned at 30, 90, 150, 210, 270, 330 degrees (matching center hex vertices)
  const positions = [
    { angle: 270, label: 'top' },       // Top
    { angle: 330, label: 'topRight' },  // Top-right
    { angle: 30, label: 'bottomRight' }, // Bottom-right
    { angle: 90, label: 'bottom' },     // Bottom
    { angle: 150, label: 'bottomLeft' }, // Bottom-left
    { angle: 210, label: 'topLeft' },   // Top-left
  ];

  // Helper to convert angle to radians
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  // Calculate hex vertex position from center
  const hexVertex = (cx: number, cy: number, radius: number, angleDeg: number) => ({
    x: cx + radius * Math.cos(toRad(angleDeg)),
    y: cy + radius * Math.sin(toRad(angleDeg)),
  });

  // Generate pointy-top hexagon path
  const hexPath = (cx: number, cy: number, r: number) => {
    const points = [270, 330, 30, 90, 150, 210].map(angle => hexVertex(cx, cy, r, angle));
    return `M${points[0].x} ${points[0].y}` + points.slice(1).map(p => `L${p.x} ${p.y}`).join('') + 'Z';
  };

  return (
    <svg
      viewBox="0 0 400 344"
      className={styles.diagram}
      aria-hidden="true"
    >
      {/* Connecting lines from center hex vertices to outer hex facing vertices */}
      <g stroke="var(--color-hexagon-stroke)" strokeWidth="2" strokeDasharray="4 4">
        {positions.map(({ angle }, i) => {
          // Start point: vertex of center hexagon
          const start = hexVertex(centerX, centerY, centerRadius, angle);

          // End point: center of small hexagon
          const smallCenterX = centerX + outerDistance * Math.cos(toRad(angle));
          const smallCenterY = centerY + outerDistance * Math.sin(toRad(angle));

          // The facing vertex of the small hex is 180 degrees opposite of its position angle
          const facingAngle = (angle + 180) % 360;
          const end = hexVertex(smallCenterX, smallCenterY, smallRadius, facingAngle);

          return (
            <line
              key={i}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
            />
          );
        })}
      </g>

      {/* Central hexagon */}
      <path
        d={hexPath(centerX, centerY, centerRadius)}
        fill="var(--color-hexagon-fill)"
        stroke="var(--color-primary)"
        strokeWidth="2"
      />

      {/* Outer hexagons */}
      <g fill="var(--color-hexagon-fill)" stroke="var(--color-hexagon-stroke)" strokeWidth="1.5">
        {positions.map(({ angle }, i) => {
          const cx = centerX + outerDistance * Math.cos(toRad(angle));
          const cy = centerY + outerDistance * Math.sin(toRad(angle));
          return <path key={i} d={hexPath(cx, cy, smallRadius)} />;
        })}
      </g>

      {/* Center icon (simplified hive symbol) */}
      <g transform={`translate(${centerX}, ${centerY})`}>
        <circle cx="0" cy="0" r="20" fill="var(--color-primary)" />
        <path
          d="M-8 -4L0 -12L8 -4M-8 4L0 12L8 4"
          stroke="var(--color-background)"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
}
