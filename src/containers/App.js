import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import Login from './Login';
import System from './System';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/accm.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path='/' component={System} />
          <Route path='/System' component={System} />
          <Route path='/login' component={Login} />
        </Router>
      </Provider>
    );
  }
}

