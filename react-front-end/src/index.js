import React from "react";
import { render } from "react-dom";
import history from "./history";
import { Router, Switch, Route, Redirect } from "react-router-dom";

import App from "./App";
import Captura from "./components/CapturaOrdenia/CapturaOrdenia";


import Auth from "./Auth";

const auth = new Auth();



const callbackComponent = () => {
    if (auth.loggedIn) {
      setTimeout(() => history.replace("/"), 1500);
      return <h4>loading...</h4>;
    } else {
      return <Redirect to={{ pathname: "/" }} />;
    }
  };
  
  const AuthRoute = props => {
    const { Component, path } = props;
    return (
      <Route
        path={path}
        render={() =>
          auth.loggedIn ? <Component /> : <Redirect to={{ pathname: "/" }} />
        }
      />
    );
  };
  
  auth.checkAuthentication().then(() => {
    render(
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <App auth={auth} />} />
          <Route path="/callback" render={props => callbackComponent(props)} />
          <AuthRoute path="/captura" Component={Captura} />
        </Switch>
      </Router>,
      document.getElementById("root")
    );
  });
  