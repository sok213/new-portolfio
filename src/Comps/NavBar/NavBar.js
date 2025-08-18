import React, { useEffect, useState } from 'react';
import s from './NavBar.module.scss';
import NavBarMobile from './NavBarMobile/NavBarMobile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const [navBarMobileToggle, setNavBarMobileToggle] = useState(false);

  const {
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

  function toPath(label) {
    const lower = label.toLowerCase();
    if (lower === 'bio') return '/bio';
    if (lower === 'skills') return '/skills';
    if (lower === 'projects') return '/projects';
    if (lower === 'qa') return '/qa';
    return '/';
  }

  function renderNavLinks() {
    return links.map((link, key) => {
      return (
        <li key={key}>
          <NavLink
            to={toPath(link)}
            className={({ isActive }) => `${s.buttonItem} ${isActive ? s.activeLink : ''}`}
            onClick={() => setNavBarMobileToggle(false)}
          >
            {link}
          </NavLink>
        </li>
      );
    });
  }

  return (
    <nav className={`${s.container} ${navBarMobileToggle && s.active}`}>
      <div className={s.hamburgerMenuWrapper}>
        <button onClick={toggleDropdown}>
          <FontAwesomeIcon icon={navBarMobileToggle ? faTimes : faEllipsisH} />
        </button>
      </div>
      <NavBarMobile 
        toggle={navBarMobileToggle} 
        links={links} 
      />
      <ul className={s['navbar-ul']}>
        {renderNavLinks()}
      </ul>
    </nav>
  );
}

export default NavBar;
