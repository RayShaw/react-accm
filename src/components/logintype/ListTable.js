import React, { Component } from 'react';
import Pagination from '../layout/Pagination';

class ListTable extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Login Type</th>
              <th>Description</th>
              <th>Create Time</th>
              <th>Create By</th>
              <th>Operatiton</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CTM</td>
              <td>AGT</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>AGT</td>
              <td>Agency</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>iConnect</td>
              <td>iConnect Portal</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>AGT</td>
              <td>Agency</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>iConnect</td>
              <td>iConnect Portal</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
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