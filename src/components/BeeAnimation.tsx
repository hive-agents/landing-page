import styles from './BeeAnimation.module.css';

export function BeeAnimation() {
  return (
    <div className={styles.container} aria-hidden="true">
      <svg className={styles.paths} viewBox="0 0 1200 600" preserveAspectRatio="none">
        {/* Path 1 - top curved path */}
        <path
          className={styles.path}
          d="M-50,150 Q300,50 600,150 T1250,100"
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        {/* Path 2 - middle curved path */}
        <path
          className={styles.path}
          d="M-50,300 Q200,200 500,350 Q800,500 1250,300"
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        {/* Path 3 - bottom curved path */}
        <path
          className={styles.path}
          d="M-50,500 Q400,400 700,500 T1250,450"
          fill="none"
          stroke="var(--color-hexagon-stroke)"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Animated bees */}
      <div className={`${styles.bee} ${styles.bee1}`}>
        <BeeIcon />
      </div>
      <div className={`${styles.bee} ${styles.bee2}`}>
        <BeeIcon />
      </div>
      <div className={`${styles.bee} ${styles.bee3}`}>
        <BeeIcon />
      </div>
    </div>
  );
}

function BeeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Body */}
      <ellipse cx="12" cy="14" rx="5" ry="6" fill="var(--color-primary)" />
      {/* Stripes */}
      <path d="M8 12h8M8 15h8" stroke="var(--color-accent)" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="12" cy="7" r="3" fill="var(--color-primary)" />
      {/* Wings */}
      <ellipse cx="7" cy="11" rx="3" ry="2" fill="var(--color-card-bg)" opacity="0.8" />
      <ellipse cx="17" cy="11" rx="3" ry="2" fill="var(--color-card-bg)" opacity="0.8" />
      {/* Antennae */}
      <path d="M10 5L8 3M14 5L16 3" stroke="var(--color-accent)" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
