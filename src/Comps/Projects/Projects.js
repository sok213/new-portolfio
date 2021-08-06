import React, { Component } from 'react';
import s from './Projects.module.scss';

export default function Projects() {

  const projects = [
    {
      title: 'Project 1',
      desc: 'this is a description'
    },
    {
      title: 'Project 2',
      desc: 'this is a description'
    },
    {
      title: 'Project 3',
      desc: 'this is a description'
    }
  ];

  function renderProjects() {

    return projects.map(item => {
      const {
        title,
        desc
      } = item;

      return (
        <div className={s.projectCard}>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      );
    });
  }

  return (
    <div className={s.container}>
      <h1>Projects</h1>

      <div className={s.projectsContainer}>
        {renderProjects()}
      </div>
    </div>
  );
}
