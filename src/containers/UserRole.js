import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import ListTable from '../components/userrole/ListTable';
import AddForm from '../components/userrole/AddForm';



class UserRole extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h2 className="sub-header">User Role</h2>
              <AddForm />
              <br />
              <ListTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRole;