import React, { Component, useState, useEffect } from 'react';
import s from './Skills.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDraftingCompass, faLaptopCode, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {

  const skills = [
    {
      header: 'DEVELOPMENT',
      transitionAnimation: 'fadeInLeft',
      icon: faLaptopCode, 
      skillListItems: [
        'JavaScript/jQuery/ES6',
        'Node',
        'ReactJS/MobX/Hooks/Redux',
        'Flexbox/Bootstrap',
        'GIT/Version Control',
        'HTML Emails (using proper tables structure)',
        'PSD to HTML Conversion',
        'PHP'
      ]
    },
    {
      header: 'DESIGN',
      transitionAnimation: setAnimationClass(),
      icon: faDraftingCompass, 
      skillListItems: [
        'Adobe XD/PhotoShop',
        'Responsive/Mobile Design',
        'WireFraming',
        'Light Photo Editing'
      ]
    },
    {
      header: 'MISC',
      transitionAnimation: setAnimationClass2(),
      icon: faLightbulb,
      skillListItems: [
        '80WPM Typing Speed',
        'Magento CMS',
        'Video Editing/Adobe Premiere',
        'Intercom Customer Support',
        'Jira Software/Ticket Creation/Kanban Board management',
        'Writer/Content Creator',
        'Self Motivated',
        'Friendly'
      ]
    }
  ];

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  function setAnimationClass() {

    if(getWindowDimensions() >= 1200) {
      return 'fadeInDown';
    }

    return 'fadeInRight';
  }

  function setAnimationClass2() {

    if(getWindowDimensions() >= 1200) {
      return 'fadeInRight';
    }

    return 'fadeInLeft';
  }


  function renderSkillCards() {

    return skills.map((skillCard, key) => {

      const {
        header, 
        skillListItems,
        transitionAnimation,
        icon
      } = skillCard;

      return (
        <div key={key} className={`
            ${s.skillCard} 
            animate__animated animate__${transitionAnimation}
        `}>
          <div className={s.headerCardContainer}>
            <h3><FontAwesomeIcon icon={icon} className={s.headerIcon} />{header}</h3>
          </div>
          <ul className={s.listContainer}>
            {skillListItems.map((item, key) =>{
              return (
                <li key={key}>
                  <p className={s.listContent}>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  return (
    <div className={s.container}>
      {renderSkillCards()}
    </div>
  );
}
