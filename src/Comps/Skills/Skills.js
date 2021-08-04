import React, { Component, useState } from 'react';
import s from './Skills.module.scss';

export default function Skills() {

  const skills = [
    {
      header: 'Development',
      skillListItems: [
        'JavaScript/jQuery/ES6',
        'PHP',
        'ReactJS/MobX/Hooks/Redux',
        'HTML Emails (using proper tables structure)',
        'PSD to HTML Conversion'
      ]
    },
    {
      header: 'Design',
      skillListItems: [
        'Adobe XD/PhotoShop',
        'Responsive/Mobile Design',
        'WireFraming',
        'Light Photo Editing'
      ]
    },
    {
      header: 'Misc',
      skillListItems: [
        '80WPM Typing Speed',
        'Self Motivated',
        'Magento CMS',
        'Video Editing/Adobe Premiere',
        'Customer Service/Intercom',
        'Jira Software/Ticket Creation/Kanban Board management',
        'Writer/Content Creator',
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
          <h3>{header}</h3>
          <ul className={s.listContainer}>
            {skillListItems.map(item =>{
              return (
                <li>
                  <p>{item}</p>
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
