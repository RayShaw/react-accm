import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import LoginForm from '../components/login/LoginForm';
import Tips from '../components/Tips';
import { bindActionCreators } from 'redux';
import { assign } from 'lodash';
import * as LoginActions from '../actions/login';
import { SessionStorage } from '../utils/session';
import '../css/login.css';

class Login extends Component {

  componentDidMount() {

    // for test
    /*  const cityCode = 101010100;
     const apiUrl = `/data/cityinfo/${cityCode}.html`;
     fetch(apiUrl).then((response) => {
       console.log(apiUrl);
       if (response.status !== 200) {
         throw new Error('Fail to get response with status ' + response.status);
       }
 
       response.json().then((responseJson) => {
         console.log(responseJson.weatherinfo);
         this.setState({ weather: responseJson.weatherinfo });
       }).catch((error) => {
         console.log(error);
         this.setState({ weather: null });
       });
     }).catch((error) => {
       console.log(error);
       this.setState({ weather: null });
     }); */

    /* const apiUrl = 'http://localhost:8080/ACCMAdminWeb/member/login';

    let formData = new FormData();
    formData.append("password", "Super@1234");
    formData.append("userName", "superAdmin");

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('loginType', 'CTM');
    headers.append('userId', 'dev');
    headers.append('token', '34c6fceca75e456f25e7e99531e2425c6c1de443');

    fetch(apiUrl, {
      // headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json',
      //   loginType: 'CTM',
      //   userId: 'dev',
      //   token: '34c6fceca75e456f25e7e99531e2425c6c1de443',
      // },

      headers: headers,
      method: "POST",
      // mode: "cors",
      body: formData
    }).then((response) => {
      console.log(response);
      // if (response.status !== 200) {
      // throw new Error('Fail to get response with status ' + response.status);
      // }
    }).catch((error) => {
      console.log(error);
    }); */

  }

  componentWillReceiveProps(nextProps) {
    const { success, userName, token } = nextProps;
    console.log('success:', success);
    // console.log(data);

    if (success) {
      console.log(token);
      SessionStorage.set('token', token);
      SessionStorage.set('userName', userName);
      browserHistory.push('/system');
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <div className="container">
        <h2 className="text-center">Account Management System</h2>
        <LoginForm loginSubmit={actions.loginSubmit} />
        <Tips />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // data: state.login.data,
    success: state.login.success,
    token: state.login.token,
    userName: state.login.userName,
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