import React, { Component } from 'react';
import '../css/login.css';
import { browserHistory } from 'react-router';
import LoginForm from '../components/login/LoginForm';
import { bindActionCreators } from 'redux';
import { assign } from 'lodash';

class Login extends Component {

  componentWillReceiveProps(nextProps) {

    if (true) {
      browserHistory.push('/system');
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="container">
        <h2 className="text-center">Account Management System</h2>
        <LoginForm loginSubmit={actions.loginSubmit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.login.data,
    success: state.login.success
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assign({}), dispatch)
  }
}

export default Login;