import { useCopy } from '../hooks/useCopy';
import styles from './Capabilities.module.css';

export function Capabilities() {
  const copy = useCopy();

  return (
    <section className={`section section-alt`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.headline}>{copy.capabilities.headline}</h2>
          <p className={styles.subheadline}>{copy.capabilities.subheadline}</p>
        </div>

        <div className={`grid grid-3 ${styles.features}`}>
          {copy.capabilities.features.map((feature, index) => (
            <div key={index} className={`card ${styles.feature}`}>
              <div className={styles.iconWrapper}>
                <FeatureIcon index={index} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ index }: { index: number }) {
  const icons = [
    // Run any framework
    <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8 3L4 7L8 11M16 13L20 17L16 21M14 3L10 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // Deploy webapps
    <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M2 12H22M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="2" />
    </svg>,
    // Persistent storage
    <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12" stroke="currentColor" strokeWidth="2" />
    </svg>,
    // Network access
    <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
    </svg>,
    // MCP integration
    <svg key={4} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H3M21 12H19M12 5V3M12 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 10H14M10 14H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>,
    // Secure by default
    <svg key={5} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6V11C4 16.55 7.84 21.74 12 23C16.16 21.74 20 16.55 20 11V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];

  return (
    <span className={styles.icon}>
      {icons[index % icons.length]}
    </span>
  );
}
