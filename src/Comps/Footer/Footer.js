import React, { Component } from 'react';
import s from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

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
        href="https://github.com/sok213/new-portolfio"
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={faGithub} 
          className={s.link} 
        />
      </a>
      <a 
        href="https://blog.paralect.com/post/3-ux-design-trends-are-hurting-your-online-business"
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={faNewspaper} 
          className={s.link} 
        />
      </a>
    </div>
  );
}