import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import s from './BioFAQ.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

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
      a: 'My favourite casual game is Tetris because it’s a great game that I am able to just jump in and begin having fun within seconds. A more modern and recent game that I really enjoyed was Spider-man: Miles Morales on the PS4 because spiderman is an amazing super-hero and the game had great story and web swinging gameplay.'
    },
    {
      q: "Which holiday do you look forward to the most?",
      a: 'My favourite holiday is Halloween because I love horror movies and, in my opinion, Halloween brings out the best events in terms of musical performers, haunt events such as Halloween Horror Nights at Universal, and the atmosphere that October brings to life.'
    },
    {
      q: 'Are you a sports fan?',
      a: 'I am not the biggest sports fan and if you asked me what is my favourite basketball team, I’d probably tell you that it was the Raiders. However, I do enjoy watching the occasional UFC fight every now and then if I recognize someone who is fighting.'
    },
    {
      q: 'If you could live anywhere, where would it be?',
      a: 'I would live in Finland because it is a very beautiful country and according to Google, it is the happiest place on earth. I would like to see for myself if that is true.'
    },
    {
      q: 'Do you believe in aliens?',
      a: 'Yes. There are trillions and trillions of planets out in the universe and it’s nearly impossible that we are the only living things in existence.'
    },
    {
      q: 'Do you prefer PC or console gaming?',
      a: 'I enjoy both. I have a Playstation 4 and a custom-built desktop computer. There are pros and cons to both. I love the ease-of-use, ready-to-play, and out-of-the-box environment that a console provides to gamers, but also dislike the fact that the hardware will quickly become outdated when compared to PC. I love PC for the customizability of one’s computer and the technical advantages that allow for amazing graphics when compared to consoles, but I also hate that you will be expected to spend an extensive amount of time configuring each game to work properly before getting to jump in and play.'
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
        <p className={s.textContent_Q}>{q}</p>
        <h2 className={s.subHeader}>ANSWER</h2>

        <div className={s.textContent_Bottom}>
          <p className={s.textContent}>{a}</p>
        </div>

        <div className={s.buttonContainer}>
          <button 
            className={s.goBackButton} 
            onClick={goBack}
          >
            Ask another question <FontAwesomeIcon icon={faStepBackward} className={s.backIcon} />
          </button>
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