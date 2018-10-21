import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Layout from './hoc/Layout/Layout';

import './App.css';

class App extends Component {
  render() {
    let routes = null;
    /*
    routes = (
      <Switch>
        <Route path="/auth" component={Logout} />
        
        <Redirect to="/" />
      </Switch>
    );
      */
    return (
      <div>
        <Layout>
          
        </Layout>
      </div>
    );
  }
}

export default withRouter( App ) ;
