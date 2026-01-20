import { useCopy } from '../hooks/useCopy';
import styles from './Solution.module.css';

export function Solution() {
  const copy = useCopy();

  return (
    <section className="section">
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>{copy.solution.headline}</h2>
          <ul className={styles.features}>
            {copy.solution.features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <span className={styles.checkIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
