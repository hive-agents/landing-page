import { ThemeToggle } from './ThemeToggle';
import { useCopy } from '../hooks/useCopy';
import logoSvg from '../assets/logo.svg';
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
          <img src={logoSvg} alt="" width="32" height="32" className={styles.logoIcon} />
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
