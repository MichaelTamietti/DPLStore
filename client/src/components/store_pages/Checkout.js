import React, { Component } from 'react';
import { Header, Segment, Button, Form, Message } from 'semantic-ui-react';

class Checkout extends Component {
  render() {
    return (
      <Segment style={styles.formAlignment}>
        <Header as='h1' textAlign='center'>Checkout Component</Header>
        <Form.Input label="First Name" placeholder="First Name" />
        <Form.Input label="Last Name" placeholder="Last Name" />
        <Form.Input label='Email' placeholder='Email' />
        <Message success header='Form Completed' content="You're all signed up for the newsletter" />
        <Button>Submit</Button>
      </Segment>
    );
  }
}

let styles = {
  formAlignment: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
  },

}

export default Checkout;
