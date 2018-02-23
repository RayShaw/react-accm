import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { dismissTips } from '../actions/tips';
import { connect } from 'react-redux';

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
    // this.setState({ show: false });
    this.props.dispatch(dismissTips());
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.props.show) {
      return (
        <Alert className="alert-tips" bsStyle="danger" onDismiss={this.handleDismiss}>
          {/* <h4>Oh snap! You got an error!</h4> */}
          <p>{this.props.message}</p>
        </Alert>
      );
    }

    return null;
  }
}


function mapStateToProps(state) {
  return {
    show: state.tips.show,
    message: state.tips.message
  }
}


export default connect(mapStateToProps)(Tips);