import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddModel extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <Button bsStyle="primary" onClick={this.handleShow}>Add New</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Session Token</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="loginType" className="col-sm-4 control-label">Login Type:</label>
                <div className="col-sm-7">
                  <select className="form-control" id="loginType">
                    <option>Customer</option>
                    <option>Agency</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="userName" className="col-sm-4 control-label">UserName:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="userName" placeholder="UserName" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-4 control-label">Password:</label>
                <div className="col-sm-7">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="passwordConfirm" className="col-sm-4 control-label">Password Confirm:</label>
                <div className="col-sm-7">
                  <input type="password" className="form-control" id="passwordConfirm" placeholder="Password Confirm" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-4 control-label">Email:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="email" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mobileNo" className="col-sm-4 control-label">Mobile No:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="mobileNo" placeholder="Mobile No" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="passwordQuestion" className="col-sm-4 control-label">Password Question:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="passwordQuestion" placeholder="Password Question" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="passwordAnswer" className="col-sm-4 control-label">Password Answer:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="passwordAnswer" placeholder="Password Answer" />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button bsStyle="primary">Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModel;


