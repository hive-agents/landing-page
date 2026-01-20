import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
                fill="var(--color-primary)"
              />
              <path
                d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z"
                fill="var(--color-background)"
              />
            </svg>
            <span>hive</span>
          </a>
          <p className={styles.tagline}>
            A home for your AI agents.
          </p>
        </div>

        <div className={styles.links}>
          <a href="https://github.com/get-hive" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:hello@get-hive.dev">
            Contact
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p className={styles.copyright}>
          &copy; {currentYear} hive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
