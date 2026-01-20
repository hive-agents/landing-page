import { useTheme } from './hooks/useTheme';
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

  return (
    <>
      <BeeAnimation />
      <Header theme={theme} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <TwoOptions />
        <HowItWorks />
        <Capabilities />
        <WhoItsFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
