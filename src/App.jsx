import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero'; 
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}