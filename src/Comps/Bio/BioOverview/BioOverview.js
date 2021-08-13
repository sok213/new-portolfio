import React from 'react';
import s from './BioOverview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'

export default function BioOverview() {

  return (
    <div className={s.container}>
      <p className={s['default-p']}>Hey,</p>
      <h1 className={s.strongText}>
        I'm Sophanarith Sok.
      </h1>
      <h2 className={s.subtext}>It is a long name, so just call me <em>Soak (/sōk/)</em><FontAwesomeIcon icon={faVolumeDown} className={s.volumeIcon} />.</h2>
      <p className={s.textBody}>I consider myself to be a technology enthusiast by heart and a web developer by trade. Iam based in Los Angeles, California where I was born and raised. I love building web applications and modern user-experiences using the JavaScript programming language along with various server-side and front-end frameworks/libraries such as React. I enjoy learning about the tools that make up the web and sharing my knowledge with others. I create music as a hobby and I am always striving to become the best version of myself!</p>
    </div>
  )
}
