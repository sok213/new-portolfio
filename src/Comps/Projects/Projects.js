import React, { Component, Fragment } from 'react';
import s from './Projects.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faBuilding, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';
import thumbnail_1 from './../../Assets/thumbnail_1.jpg';
import thumbnail_2 from './../../Assets/pol-thumbnail.jpg';
import thumbnail_3 from './../../Assets/teddy-thumb.jpg';
import thumbnail_4 from './../../Assets/flyer.JPG';
import thumbnail_5 from './../../Assets/element115_thumbnail.jpg';
import thumbnail_6 from './../../Assets/ewtx.jpg';

export default function Projects() {

  const personalProjects = [
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
      title: 'Element 115 Whiskey Co.',
      desc: 'A fictional alien whiskey website showcasing multiple responsive pages with dynamic animations. Designed in Figma and built with Node, React, Flexbox, and Sass.',
      link_source: 'https://github.com/sok213/element115-whiskey/tree/master/src',
      link_project: 'https://element115whiskey.com/',
      thumbnail: thumbnail_5,
      top: '190px',
      icon: faBuilding,
      width: 320
    }  
  ];

  const workProjects = [
    {
      title: 'People of Leisure',
      desc: 'A Shopify website. I was responsible for revamping the theme with improved grid styling, improved homepage layout, mobile optimization, and uploading and merching of product catalog.',
      link_project: 'https://peopleofleisure.co/',
      thumbnail: thumbnail_2,
      icon: faEnvelope,
      top: '201px',
      width: 250
    },
    {
      title: 'Teddy Headwear',
      desc: 'A Shopify website that I helped launch from the ground up. I was responsible for adjusting theme and uploading and merching of product catalog, creating collections, writing and publishing blog posts, and creating all pages within the website.',
      link_project: 'https://teddyheadwear.com/',
      thumbnail: thumbnail_3,
      icon: faCode,
      top: '193px',
      width: 220
    },
    {
      title: 'Edgewisetx Clinical Trials Page',
      desc: 'As a supporting developer, I built the clinical trials accordion component using jQuery and Bootstrap version 3.4 along with some custom CSS. Built within a legacy CMS framework.',
      link_project: 'https://edgewisetx.com/clinical-trials',
      thumbnail: thumbnail_6,
      icon: faCode,
      top: '193px',
      width: 370
    }  
  ]

  function renderPersonalProjects() {

    return personalProjects.map((item, key) => {
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

  function renderWorkProjects() {

    return workProjects.map((item, key) => {
      const {
        title,
        desc,
        width,
        icon,
        top,
        left,
        thumbnail,
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
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <Fragment>
      <div className={`${s.projectsSeparater} animate__animated animate__fadeIn`}>
        <h3>PERSONAL PROJECTS</h3>
      </div>
      <div className={s.container}>
        <div className={s.projectsContainer}>
          {renderPersonalProjects()}
        </div>
      </div>
      <div className={`${s.projectsSeparater} animate__animated animate__fadeIn`}>
        <h3>REAL WORK PROJECTS</h3>
      </div>
      <div className={s.container}>
        <div className={s.projectsContainer}>
          {renderWorkProjects()}
        </div>
      </div>
    </Fragment>
  );
}
