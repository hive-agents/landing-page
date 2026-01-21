import beeImage from '../assets/bee2.png';
import styles from './BeeAnimation.module.css';

export function BeeAnimation() {
  // More curvy, looping paths
  const path1 = "M-50,80 C100,20 150,180 300,100 C450,20 400,200 550,120 C700,40 750,180 900,80 C1050,-20 1100,160 1250,100";
  const path2 = "M-50,280 C50,180 150,350 300,280 C450,210 400,400 550,320 C700,240 800,380 950,300 C1100,220 1150,350 1250,280";
  const path3 = "M-50,420 C100,350 200,480 350,400 C500,320 550,500 700,420 C850,340 900,480 1050,400 C1200,320 1180,460 1250,420";

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
          strokeDasharray="6 6"
          opacity="0.3"
        />
        <path
          d={path2}
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.3"
        />
        <path
          d={path3}
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.3"
        />

        {/* Hidden paths for animateMotion to reference */}
        <defs>
          <path id="beePath1" d={path1} />
          <path id="beePath2" d={path2} />
          <path id="beePath3" d={path3} />
        </defs>
      </svg>

      {/* Bee images animated along paths */}
      <svg
        className={styles.svg}
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Bee 1 */}
        <g className={styles.bee1}>
          <animateMotion
            dur="16s"
            repeatCount="indefinite"
            rotate="auto"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          >
            <mpath href="#beePath1" />
          </animateMotion>
          <g transform="rotate(90)">
            <image
              href={beeImage}
              x="-18"
              y="-18"
              width="36"
              height="36"
            />
          </g>
        </g>

        {/* Bee 2 */}
        <g className={styles.bee2}>
          <animateMotion
            dur="20s"
            repeatCount="indefinite"
            rotate="auto"
            begin="-6s"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          >
            <mpath href="#beePath2" />
          </animateMotion>
          <g transform="rotate(90)">
            <image
              href={beeImage}
              x="-16"
              y="-16"
              width="32"
              height="32"
            />
          </g>
        </g>

        {/* Bee 3 */}
        <g className={styles.bee3}>
          <animateMotion
            dur="18s"
            repeatCount="indefinite"
            rotate="auto"
            begin="-12s"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            keyTimes="0; 0.25; 0.5; 0.75; 1"
          >
            <mpath href="#beePath3" />
          </animateMotion>
          <g transform="rotate(90)">
            <image
              href={beeImage}
              x="-14"
              y="-14"
              width="28"
              height="28"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
