import React, { Component } from 'react';
import { Alert, Button } from 'react-bootstrap';

class Tips extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert className="alert-tips" bsStyle="danger" onDismiss={this.handleDismiss}>
          {/* <h4>Oh snap! You got an error!</h4> */}
          <p>{this.props.message}</p>
        </Alert>
      );
    }

    return <Button onClick={this.handleShow}>Show Alert</Button>;
  }
}

export default Tips;