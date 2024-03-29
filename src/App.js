import React, { useState } from 'react';
import s from './App.module.scss';
import 'animate.css';

// Sections Components.
import NavBar from './Comps/NavBar/NavBar';
import Bio from './Comps/Bio/Bio';
import Contact from './Comps/Contact/Contact';
import Projects from './Comps/Projects/Projects';
import Skills from './Comps/Skills/Skills';
import Footer from './Comps/Footer/Footer';

function App() {

  console.log('Hey, stop peaking in here.')

  // Define state for active tab. Display page contents depending on
  // what tab is active.
  const [activePage, setActivePage] = useState('Bio');

  function renderActivePage() {
    if(activePage === 'Bio') {
      return <Bio />
    } else if(activePage === 'Skills') {
      return <Skills />
    } else if(activePage === 'Projects') {
      return <Projects />
    } else if(activePage === 'QA') {
      return <Contact />
    }
  }

  return (
    <div className={`${s.mainContainer} animate__animated animate__fadeIn`}>
      {/* Renders the NavBar component. */}
      <NavBar 
        activePage={activePage} 
        {...{setActivePage}}
      />

      {/* Renders the active page based on state. */}
      {renderActivePage()}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
