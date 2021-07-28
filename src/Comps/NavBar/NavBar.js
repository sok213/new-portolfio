import React, { useState } from 'react';
import s from './NavBar.module.scss';

function NavBar(props) {

  const {
    setActivePage,
    activePage
  } = props;

  function renderNavLinks() {
    const links = [
      'Bio',
      'Skills',
      'Projects',
      'Contact'
    ];

    return links.map((link, key) => {
      if(activePage === link) {
        return (
          <li key={key}>
            <button 
              className={[`
                ${s.buttonItem} ${s.activeLink}
              `]}
              onClick={setActivePage.bind(null, link)}  
            >
              {link}
            </button>
          </li>
        ) 
      }

      return (
        <li key={key}>
          <button 
            className={s.buttonItem}
            onClick={setActivePage.bind(null, link)}
          >
            {link}
          </button>
        </li>
      );
    });
  }

  return (
    <nav className={s.container}>
      <ul className={s['navbar-ul']}>
        {renderNavLinks()}
      </ul>
    </nav>
  );
}

export default NavBar;
