import React, { Component, Fragment } from 'react';
import s from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBuilding, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import thumbnail_1 from './../../Assets/thumbnail_1.jpg';
import thumbnail_2 from './../../Assets/mail.jpg';
import thumbnail_3 from './../../Assets/npm.jpg';
import thumbnail_4 from './../../Assets/flyer.JPG'

export default function Projects() {

  const projects = [
    {
      title: 'FlyingCowsAreReal',
      desc: 'A community passion project designed as an outdoor objective based quest in which prizes were granted to those who finished. Built on Node, React, and AWS.',
      link_source: 'https://youtu.be/-Ib5q8gdhLQ',
      link_project: 'https://www.flyingcowsarereal.com/',
      thumbnail: thumbnail_4,
      icon: faCode,
      top: '193px',
      width: 250
    },
    {
      title: 'DIGITAL AGENCIES BE LIKE',
      desc: 'A satirical landing page that pokes fun at digital agencies. Project was built with React using Class components and Flexbox for responsive UI.',
      link_source: 'https://github.com/sok213/some-digital-agency',
      link_project: 'https://www.digitalagenciesbelike.com/',
      thumbnail: thumbnail_1,
      top: '190px',
      icon: faBuilding,
      width: 320
    },
    {
      title: 'HTML EMAILS',
      desc: 'A collection of HTML emails that I developed using HTML and CSS, utilizing table elements to showcase my ability to build HTML emails properly.',
      link_source: 'https://github.com/sok213/email-hub',
      link_project: 'https://sok213.github.io/email-hub/',
      thumbnail: thumbnail_2,
      icon: faEnvelope,
      top: '201px',
      width: 190
    },
    {
      title: 'NPM PACKAGE',
      desc: 'A React component wrapped in an NPM package that takes in an array of objects as a prop and generates an accordion. It’s very easy to use and offers 5 pre-built in themes. ',
      link_source: 'https://github.com/sok213/simple-react-accordion',
      link_project: 'https://simple-react-accordion-2021.herokuapp.com/',
      thumbnail: thumbnail_3,
      icon: faCode,
      top: '193px',
      width: 200
    }    
  ];

  function renderProjects() {

    return projects.map((item, key) => {
      const {
        title,
        desc,
        width,
        icon,
        top,
        left,
        thumbnail,
        link_source,
        link_project
      } = item;

      return (
        <div 
          key={key} 
          className={`${s.projectCardContainer} animate__animated animate__fadeIn`
        }>
          <div className={s.header} style={{ width }} >
            <h3>{title}</h3>
          </div>
          <div className={s.card} style={{ backgroundImage: `url(${thumbnail})` }}>
            {/* <div className={s.icon} style={{top, left}}>
              <FontAwesomeIcon icon={icon} />
            </div> */}
          </div>
          <div className={s.desc}>
            <p className={s.info}>{desc}</p>
            <div className={s.projectLinks}>
              <a href={link_project} target="_blank" className={`${s.button} ${s.button__info}`}>View Project</a>
              {key === 0 ?
                <a href={link_source}  target="_blank" className={`${s.button} ${s.button__dark}`}>Video Overview</a>
              : 
                <a href={link_source}  target="_blank" className={`${s.button} ${s.button__dark}`}>View Source Code</a>
              }
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
