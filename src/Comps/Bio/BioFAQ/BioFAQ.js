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
      q: 'Is this is a question?',
      a: 'This is the answer.'
    },
    {
      q: 'Is this is a question?',
      a: 'This is the answer.'
    },
    {
      q: 'Is this is a question?',
      a: 'This is the answer.'
    },
    {
      q: 'Is this is a question?',
      a: 'This is the answer.'
    },
    {
      q: 'Is this is a question?',
      a: 'This is the answer.'
    },
    {
      q: 'Is this is a question?',
      a: 'This is the answer.'
    },
    {
      q: 'Is this is a question?',
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
        <li key={key}>
          <button onClick={onFaqSelect.bind(this, key)}>
            {question}
          </button>
        </li>
      );
    });
  }

  function renderQuestionsPage() {
    return (
      <ul>
        {renderFaqItem()}
      </ul>
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
      </section>
    )
  }

  function renderContents() {
    if(revealAnswer) {
      return renderAnswerPage();
    }

    return renderQuestionsPage();
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