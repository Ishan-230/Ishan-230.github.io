// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal'; // 1. Import the new component
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Terminal /> {/* 2. Add it here */}

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;