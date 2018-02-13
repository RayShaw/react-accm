import React, { Component } from 'react';
import Pagination from '../layout/Pagination';

class ListTable extends Component {

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>SystemCode</th>
              <th>UserID</th>
              <th>Session Token</th>
              <th>Token Type</th>
              <th>Create Time</th>
              <th>Expiry Time</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ACCMWS</td>
              <td>SuperAdmin</td>
              <td>34c6fceca75e456f25e7e99531e2425c6c1de443</td>
              <td>SystemToken</td>
              <td>2017-12-12 12:36:12</td>
              <td>2017-12-12 12:51:12</td>
              <td>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>ACCMWS</td>
              <td>SuperAdmin</td>
              <td>34c6fceca75e456f25e7e99531e2425c6c1de443</td>
              <td>UserToken</td>
              <td>2017-12-12 12:36:12</td>
              <td>2017-12-12 12:51:12</td>
              <td>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>ACCMWS</td>
              <td>SuperAdmin</td>
              <td>34c6fceca75e456f25e7e99531e2425c6c1de443</td>
              <td>UserToken</td>
              <td>2017-12-12 12:36:12</td>
              <td>2017-12-12 12:51:12</td>
              <td>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>ACCMWS</td>
              <td>SuperAdmin</td>
              <td>34c6fceca75e456f25e7e99531e2425c6c1de443</td>
              <td>UserToken</td>
              <td>2017-12-12 12:36:12</td>
              <td>2017-12-12 12:51:12</td>
              <td>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>ACCMWS</td>
              <td>SuperAdmin</td>
              <td>34c6fceca75e456f25e7e99531e2425c6c1de443</td>
              <td>UserToken</td>
              <td>2017-12-12 12:36:12</td>
              <td>2017-12-12 12:51:12</td>
              <td>
                <button type="button" className="btn btn-danger btn-xs">Delete</button>
              </td>
            </tr>
            <tr>
              <td>ACCMWS</td>
              <td>SuperAdmin</td>
              <td>34c6fceca75e456f25e7e99531e2425c6c1de443</td>
              <td>UserToken</td>
              <td>2017-12-12 12:36:12</td>
              <td>2017-12-12 12:51:12</td>
              <td>
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