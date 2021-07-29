import React, { Fragment, Component } from 'react';
import BioOverview from './BioOverview/BioOverview';
import BioFAQ from './BioFAQ/BioFAQ';
import s from './Bio.module.scss';

export default function Bio() {

  return (
    <Fragment>
      <div className={s.container}>
        <BioOverview />
        <BioFAQ />
      </div>
    </Fragment>
  );
}
