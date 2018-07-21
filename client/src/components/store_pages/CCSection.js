import React from 'react';
import { CardElement } from 'react-stripe-elements';
import { Form } from 'semantic-ui-react'

class CCSection extends React.Component {

  render() {
    return (
      <Form>
          Card Details
          <CardElement style={{base: {fontSize: '18px'}}} />
      </Form>
    );
  }
}

export default CCSection;