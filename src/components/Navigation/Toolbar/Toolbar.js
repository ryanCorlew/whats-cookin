import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.module.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/inventory">INVENTORY</NavLink>
        <NavLink to="recipes">RECIPES</NavLink>
      
    </header>
  );
};

export default toolbar;