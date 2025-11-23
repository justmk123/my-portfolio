import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CosmosBackground from './components/CosmosBackground';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-brand-blue selection:text-black scroll-smooth relative">
      <CosmosBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>
    </div>
  );
};

export default App;