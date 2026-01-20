import { useCopy } from '../hooks/useCopy';
import styles from './Problem.module.css';

export function Problem() {
  const copy = useCopy();

  return (
    <section className={`section ${styles.problem}`}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>{copy.problem.headline}</h2>
          <p className={styles.body}>{copy.problem.body}</p>
        </div>
      </div>
    </section>
  );
}
