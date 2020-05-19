import React from 'react';

import classes from './RecipeItem.module.css';

const recipeItem = (props) => (
  <div className={classes.RecipeItem}>
    <p>{props.name}</p>
    <button>Make it!</button>
  </div> 
);

export default recipeItem;