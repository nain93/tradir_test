import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
