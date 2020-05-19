import React from 'react';

import RecipeItem from './RecipeItem/RecipeItem';
import classes from './ReadyRecipes.module.css';

const readyRecipes = (props) => (
  <div className={classes.ReadyRecipes}>
    <RecipeItem name="Chicken and Noodles" />
    <RecipeItem name="Burrito Bowls" />
    <RecipeItem name="Tater-tot Casserole" />
  </div>
);

export default readyRecipes;