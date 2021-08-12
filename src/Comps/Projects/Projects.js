import React, { Component } from 'react';
import s from './Projects.module.scss';

export default function Projects() {

  const projects = [
    {
      title: 'Some Digital Agency',
      desc: 'Sint officia veniam et dolore dolore esse ad ut ut magna laboris fugiat sunt consequat. Nulla ad ea ex quis ea elit sit ea. Ea enim officia qui minim incididunt magna qui occaecat duis Lorem et. Nulla culpa irure et id excepteur tempor excepteur consequat.',
      link: '#',
      thumbnail: '../Assets/test.jpg',
      source_code: '#'
    },
    {
      title: 'HTML Emails',
      desc: 'Ea enim officia qui minim incididunt magna qui occaecat duis Lorem et. Nulla culpa irure et id excepteur tempor excepteur consequat. Excepteur mollit laborum voluptate consequat nostrud officia nisi velit',
      link: '#',
      thumbnail: '',
      source_code: '#'
    },
    {
      title: 'Video Game',
      desc: 'Ea enim officia qui minim incididunt magna qui occaecat duis Lorem et. Nulla culpa irure et id excepteur tempor excepteur consequat. Excepteur mollit laborum voluptate consequat nostrud officia nisi velit',
      link: '#',
      thumbnail: '',
      source_code: '#'
    }
  ];

  function renderProjects() {

    return projects.map(item => {
      const {
        title,
        desc
      } = item;

      return (
        <div className={s.projectCardContainer}>
          <div className={s.card}>
            <div className={s.header}>
              <h3>{title}</h3>
            </div>
          </div>
          <div className={s.desc}>
            <p>{desc}</p>
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
