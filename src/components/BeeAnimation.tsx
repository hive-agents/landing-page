import styles from './BeeAnimation.module.css';

export function BeeAnimation() {
  // Define paths that bees will follow
  const path1 = "M-50,100 Q300,30 600,120 Q900,210 1250,80";
  const path2 = "M-50,250 Q200,180 450,300 Q700,420 950,280 Q1100,200 1250,260";
  const path3 = "M-50,400 Q250,320 500,420 Q750,520 1000,380 Q1150,300 1250,380";

  return (
    <div className={styles.container} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Dotted paths */}
        <path
          d={path1}
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.4"
        />
        <path
          d={path2}
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.4"
        />
        <path
          d={path3}
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.4"
        />

        {/* Bee 1 following path 1 */}
        <g className={styles.bee1}>
          <animateMotion
            dur="20s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#beePath1" />
          </animateMotion>
          <BeeGraphic />
        </g>

        {/* Bee 2 following path 2 */}
        <g className={styles.bee2}>
          <animateMotion
            dur="25s"
            repeatCount="indefinite"
            rotate="auto"
            begin="-8s"
          >
            <mpath href="#beePath2" />
          </animateMotion>
          <BeeGraphic />
        </g>

        {/* Bee 3 following path 3 */}
        <g className={styles.bee3}>
          <animateMotion
            dur="22s"
            repeatCount="indefinite"
            rotate="auto"
            begin="-15s"
          >
            <mpath href="#beePath3" />
          </animateMotion>
          <BeeGraphic />
        </g>

        {/* Hidden paths for animateMotion to reference */}
        <defs>
          <path id="beePath1" d={path1} />
          <path id="beePath2" d={path2} />
          <path id="beePath3" d={path3} />
        </defs>
      </svg>
    </div>
  );
}

function BeeGraphic() {
  // Bee is drawn pointing right (head on right, tail on left)
  // rotate="auto" aligns the positive x-axis with the path direction
  return (
    <g transform="translate(0, 0)">
      {/* Body - horizontal, tail on left */}
      <ellipse cx="-4" cy="0" rx="6" ry="5" fill="var(--color-primary)" />
      {/* Stripes */}
      <path d="M-8 -3v6M-5 -4v8M-2 -3v6" stroke="var(--color-accent)" strokeWidth="1.5" />
      {/* Head - on right */}
      <circle cx="5" cy="0" r="4" fill="var(--color-primary)" />
      {/* Wings - on top and bottom */}
      <ellipse cx="-2" cy="-6" rx="4" ry="2.5" fill="var(--color-card-bg)" opacity="0.8" />
      <ellipse cx="-2" cy="6" rx="4" ry="2.5" fill="var(--color-card-bg)" opacity="0.8" />
      {/* Antennae - pointing forward-right */}
      <path d="M8 -2L11 -5M8 2L11 5" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" />
    </g>
  );
}
