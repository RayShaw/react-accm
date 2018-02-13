import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li><Link to="/system" activeClassName="active">System</Link></li>
          <li><Link to="/session" activeClassName="active">Session</Link></li>
          <li><Link to="/logintype" activeClassName="active">LoginType</Link></li>
          <li><Link to="/userrole" activeClassName="active">UserRole</Link></li>
          <li><Link to="/account" activeClassName="active">Account</Link></li>
          <li><Link to="/login" activeClassName="active">Logout</Link></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;