import React, { Fragment } from 'react';

import classes from './Modal.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const modal = (props) => {
  return (
    <Fragment>
      <Backdrop clicked={props.show} />
      <div className={classes.Modal}>{props.children}</div>
    </Fragment>
  );
};

export default modal;
