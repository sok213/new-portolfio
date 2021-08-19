import React, { Component } from 'react';
import s from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <div className={s['footer-container']}>
      <a 
        href="https://www.linkedin.com/in/sophanarith-sok-a50097b7/"
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={faLinkedin} 
          className={s.link} 
        />
      </a>
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
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={faFacebookSquare} 
          className={s.link} 
        />
      </a>
    </div>
  );
}