import { useCopy } from '../hooks/useCopy';
import styles from './HowItWorks.module.css';

export function HowItWorks() {
  const copy = useCopy();

  return (
    <section className="section">
      <div className="container">
        <h2 className={`text-center ${styles.headline}`}>
          {copy.howItWorks.headline}
        </h2>

        <div className={styles.flows}>
          <div className={styles.flow}>
            <h3 className={styles.flowTitle}>Managed</h3>
            <div className={styles.steps}>
              {copy.howItWorks.managed.map((item, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>{item.step}</h4>
                    <p className={styles.stepDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.divider} />

          <div className={styles.flow}>
            <h3 className={styles.flowTitle}>Self-hosted</h3>
            <div className={styles.steps}>
              {copy.howItWorks.selfHosted.map((item, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>{item.step}</h4>
                    <p className={styles.stepDescription}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
