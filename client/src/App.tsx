import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IconContext } from "react-icons";

import Main from "./components/pages/main/Main";
import Benefits from "./components/pages/benefits/Benefits";
import SignUp from "./components/pages/signup/SignUp";
import LogIn from "./components/pages/login/LogIn";

import AuthProvider from "./providers/AuthProvide";

import "./styles/app.scss";

const App = () => (
  <IconContext.Provider
    value={{ color: "white", className: "global-class-name" }}
  >
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/profile">
            <Benefits />
          </Route>
          <Route exact path="/anketa">
            <Benefits />
          </Route>
          <Route exact path="/benefits">
            <Benefits />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  </IconContext.Provider>
);

export default App;
