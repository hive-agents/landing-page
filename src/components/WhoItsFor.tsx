import { useCopy } from '../hooks/useCopy';
import styles from './WhoItsFor.module.css';

export function WhoItsFor() {
  const copy = useCopy();

  return (
    <section className="section">
      <div className="container">
        <h2 className={`text-center ${styles.headline}`}>
          {copy.whoItsFor.headline}
        </h2>

        <div className={`grid grid-3 ${styles.personas}`}>
          {copy.whoItsFor.personas.map((persona, index) => (
            <div key={index} className={`card ${styles.persona}`}>
              <div className={styles.iconWrapper}>
                <PersonaIcon index={index} />
              </div>
              <h3 className={styles.personaTitle}>{persona.title}</h3>
              <p className={styles.personaDescription}>{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonaIcon({ index }: { index: number }) {
  const icons = [
    // Developer
    <svg key={0} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M12 10L6 16L12 22M20 10L26 16L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Team
    <svg key={1} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="14" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M10 26C10 22.6863 12.6863 20 16 20C19.3137 20 22 22.6863 22 26" stroke="currentColor" strokeWidth="2" />
      <path d="M4 26C4 23.7909 5.79086 22 8 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 26C28 23.7909 26.2091 22 24 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Hobbyist
    <svg key={2} width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 6L18.47 11.77L24.73 12.36L20 16.53L21.41 22.64L16 19.27L10.59 22.64L12 16.53L7.27 12.36L13.53 11.77L16 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>,
  ];

  return (
    <span className={styles.icon}>
      {icons[index % icons.length]}
    </span>
  );
}
