import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { SessionStorage } from '../../utils/session';
import { browserHistory } from 'react-router';
import { logout } from '../../actions/login';
import { dismissTips} from '../../actions/tips';

class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleLogout = this.handleLogout.bind(this);


  }
  handleLogout() {
    const { dispatch } = this.props;
    SessionStorage.clear();
    dispatch(logout());
    dispatch(dismissTips());
    browserHistory.push('/login');
  }
  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li><Link to="/system" activeClassName="active">System</Link></li>
          <li><Link to="/session" activeClassName="active">Session</Link></li>
          <li><Link to="/logintype" activeClassName="active">LoginType</Link></li>
          <li><Link to="/userrole" activeClassName="active">UserRole</Link></li>
          <li><Link to="/account" activeClassName="active">Account</Link></li>
          <li><a onClick={this.handleLogout}>Logout</a></li>
        </ul>
      </div>
    );
  }
}

export default connect()(Sidebar);