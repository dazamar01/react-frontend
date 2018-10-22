import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Auth from '../src/containers/Auth/AuthContainer';
import Layout from './hoc/Layout/Layout';

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

export default withRouter(App);
