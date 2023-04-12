import React, { Fragment, useState } from 'react';
import { render } from 'react-dom';
import s from './BioFAQ.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import questionIcon from './../../../Assets/question_icon.png';

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
      q: 'What makes Web Development enjoyable to you?',
      a: 'I like the idea of taking concepts either from myself or designers and seeing it come to life. Coding to me is fun and I have always had a fascination with art and design, so being able to create user experiences with the fun aspect of coding is what keeps my intriqued in this field.'
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
      q: 'What skill are you currently learning?',
      a: 'I am very intrigued by VR and AR technology and I am currently interested in utilizing AR web APIs in some of my web projects. I believe that VR and AR technology will have a significant impact on the future of how we experience media and entertainment.'
    }
  ];

  function onFaqSelect(key) {
    setRevealAnswer(true);
    setActiveFAQ(key);
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
        <ul className={`${s.listContainer} animate__animated animate__fadeIn`}>
          {renderFaqItem()}
        </ul>
      </Fragment>
    );
  }

  function renderAnswerPage() {
    const { q, a } = faqItems[activeFAQ];

    return (
      <div className={`${s.revealSection} animate__animated animate__fadeIn`}>
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
        <div className={s.iconWrapper}>
          <img src={questionIcon} className={s.questionIcon}/>
        </div>
        <h1 className={s.mainHeader}>ASK ME QUESTIONS</h1>
        <p className={s.subText}><small>(click to select)</small></p>
        {renderContents()}
      </div>
    </section>
  );
}