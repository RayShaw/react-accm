import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Login from './Login';
import System from './System';
import Session from './Session';
import LoginType from './LoginType';
import UserRole from './UserRole';
import Account from './Account';
import { SessionStorage } from '../utils/session';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/accm.css';

function requireAuth(nextState, replace) {
  if (!SessionStorage.get('token')) {
    replace('/login');
  }
}

function isLogin(nextState, replace) {
  if (SessionStorage.get('token')) {
    replace('/system');
  }
}


export default class App extends Component {

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route onEnter={requireAuth} path='/' component={System} />
          <Route onEnter={isLogin} path='/login' component={Login} />
          <Route onEnter={requireAuth} path='/system' component={System} />
          <Route onEnter={requireAuth} path='/session' component={Session} />
          <Route onEnter={requireAuth} path='/logintype' component={LoginType} />
          <Route onEnter={requireAuth} path='/userrole' component={UserRole} />
          <Route onEnter={requireAuth} path='/account' component={Account} />
        </Router>
      </Provider>
    );
  }
}

