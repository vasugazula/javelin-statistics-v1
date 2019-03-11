import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";

import Index from "views/Index.jsx";
import LandingPage from "views/examples/LandingPage.jsx";
import RegisterPage from "views/examples/RegisterPage.jsx";
import ProfilePage from "views/examples/ProfilePage.jsx";
import StatsPage from "views/StatsPage.jsx";

const properties = {
  weapons: [
    {
      'name': 'Siege Breaker',
      'description': 'Upgraded Whirlwind: Combination of assault and sniper rifles.',
      'special': 'On a hit-streak (3), shots freeze the target.'
    },
    {
      'name': 'Papa Pump',
      'description': 'Upgraded Scattershot: Standard-issue lancer shotgun. ',
      'special': 'Reloading increases force and delivers bonus damage of 100% for 15 seconds. Stacks to 2.'
    }
  ]
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={props => <Index {...props} />} />
      <Route {...properties}
          path="/stats"
          render={(props) => <StatsPage {...properties} />}
      />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/stats" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
