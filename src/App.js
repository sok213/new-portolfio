import React from 'react';
import s from './App.module.scss';
import 'animate.css';

// Sections Components.
import NavBar from './Comps/NavBar/NavBar';
import Bio from './Comps/Bio/Bio';
import Contact from './Comps/Contact/Contact';
import Projects from './Comps/Projects/Projects';
import Skills from './Comps/Skills/Skills';
import Footer from './Comps/Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  console.log('Hey, stop peaking in here.')

  return (
    <div className={`${s.mainContainer} animate__animated animate__fadeIn`}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/bio" replace />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/qa" element={<Contact />} />
        {/* Fallback redirect for unknown routes */}
        <Route path="*" element={<Navigate to="/bio" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
