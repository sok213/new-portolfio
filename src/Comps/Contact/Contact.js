import React, { Component } from 'react';
import s from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faPaperPlane, faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

  // Formspree hook states.
  const [ state, handleSubmit ] = useForm('xrgryrrn');

  if (state.succeeded) {
    return (
      <div className={s.container}>
        <div className={s.successMsg}>
          <p>Thank you for reaching out! <br></br> You will hear back from me shortly.</p>
          <FontAwesomeIcon icon={faSmileBeam} className={s.smileyFace} />
        </div>
      </div>
    );
  }
  
  return (
    <div className={`${s.container} animate__animated animate__fadeIn`}>

      <div className={s.headerContainer}>
        <h1>Get in Touch! <FontAwesomeIcon icon={faEnvelopeOpenText} className={s.speechBubble} /></h1>
        <p>Contact me by filling out the form below along with a message. Messages are sent directly to my email and I check them regularly. You can expect to hear back from me in 1-3 days. :)</p>
      </div>

      <form 
        className={s.formContainer} 
        onSubmit={handleSubmit}
      >
        <div className={s.formContents}>
          <label htmlFor="email">
            Name
          </label>
          <input
            className={s.activeInput}
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
            className={s.activeInput}
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
            className={s.activeInput}
            id="message"
            name="message"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <div className={s.buttonContainer}>
            <button type="submit" disabled={state.submitting}>
              <p>SEND <FontAwesomeIcon icon={faPaperPlane} className={s.paperPlane} /></p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
