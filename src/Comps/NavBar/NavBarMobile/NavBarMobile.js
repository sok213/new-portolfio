import React, { useState } from 'react';
import s from './NavBarMobile.module.scss';

export default function NavBarMobile(props) {

  const {
    toggle,
    links
  } = props;

  function renderNavItem() {
    return links.map((link, key) => {
      return (
        <li key={key} className={s.listItem}>
          <button>{link}</button>
        </li>
      )
    });
  }

  return (
    <div 
      className={`${s.container} ${ toggle && s.active }`} 
    >
      <ul className={s.listContainer}>
        {/* {renderNavItem()} */}
      </ul>
    </div>
  );
}