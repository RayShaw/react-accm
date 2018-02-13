import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import ListTable from '../components/session/ListTable';

class Session extends Component {
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
                  <h2 className="sub-header">Session Token</h2>
                </div>
                <div className="col-md-2" style={{ marginTop: 30 }}>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add New</button>
                </div>
              </div>
              <ListTable />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Session;