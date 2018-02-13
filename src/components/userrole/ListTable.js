import React, { Component } from 'react';
import Pagination from '../layout/Pagination';

class ListTable extends Component {

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Role</th>
              <th>Description</th>
              <th>Create Time</th>
              <th>Create By</th>
              <th>Operatiton</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CCR Admin</td>
              <td>CCR Admin</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>CCR Manager</td>
              <td>CCR Manager</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>CCR Editor</td>
              <td>CCR Editor</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>CCR User</td>
              <td>CCR User</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>EB Admin</td>
              <td>EB Admin</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>EB Employer</td>
              <td>EB Employer</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>EB Employer</td>
              <td>EB Employer</td>
              <td>2017-12-12</td>
              <td>SuperAdmin</td>
              <td>
                <button type="button" className="btn btn-success btn-xs" style={{width:46.69}}>Edit</button>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>EB Employer</td>
              <td>EB Employer</td>
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