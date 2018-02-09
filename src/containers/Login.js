import React, { Component } from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import LoginForm from '../components/login/LoginForm';
import { bindActionCreators } from 'redux';
import { assign } from 'lodash';
import * as LoginActions from '../actions/login';
import '../css/login.css';

class Login extends Component {

  componentWillReceiveProps(nextProps) {
    const { success, data } = nextProps;
    console.log(success);
    console.log(data);
    
    if (success) {
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
    actions: bindActionCreators(assign({}, LoginActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)