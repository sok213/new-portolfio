import React, { useState, Fragment } from 'react';
import s from './NavBarMobile.module.scss';

export default function NavBarMobile(props) {

  const {
    toggle,
    links,
    setActivePage,
    activePage
  } = props;

  function detectActiveTab(currentLink) {
    if(currentLink === activePage) {
      return s.activeTab;
    }
  }

  function renderNavItem() {

    if(!toggle) {
      return;
    }

    return links.map((link, key) => {
      return (
        <a 
          key={key} 
          className={`${s.listItem} ${detectActiveTab(link)}`} 
          onClick={setActivePage.bind(null, link)}
        >
          {link}
        </a>
      );
    });
  }

  return (
    <div 
      className={`${s.container}`} 
    >
      <li className={`${s.listContainer} ${ toggle && s.active }`}>
        <div className={`${s.innerContainer} ${ toggle && s.active }`}>
          {renderNavItem()}
        </div>
      </li>
    </div>
  );
}