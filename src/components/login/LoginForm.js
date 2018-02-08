import React, { Component } from 'react';

export default class LoginForm extends Component {

  handleSubmit(e) {
    e.preventDefault();
    let userName = this.refs.inputLoginName.value;
    let password = this.refs.inputPassword.value;

    let formData = {
      userName: userName,
      password: password
    }
    // this.props.loginSubmit(formData);
    console.log(formData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form-signin">
        <label htmlFor="inputLoginName" className="sr-only">Login Name:</label>
        <input type="text" ref="inputLoginName" id="inputLoginName" className="form-control" placeholder="Login Name" required autoFocus />
        <label htmlFor="inputPassword" className="sr-only">Password:</label>
        <input type="password" ref="inputPassword" id="inputPassword" className="form-control" placeholder="Password" required />
        {/* <a href="system" className="btn btn-lg btn-primary btn-block">Login</a> */}
        <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
      </form>
    );
  }
}