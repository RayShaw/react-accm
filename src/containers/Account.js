import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import ListTable from '../components/account/ListTable';
import AddModel from '../components/account/AddModel'


class Account extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <div className="row">
                <div className="col-md-10">
                  <h2 className="sub-header">Account</h2>
                </div>
                <AddModel />
              </div>
              <ListTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;