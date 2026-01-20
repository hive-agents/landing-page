import { useState, FormEvent } from 'react';
import { useCopy } from '../hooks/useCopy';
import styles from './WaitlistForm.module.css';

export function WaitlistForm() {
  const copy = useCopy();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Static placeholder - just show success
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="var(--color-primary)" strokeWidth="2" />
            <path
              d="M10 16L14 20L22 12"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className={styles.successTitle}>You're on the list!</h3>
        <p className={styles.successMessage}>
          We'll send you an email when hive is ready. Thanks for your interest!
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className="btn btn-primary">
          {copy.hero.cta}
        </button>
      </div>
      <p className={styles.privacy}>
        We'll only email you about hive. No spam, ever.
      </p>
    </form>
  );
}
