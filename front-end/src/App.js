import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Auth from '../src/containers/Auth/AuthContainer';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';

import './App.css';

class App extends Component {

  state = {
    logedIn: false
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/" component={Auth} />
      </Switch>
    );

    if (this.state.logedIn) {
      routes = (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
      );
    }


    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  }
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps )( App ));
