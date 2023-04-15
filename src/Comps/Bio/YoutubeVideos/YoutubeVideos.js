import React, { Fragment, Component } from 'react';
import s from './YoutubeVideos.module.scss';

export default function YoutubeVideos() {

  return (
    <div className={s.container}>
      <h2 className={s.header}>Portfolio Walkthrough</h2>
      <iframe src="https://www.youtube.com/embed/acZ_qoYscw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
}
