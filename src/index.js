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
  ],
  inscriptions: ["LB/Q +{X}% Dmg",
    "LB/Q +{X}% Speed",
    "RB/E +{X}% Dmg",
    "RB/E +{X}% Speed",
    "+{X}% Dmg",
    "+{X}% Force",
    "+{X}% Harvest Bonus",
    "+{X}% Pickup Radius",
    "+{X}% Thruster Life",
    "Acid +{X}% Dmg",
    "Acid +{X}% Effect",
    "Acid +{X}% Resist",
    "Ammo +{X}% Drop Rate",
    "Ammo +{X}% Pickup Amnt",
    "A-Rifle +{X}% Ammo",
    "A-Rifle +{X}% Dmg",
    "Armor +{X}% Dmg Resist",
    "Armor +{X}% Max",
    "Autocannon +{X}% Ammo",
    "Autocannon +{X}% Dmg",
    "Blast +{X}% Dmg",
    "Combo +{X}% Aura Eff",
    "Combo +{X}% Damage",
    "Combo +{X}% Damage",
    "Combo +{X}% Imp Dmg",
    "Combo +{X}% Targets",
    "Critical +{X}% Dmg",
    "Effect +{X}% Resist",
    "Effects {X}% Duration",
    "Elec +{X}% Dmg",
    "Elec +{X}% Effect",
    "Elec +{X}% Resist",
    "Elemental +{X}% Dmg",
    "Elemental +{X}% Resist",
    "Fire +{X}% Dmg",
    "Fire +{X}% Effect",
    "Fire +{X}% Resist",
    "Gear +{X}% Charges",
    "Gear +{X}% Dmg",
    "Gear +{X}% Speed",
    "GrenLaun +{X}% Ammo",
    "GrenLaun +{X}% Dmg",
    "Hvy Pistol +{X}% Dmg",
    "Ice +{X}% Dmg",
    "Ice +{X}% Effect",
    "Ice +{X}% Resist",
    "Impact +{X}% Dmg",
    "Impact +{X}% Resist",
    "LMG +{X}% Ammo",
    "LMG +{X}% Dmg",
    "Mch Pistol +{X}% Ammo",
    "Mch Pistol +{X}% Dmg",
    "Melee +{X}% Dmg",
    "Mks Rifle +{X}% Ammo",
    "Mks Rifle +{X}% Dmg",
    "Overheat {X}% Delay",
    "Physical +{X}% Dmg",
    "Physical +{X}% Resist",
    "Pistol +{X}% Ammo",
    "Repair +{X}% Amnt",
    "Repair +{X}% Drop Rate",
    "Shield {X}% Delay",
    "Shield {X}% Refresh",
    "Shield +{X}% Max",
    "Shotgun +{X}% Ammo",
    "Shotgun +{X}% Dmg",
    "Sniper +{X}% Ammo",
    "Sniper +{X}% Dmg",
    "Supply +{X}% Drop Rate",
    "Support +{X}% Luck",
    "Support +{X}% Speed",
    "Thruster +{X}% Speed",
    "Ultimate +{X}% Dmg",
    "Ultimate +{X}% Speed",
    "Weap {X}% Recoil Aim",
    "Weap {X}% Recoil Hip",
    "Weap {X}% Reload Time",
    "Weap +{X}% Aim",
    "Weap +{X}% Ammo",
    "Weap +{X}% Blast Dmg",
    "Weap +{X}% Clip",
    "Weap +{X}% Dmg",
    "Weap +{X}% Fire Rate",
    "Weap +{X}% Mag Size"]
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
