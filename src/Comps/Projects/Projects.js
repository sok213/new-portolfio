import React, { Component, Fragment } from 'react';
import s from './Projects.module.scss';
import thumbnail_1 from './../../Assets/thumbnail_1.jpg';
// import thumbnail_2 from './../../Assets/pol-thumbnail.jpg';
// import thumbnail_3 from './../../Assets/teddy-thumb.jpg';
import thumbnail_4 from './../../Assets/scamai.jpg';
import thumbnail_5 from './../../Assets/element115_thumbnail.jpg';
import thumbnail_8 from './../../Assets/thumbnail_8.jpg';
import thumbnail_7 from './../../Assets/ss-thumbnail.jpg';

export default function Projects() {

  const personalProjects = [
    {
      title: 'Shopify Countdown App',
      desc: 'A fully customizable countdown-banner widget that Shopify merchants install in seconds to drive flash-sale conversions.',
      link_source: '',
      link_project: 'https://apps.shopify.com/supreme-countdown-hero-banner',
      thumbnail: thumbnail_8,
      top: '193px',
      width: 300,
      techStack: [
        'Shopify Liquid',
        'HTML/CSS',
        'JavaScript',
        'GraphQL'
      ]
    },
    {
      title: 'SalarySalmon',
      desc: 'A lightweight fintech web app that quickly caculates the taxes and cost-of-living in a U.S state based on your salary.',
      link_source: '',
      link_project: 'https://salarysalmon.vercel.app/',
      thumbnail: thumbnail_7,
      top: '193px',
      width: 250,
      techStack: [
        'NextJS',
        'React',
        'Typescript',
        'TailwindCSS'
      ]
    },
    {
      title: 'ScamAi',
      desc: 'A parody landing page of a modern A.I focused startup company that strives to be an advanced SAAS tool for scamming people.',
      link_source: 'https://github.com/sok213/ScamAI/tree/master',
      link_project: 'https://scam-ai-szaq.vercel.app/',
      thumbnail: thumbnail_4,
      top: '193px',
      width: 150,
      techStack: [
        'Astro Framework',
        'TailwindCSS',
        'JavaScript'
      ]
    },
    {
      title: 'Some Digital Agency',
      desc: 'A satirical landing page that pokes fun at digital agencies. Project was built with React using Class components and Flexbox for responsive UI.',
      link_source: 'https://github.com/sok213/some-digital-agency',
      link_project: 'https://www.digitalagenciesbelike.com/',
      thumbnail: thumbnail_1,
      top: '190px',
      width: 320,
      techStack: [
        'React',
        'Flexbox',
      ]
    },
    {
      title: 'Element 115 Whiskey Co.',
      desc: 'A fictional alien whiskey website showcasing multiple responsive pages with dynamic animations. Designed in Figma and built with Node, React, Flexbox, and Sass.',
      link_source: 'https://github.com/sok213/element115-whiskey/tree/master/src',
      link_project: 'https://element115whiskey.com/',
      thumbnail: thumbnail_5,
      top: '190px',
      width: 320,
      techStack: [
        'React',
        'Flexbox'
      ]
    }  
  ];

  // const workProjects = [
  //   {
  //     title: 'People of Leisure',
  //     desc: 'A Shopify website in which I was involved in revamping the theme, improve mobile optimization, and uploading and merching of product catalog.',
  //     link_project: 'https://peopleofleisure.co/',
  //     thumbnail: thumbnail_2,
  //     top: '201px',
  //     width: 250,
  //     techStack: [
  //       'Shopify',
  //       'HTML/CSS'
  //     ]
  //   },
  //   {
  //     title: 'Teddy Headwear',
  //     desc: 'A Shopify website that I helped launch from the ground up. I assisted with theme edits, navigation development, and catalog.',
  //     link_project: 'https://teddyheadwear.com/',
  //     thumbnail: thumbnail_3,
  //     top: '193px',
  //     width: 220,
  //     techStack: [
  //       'Shopify',
  //       'HTML/CSS'
  //     ]
  //   }
  // ]

  function renderTechTags(tags) {
    return tags.map(tag => {
      return(
        <div className={s.tagItem}>
          {tag}
        </div>
      )
    });
  }

  function renderPersonalProjects() {

    return personalProjects.map((item, key) => {
      const {
        title,
        desc,
        width,
        thumbnail,
        link_source,
        link_project,
        techStack
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
          </div>
          <div className={s.desc}>
            <div className={s.infoContainer}>
              <p className={s.info}>{desc}</p>
            </div>

            <div className={s.linksContainer}>
              <span className={s.boldMe}>Technology Stack:</span>
              <div className={s.techStackTags}>
                {renderTechTags(techStack)}
              </div>
              <span className={s.boldMe}>Project Links:</span>
              <div className={s.projectLinks}>
                <a href={link_project} target="_blank" className={`${s.button} ${s.button__info}`}>View Project</a>
                {
                  key > 1 && 
                  <a href={link_source}  target="_blank" className={`${s.button} ${s.button__dark}`}>View Source Code</a> 
                }
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  // function renderWorkProjects() {

  //   return workProjects.map((item, key) => {
  //     const {
  //       title,
  //       desc,
  //       width,
  //       icon,
  //       top,
  //       left,
  //       thumbnail,
  //       link_project,
  //       techStack
  //     } = item;

  //     return (
  //       <div 
  //         key={key} 
  //         className={`${s.projectCardContainer} animate__animated animate__fadeIn`
  //       }>
  //         <div className={s.header} style={{ width }} >
  //           <h3>{title}</h3>
  //         </div>
  //         <div className={s.card} style={{ backgroundImage: `url(${thumbnail})` }}>
  //         </div>
  //         <div className={s.desc}>
  //           <div className={s.infoContainer}>
  //             <p className={s.info}>{desc}</p>
  //           </div>
  //           <span className={s.boldMe}>Technology Stack:</span>
  //           <div className={s.techStackTags}>
  //             {renderTechTags(techStack)}
  //           </div>
  //           <span className={s.boldMe}>Project Links:</span>
  //           <div className={s.projectLinks}>
  //             <a 
  //               href={link_project} 
  //               target="_blank" 
  //               className={`${s.button} ${s.button__info}`}
  //             >
  //               View Project
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }

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
      {/* <div className={`${s.projectsSeparater} animate__animated animate__fadeIn`}>
        <h3>REAL WORK PROJECTS</h3>
      </div>
      <div className={s.container}>
        <div className={s.projectsContainer}>
          {renderWorkProjects()}
        </div>
      </div> */}
    </Fragment>
  );
}
