import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Auth from '../src/containers/Auth/AuthContainer';
import Logout from './containers/Auth/Logout/Logout';
import Layout from './hoc/Layout/Layout';
import * as actions from './store/actions/index';

import './App.css';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {

    
    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
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
