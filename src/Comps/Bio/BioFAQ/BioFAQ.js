import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import s from './BioFAQ.module.scss';

export default function BioFAQ() {

  // TODO:
  // Define questions items
  // render items linked to answer pages.
  // perhaps make is an object state.

  const [revealAnswer, setRevealAnswer] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(false);

  const faqItems = [
    {
      q: "What's your favourite video game?",
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      q: "Which holiday do you look forward to the most?",
      a: 'This is the answer.'
    },
    {
      q: 'Are you a sports fan?',
      a: 'This is the answer.'
    },
    {
      q: 'If you could live anywhere, where would it be?',
      a: 'This is the answer.'
    },
    {
      q: 'Do you believe in aliens?',
      a: 'This is the answer.'
    },
    {
      q: 'Do you prefer PC or console gaming?',
      a: 'This is the answer.'
    }
  ];

  function onFaqSelect(key) {
    setRevealAnswer(true);
    setActiveFAQ(key);
    console.log(key);
  }

  function renderFaqItem() {
    return faqItems.map((item, key) => {

      const question = item.q;

      return (
        <li key={key} className={s.listItemContainer}>
          <button className={s.faqCTA} onClick={onFaqSelect.bind(this, key)}>
            <span className={s.number}>{key + 1}. </span>{question}
          </button>
        </li>
      );
    });
  }

  function renderQuestionsPage() {
    return (
      <Fragment>
        <ul className={s.listContainer}>
          {renderFaqItem()}
        </ul>
      </Fragment>
    );
  }

  function renderAnswerPage() {
    const { q, a } = faqItems[activeFAQ];

    return (
      <div className={s.revealSection}>
        <h2 className={s.subHeader}>QUESTION</h2>
        <p className={s.textContent}>{q}</p>
        <h2 className={s.subHeader}>ANSWER</h2>

        <div className={s.textContent_Bottom}>
          <p className={s.textContent}>{a}</p>
        </div>

        <div className={s.buttonContainer}>
          <button className={s.goBackButton} onClick={goBack}>Ask another question</button>
        </div>
      </div>
    )
  }

  function renderContents() {
    if(revealAnswer) {
      return renderAnswerPage();
    }

    return renderQuestionsPage();
  }

  function goBack() {
    setRevealAnswer(false);
    setActiveFAQ(false);
  }

  return (
    <section className={s.container}>
      <div className={s.widget}>
        <h1 className={s.mainHeader}>ASK ME QUESTIONS</h1>
        <p className={s.subText}><small>(click to select)</small></p>
        {renderContents()}
      </div>
    </section>
  );
}