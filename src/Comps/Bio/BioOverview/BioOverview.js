import React from 'react';
import s from './BioOverview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import audio from '../../../Assets/soak.mp3';

export default function BioOverview() {

  const namePronounciation = new Audio(audio);

  function playAudio() {
    namePronounciation.play();
  }

  return (
    <div className={s.container}>
      <audio></audio>
      <p className={s['default-p']}>Hi,</p>
      <h1 className={s.strongText}>
        I'm Sophanarith Sok.
      </h1>
      <h2 className={s.subtext}>It is a long name, so just call me <em>Soak (/sōk/)</em><FontAwesomeIcon icon={faVolumeDown} className={s.volumeIcon} onClick={playAudio}/>.</h2>
      <p className={s.textBody}>I consider myself to be a technology enthusiast by heart and a web developer by trade. I am based in Los Angeles, California where I was born and raised. I love building web applications and modern user-experiences using the JavaScript programming language along with various server-side and front-end frameworks/libraries such as React and Node. I enjoy learning about the tools that make up the web and sharing my knowledge with others. I create music as a hobby and I am always striving to become the best version of myself!</p>
    </div>
  )
}
