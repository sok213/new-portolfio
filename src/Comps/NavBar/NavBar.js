import React, { useEffect, useState } from 'react';
import s from './NavBar.module.scss';
import NavBarMobile from './NavBarMobile/NavBarMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavBar(props) {

  const [navBarMobileToggle, setNavBarMobileToggle] = useState(false);

  const {
    setActivePage,
    activePage
  } = props;

  const links = [
    'Bio',
    'Skills',
    'Projects',
    'QA'
  ];

  function toggleDropdown() {

    if(navBarMobileToggle) {
      setNavBarMobileToggle(false);
    } else {
      setNavBarMobileToggle(true);
    }
  }

  function renderNavLinks() {

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
    <nav className={`${s.container} ${navBarMobileToggle && s.active}`}>
      <div className={s.hamburgerMenuWrapper}>
        <button onClick={toggleDropdown}>
          <FontAwesomeIcon icon={navBarMobileToggle ? faTimes : faBars} />
        </button>
      </div>
      <NavBarMobile 
        toggle={navBarMobileToggle} 
        links={links} 
        setActivePage={setActivePage}
        activePage={activePage}        
      />
      <ul className={s['navbar-ul']}>
        {renderNavLinks()}
      </ul>
    </nav>
  );
}

export default NavBar;
