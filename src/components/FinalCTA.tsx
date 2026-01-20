import { useCopy } from '../hooks/useCopy';
import { WaitlistForm } from './WaitlistForm';
import styles from './FinalCTA.module.css';

export function FinalCTA() {
  const copy = useCopy();

  return (
    <section id="waitlist" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>{copy.finalCta.headline}</h2>
          <p className={styles.subheadline}>{copy.finalCta.subheadline}</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
