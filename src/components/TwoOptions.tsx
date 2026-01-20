import { useCopy } from '../hooks/useCopy';
import styles from './TwoOptions.module.css';

export function TwoOptions() {
  const copy = useCopy();

  return (
    <section className={`section section-alt`}>
      <div className="container">
        <h2 className={`text-center ${styles.headline}`}>
          {copy.twoOptions.headline}
        </h2>
        <div className={`grid grid-2 ${styles.cards}`}>
          <div className={`card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconManaged}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4L26 10V22L16 28L6 22V10L16 4Z"
                    fill="var(--color-primary)"
                  />
                  <path
                    d="M16 10L21 13V19L16 22L11 19V13L16 10Z"
                    fill="var(--color-card-bg)"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{copy.twoOptions.managed.title}</h3>
              <p className={styles.cardSubtitle}>{copy.twoOptions.managed.subtitle}</p>
            </div>
            <ul className={styles.featureList}>
              {copy.twoOptions.managed.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconSelfHosted}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect
                    x="6"
                    y="6"
                    width="20"
                    height="20"
                    rx="2"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M6 12H26M12 12V26M20 12V26"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>{copy.twoOptions.selfHosted.title}</h3>
              <p className={styles.cardSubtitle}>{copy.twoOptions.selfHosted.subtitle}</p>
            </div>
            <ul className={styles.featureList}>
              {copy.twoOptions.selfHosted.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.checkIcon}>
      <path
        d="M13.333 4L6 11.333 2.667 8"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
