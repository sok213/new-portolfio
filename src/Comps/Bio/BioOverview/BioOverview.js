import React, { Fragment, useState } from 'react';
import s from './BioOverview.module.scss';

export default function BioOverview() {

  return (
    <div className={s.container}>
      <p className={s['default-p']}>Hey,</p>
      <h1 className={s.strongText}>
        I'm Sophanarith Sok.
      </h1>
      <h2 className={s.subtext}>It is a long name, so just call me <em>Soak</em>.</h2>
      <p className={s.textBody}>Officia esse et quis reprehenderit. Proident laboris do voluptate Lorem. Adipisicing ullamco et veniam est amet consectetur. Officia minim labore excepteur aute irure do eu laborum. Ex incididunt exercitation do adipisicing occaecat. Exercitation exercitation nulla pariatur cupidatat dolor non.</p>
    </div>
  )
}
