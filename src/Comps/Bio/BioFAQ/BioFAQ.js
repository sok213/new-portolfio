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
      a: 'This is the answer.'
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
        <li key={key} className={s.listItem}>
          <button onClick={onFaqSelect.bind(this, key)}>
            <span>{key + 1}. </span>{question}
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
      <section>
        <h2>QUESTION</h2>
        <p>{q}</p>
        <h2>ANSWER</h2>
        <p>{a}</p>

        <div>
          <button onClick={goBack}>Ask another question</button>
        </div>
      </section>
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
        <h1>Ask me questions</h1>
        <p><small>(click to select)</small></p>
        {renderContents()}
      </div>
    </section>
  );
}