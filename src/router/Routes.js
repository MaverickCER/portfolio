import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Project from "../pages/Project";
import React from "react";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <Router>
      <ScrollTopBehaviour />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/project/:id"
          component={(props) => <Project id={props.match.params.id} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
