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
                <label htmlFor="systemCode" className="col-sm-4 control-label">SystemCode</label>
                <div className="col-sm-7">
                  <select className="form-control" id="systemCode">
                    <option>CCR</option>
                    <option>eFriend</option>
                    <option>iConnect</option>
                    <option>ACCMWS</option>
                    <option>BOWS</option>
                    <option>IRIS</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="userId" className="col-sm-4 control-label">UserId:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="userId" placeholder="UserId" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="sessionToken" className="col-sm-4 control-label">Session Token:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="sessionToken" placeholder="Session Token" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="tokenType" className="col-sm-4 control-label">Token Type:</label>
                <div className="col-sm-7">
                  <select className="form-control" id="tokenType">
                    <option>User Token</option>
                    <option>System Token</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="expiryTime" className="col-sm-4 control-label">Expiry Time:</label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="expiryTime" placeholder="Expiry Time" />
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


