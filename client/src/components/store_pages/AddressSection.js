import React from 'react';
import { Form } from 'semantic-ui-react'

class AddressSection extends React.Component {
  render() {
    return (
      <Form>
        <Form.Input required label="Address" placeholder="Address" onChange={this.props.handleAddressChange}/>
        <Form.Input label="Additional Address" placeholder="Additional Address" onChange={this.props.handleAdditionalAddressChange}/>
        <Form.Input required label="City" placeholder="City" onChange={this.props.handleCityChange}/>
        <Form.Input required label="State" placeholder="State" onChange={this.props.handleWhichStateChange}/>
        <Form.Input required type="number" label="Amount" placeholder="Amount" onChange={this.props.handleAmountChange}/>
      </Form>
    );
  }
}

export default AddressSection;