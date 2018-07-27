import React from 'react';
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class ContactSection extends React.Component {
  render() {
    return (
      <Form>
        <Form.Input required label="Full Name" placeholder="Full Name" onChange={this.props.handleNameChange}/>
        <Form.Input required label="Email" placeholder="Email" onChange={this.props.handleEmailChange}/>
      </Form>
    );
  }
}

export default connect()(ContactSection);