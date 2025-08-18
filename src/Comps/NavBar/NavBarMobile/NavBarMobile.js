import React from 'react';
import s from './NavBarMobile.module.scss';
import { NavLink } from 'react-router-dom';

export default function NavBarMobile(props) {

  const {
    toggle,
    links,
  } = props;

  function toPath(label) {
    const lower = label.toLowerCase();
    if (lower === 'bio') return '/bio';
    if (lower === 'skills') return '/skills';
    if (lower === 'projects') return '/projects';
    if (lower === 'qa') return '/qa';
    return '/';
  }

  function renderNavItem() {
    return links.map((link, key) => {
      return (
        <NavLink 
          key={key}
          to={toPath(link)}
          className={({ isActive }) => `${s.listItem} ${isActive ? s.activeTab : ''}`}
        >
          {link}
        </NavLink>
      );
    });
  }

  return (
    <div 
      className={`${s.container} ${ toggle && s.active }`} 
    >
      <li className={`${s.listContainer} ${ toggle && s.active }`}>
        <div className={`${s.innerContainer} ${ toggle && s.active }`}>
          {renderNavItem()}
        </div>
      </li>
    </div>
  );
}
