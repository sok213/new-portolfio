import React, { Component, useState } from 'react';
import s from './Skills.module.scss';

export default function Skills() {

  const skills = [
    {
      header: 'DEVELOPMENT',
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
      skillListItems: [
        'Adobe XD/PhotoShop',
        'Responsive/Mobile Design',
        'WireFraming',
        'Light Photo Editing'
      ]
    },
    {
      header: 'MISC',
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

  function renderSkillCards() {

    return skills.map(skillCard => {

      const {
        header, 
        skillListItems
      } = skillCard;

      return (
        <div className={s.skillCard}>
          <div className={s.headerCardContainer}>
            <h3>{header}</h3>
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
