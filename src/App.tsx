import { useTheme } from './hooks/useTheme';
import { useIsMinimalVariant } from './hooks/useCopy';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BeeAnimation } from './components/BeeAnimation';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { TwoOptions } from './components/TwoOptions';
import { HowItWorks } from './components/HowItWorks';
import { Capabilities } from './components/Capabilities';
import { WhoItsFor } from './components/WhoItsFor';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const isMinimal = useIsMinimalVariant();

  return (
    <>
      <BeeAnimation />
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        {!isMinimal && <Problem />}
        {!isMinimal && <Solution />}
        <TwoOptions />
        {!isMinimal && <HowItWorks />}
        {!isMinimal && <Capabilities />}
        {!isMinimal && <WhoItsFor />}
        {!isMinimal && <FAQ />}
        {!isMinimal && <FinalCTA />}
      </main>
      <Footer />
    </>
  );
}

export default App;
