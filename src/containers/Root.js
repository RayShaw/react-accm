import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './Login';
import System from './System';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/accm.css';

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={System} />
        <Route path='/System' component={System} />
        <Route path='/login' component={Login} />
      </Router>
    );
  }
}

