import React, { Component } from 'react';
import s from './Contact.module.scss';

import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  // Formspree hook states.
  const [ state, handleSubmit ] = useForm('xrgryrrn');

  if (state.succeeded) {
    return <div>Thank you for reaching out! You will hear back from me shortly.</div>;
  }



  return (
    <div className={s.container}>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Name
        </label>
        <input
          id="name"
          type="name" 
          name="name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
