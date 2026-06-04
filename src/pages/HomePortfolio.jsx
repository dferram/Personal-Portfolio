import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CurrentRole from '@/components/CurrentRole';
import GitHubStats from '@/components/GitHubStats';
import Contact from '@/components/Contact';

export default function PortfolioHome() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <CurrentRole />
      <GitHubStats />
      <Contact />
    </>
  );
}
