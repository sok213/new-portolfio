import React, { Component } from 'react';
import s from './Contact.module.scss';
import BioFAQ from './../Bio/BioFAQ/BioFAQ';

export default function Contact() {

  return (
    <div className={`${s.container} animate__animated animate__fadeIn`}>
      <BioFAQ />
    </div>
  );
}
