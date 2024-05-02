import React from 'react';
import s from './BioOverview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import audio from '../../../Assets/soak.mp3';
import ufo from '../../../Assets/ufo_2.png';

export default function BioOverview() {

  const namePronounciation = new Audio(audio);

  function playAudio() {
    namePronounciation.play();
  }

  return (
    <div className={s.container}>
      <audio></audio>
      <div className={`${s.ufoContainer} animate__animated animate__zoomInDown`}>
        <img className={s.ufoImg} src={ufo}></img>
      </div>
      <p className={s['default-p']}>Hi,</p>
      <h1 className={s.strongText}>
        I'm Sophanarith Sok.
      </h1>
      <h2 className={s.subtext}>It is a long name, so just call me <em>Soak (/sōk/)</em>
        <a onClick={playAudio} href="#"><FontAwesomeIcon icon={faVolumeDown} className={s.volumeIcon}/></a>.
      </h2>
      <p className={s.textBody}>A technology enthusiast by heart and a web developer by trade. I am based in Los Angeles, California where I was born and raised. I love building web applications and modern user-experiences using the JavaScript programming language along with various server-side and front-end frameworks/libraries such as React and Node. I enjoy learning about the tools that make up the web and sharing my knowledge with others. I create music as a hobby and I am always striving to become the best version of myself.</p>
    </div>
  )
}
