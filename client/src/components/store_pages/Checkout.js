import React, { Component } from 'react';
import { Header, Segment, Button, Form, Message } from 'semantic-ui-react';

class Checkout extends Component {
  render() {
    return (
      <Segment style={styles.segmentAlignment}>
        <Header as='h1' textAlign='center'>Checkout Component</Header>
        <Form.Input style={styles.inputAlignment} label="First Name" placeholder="First Name" />
        <Form.Input label="Last Name" placeholder="Last Name" />
        <Form.Input label='Email' placeholder='Email' />
        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
        <Button>Submit</Button>
      </Segment>
    );
  }
}

let styles = {
  segmentAlignment: {
    justifyContent: 'center',
  },
  inputAlignment: {
    alignSelf: 'center',
  }

}

export default Checkout;
