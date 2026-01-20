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
  return (
    <svg
      viewBox="0 0 400 400"
      className={styles.diagram}
      aria-hidden="true"
    >
      {/* Central hexagon */}
      <path
        d="M200 80L280 126V218L200 264L120 218V126L200 80Z"
        fill="var(--color-hexagon-fill)"
        stroke="var(--color-primary)"
        strokeWidth="2"
      />

      {/* Connecting lines with dots */}
      <g stroke="var(--color-hexagon-stroke)" strokeWidth="2" strokeDasharray="4 4">
        <line x1="200" y1="80" x2="200" y2="20" />
        <line x1="280" y1="126" x2="340" y2="90" />
        <line x1="280" y1="218" x2="340" y2="254" />
        <line x1="200" y1="264" x2="200" y2="324" />
        <line x1="120" y1="218" x2="60" y2="254" />
        <line x1="120" y1="126" x2="60" y2="90" />
      </g>

      {/* Outer hexagons (smaller) */}
      <g fill="var(--color-hexagon-fill)" stroke="var(--color-hexagon-stroke)" strokeWidth="1.5">
        <path d="M200 20L220 32V56L200 68L180 56V32L200 20Z" />
        <path d="M340 90L360 102V126L340 138L320 126V102L340 90Z" />
        <path d="M340 254L360 266V290L340 302L320 290V266L340 254Z" />
        <path d="M200 324L220 336V360L200 372L180 360V336L200 324Z" />
        <path d="M60 254L80 266V290L60 302L40 290V266L60 254Z" />
        <path d="M60 90L80 102V126L60 138L40 126V102L60 90Z" />
      </g>

      {/* Center icon (simplified bee/hive) */}
      <g transform="translate(200, 172)">
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
