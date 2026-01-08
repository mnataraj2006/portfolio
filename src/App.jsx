import { useState } from 'react'
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

import Contact from './components/Contact';
import './App.css'

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Projects />

        <Contact />
      </main>
    </div>
  )
}

export default App
