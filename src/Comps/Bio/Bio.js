import React, { Fragment, Component } from 'react';
import BioOverview from './BioOverview/BioOverview';
import s from './Bio.module.scss';

export default function Bio() {

  return (
    <Fragment>
      <div className={`${s.container} animate__animated animate__fadeIn`}>
        <BioOverview />
      </div>
    </Fragment>
  );
}
