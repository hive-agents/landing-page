import { ThemeToggle } from './ThemeToggle';
import { useCopy } from '../hooks/useCopy';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
}

export function Header({ theme, onThemeToggle }: HeaderProps) {
  const copy = useCopy();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={styles.logoIcon}
          >
            <path
              d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
              fill="var(--color-primary)"
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
            <path
              d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z"
              fill="var(--color-background)"
            />
          </svg>
          <span className={styles.logoText}>hive</span>
        </a>

        <nav className={styles.nav}>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <a href="#waitlist" className="btn btn-primary">
            {copy.hero.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
