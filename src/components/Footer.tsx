import logoSvg from '../assets/logo.svg';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo}>
            <img src={logoSvg} alt="" width="24" height="24" />
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
