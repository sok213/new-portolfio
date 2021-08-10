import React, { Component } from 'react';
import s from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <div className={s['footer-container']}>
      <a 
        href="https://github.com/sok213"
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={faGithub} 
          className={s.link} 
        />
      </a>
      <a 
        href="https://www.linkedin.com/in/sophanarith-sok-a50097b7/"
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={faLinkedin} 
          className={s.link} 
        />
      </a>
    </div>
  );
}