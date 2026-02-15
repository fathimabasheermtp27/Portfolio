import React from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('about');

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070b14] via-[#0f172a] to-[#0b1220]">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-[rgba(255,255,255,0.12)] py-8 text-center text-[#9ca3af] text-sm mt-20">
        <p>© 2026 Fathima Basheer MTP. All rights reserved.</p>
      </footer>
    </div>
  );
};
