import React, { Component } from 'react';

class AddForm extends Component {
  render() {
    return (
      <form className="form-inline">
        <div className="row">
          <div className="col-md-5">
            <label htmlFor="systemCode">User Role:</label>
            <input type="text" className="form-control" id="userRole" placeholder="User Role" />
          </div>
          <div className="col-md-5">
            <label htmlFor="description">Description:</label>
            <input type="text" className="form-control" id="description" placeholder="Description" />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary">Add New System</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddForm;