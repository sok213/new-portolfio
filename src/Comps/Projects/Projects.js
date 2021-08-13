import React, { Component } from 'react';
import s from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {

  const projects = [
    {
      title: 'Some Digital Agency',
      desc: 'Sint officia veniam et dolore dolore esse ad ut ut magna laboris fugiat sunt consequat. Nulla ad ea ex quis ea elit sit ea. Ea enim officia qui minim incididunt magna qui occaecat duis Lorem et. Nulla culpa irure et id excepteur tempor excepteur consequat.',
      link: '#',
      thumbnail: '../Assets/test.jpg',
      top: '154px',
      icon: faBuilding,
      source_code: '#'
    },
    {
      title: 'HTML Emails',
      desc: 'Ea enim officia qui minim incididunt magna qui occaecat duis Lorem et. Nulla culpa irure et id excepteur tempor excepteur consequat. Excepteur mollit laborum voluptate consequat nostrud officia nisi velit',
      link: '#',
      thumbnail: '',
      icon: faEnvelope,
      top: '163px',
      source_code: '#',
      width: 150
    },
    {
      title: 'Video Game',
      desc: 'Ea enim officia qui minim incididunt magna qui occaecat duis Lorem et. Nulla culpa irure et id excepteur tempor excepteur consequat. Excepteur mollit laborum voluptate consequat nostrud officia nisi velit',
      link: '#',
      thumbnail: '',
      icon: faGamepad,
      top: '165px',
      source_code: '#',
      width: 135
    }
  ];

  function renderProjects() {

    return projects.map(item => {
      const {
        title,
        desc,
        width,
        icon,
        top,
        left
      } = item;

      return (
        <div className={s.projectCardContainer}>
          <div className={s.card}>
            <div className={s.header} style={{ width }} >
              <h3>{title}</h3>
            </div>
            <div className={s.icon} style={{top, left}}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </div>
          <div className={s.desc}>
            <p>{desc}</p>
            <div className={s.projectLinks}>
              <p><a href="#">View Project</a></p>
              <p><a href="#">View Source Code</a></p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={s.container}>
      <div className={s.projectsContainer}>
        {renderProjects()}
      </div>
    </div>
  );
}
