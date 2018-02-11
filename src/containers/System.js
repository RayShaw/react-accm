import React, { Component } from 'react';

const cityCode = 101010100;

class System extends Component {
  constructor() {
    super(...arguments);
    this.state = { data: null };
  }

  componentDidMount() {
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    fetch(apiUrl).then((response) => {
      if (response.status !== 200) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      console.log('hello');

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
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="">Account Management System</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="">UserMenu</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 col-md-2 sidebar">
              <ul className="nav nav-sidebar">
                <li className="active"><a href="">System <span className="sr-only">(current)</span></a></li>
                <li><a href="session.html">Session</a></li>
                <li><a href="logintype.html">LoginType</a></li>
                <li><a href="userrole.html">UserRole</a></li>
                <li><a href="account.html">Account</a></li>
                <li><a href="login">Logout</a></li>
              </ul>
            </div>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <h2 className="sub-header">System</h2>
              <form className="form-inline">
                <div className="row">
                  <div className="col-md-5">
                    <label htmlFor="systemCode">System Code:</label>
                    <input type="email" className="form-control" id="systemCode" placeholder="System Code" />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="description">Description:</label>
                    <input type="email" className="form-control" id="description" placeholder="Description" />
                  </div>
                  <div className="col-md-2">
                    <button type="submit" className="btn btn-primary">Add New System</button>
                  </div>
                </div>
              </form>
              <br />
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>System Code</th>
                      <th>Description</th>
                      <th>Create Time</th>
                      <th>Create By</th>
                      <th>Operatiton</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CCR</td>
                      <td>CCR System</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs" onClick={function () { window.confirm(11) }}>Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>eFriend</td>
                      <td>eFriend Portal</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>iConnect</td>
                      <td>iConnect Portal</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>IRIS</td>
                      <td>IRIS System</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>ACCMWS</td>
                      <td>ACCMWS Sysetm</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>BOWS</td>
                      <td>BOWS BO Web Service</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>BOWS</td>
                      <td>BOWS BO Web Service</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                    <tr>
                      <td>BOWS</td>
                      <td>BOWS BO Web Service</td>
                      <td>2017-12-12</td>
                      <td>SuperAdmin</td>
                      <td>
                        <button type="button" className="btn btn-success btn-xs" style={{ width: 46.69 }}>Edit</button>
                        <button type="button" className="btn btn-danger btn-xs">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav aria-label="Page navigation">
                  <ul className="pagination pagination-sm">
                    <li>
                      <a href="" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li className="active"><a href="">1 <span className="sr-only">(current)</span></a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                    <li><a href="">4</a></li>
                    <li><a href="">5</a></li>
                    <li>
                      <a href="" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>


            </div>



          </div>
        </div>
      </div>
    );
  }
}

export default System;