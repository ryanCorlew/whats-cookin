import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import ReadyRecipes from "../../components/ReadyRecipes/ReadyRecipes";
import Inventory from "../../components/Inventory/Inventory";
import Recipes from "../../components/Recipes/Recipes";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Toolbar />
        <Switch>
          <Route path="/inventory" component={Inventory} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/" component={ReadyRecipes} />
        </Switch>
      </Fragment>
    );
  }
}

export default Home;
