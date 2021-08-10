import React, { Component } from 'react';
import s from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  return (
    <div className={s['footer-container']}>
      <FontAwesomeIcon icon={faGithub} className={s.link} />
      <FontAwesomeIcon icon={faLinkedin} className={s.link} />
    </div>
  );
}