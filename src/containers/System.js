import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import ListTable from '../components/system/ListTable';
import AddForm from '../components/system/AddForm';

class System extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h2 className="sub-header">System</h2>
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

export default System;