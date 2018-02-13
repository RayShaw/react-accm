import React, { Component } from 'react';
import Pagination from '../layout/Pagination';

class ListTable extends Component {

  render() {
    return (
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
        <Pagination />
      </div>
    );
  }
}

export default ListTable;