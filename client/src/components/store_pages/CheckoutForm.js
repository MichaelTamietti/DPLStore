import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import axios from 'axios'
import AddressSection from './AddressSection';
import CCSection from './CCSection';
import ContactSection from './ContactSection';
import { Form, Button, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CheckoutForm extends React.Component {

  state = { 
    complete: false, 
    customerEmail: "", 
    customerName: "", 
    amount: 0, 
    customerAddress: "", 
    customerAdditionalAddress: "", 
    customerCity: "", 
    customerWhichState: "" 
  }

  handleNameChange = (e) => {
    this.setState({customerName: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({customerEmail: e.target.value});
  }

  handleAddressChange = (e) => {
    this.setState({ customerAddress: e.target.value })
  }

  handleAdditionalAddressChange = (e) => {
    this.setState({ customerAdditionalAddress: e.target.value })
  }

  handleCityChange = (e) => {
    this.setState({ customerCity: e.target.value })
  }

  handleWhichStateChange = (e) => {
    this.setState({ customerWhichState: e.target.value })
  }

  handleSubmit = (ev) => {

    const { customerName, customerAddress, customerAdditionalAddress, customerCity, customerWhichState } = this.state

    let stringName = JSON.stringify(customerName)
    let stringAddress = JSON.stringify(customerAddress)
    let stringAddress2 = JSON.stringify(customerAdditionalAddress)
    let stringCity = JSON.stringify(customerCity)
    let stringState = JSON.stringify(customerWhichState)
    ev.preventDefault();

    this.props.stripe.createToken({ 
        type: 'card', 
        name: stringName, 
        address_line1: stringAddress, 
        address_line2: stringAddress2,
        address_city: stringCity,
        address_state: stringState
      })
        .then(({token}) => {
      this.submit();
    });


  };

  async submit(ev) {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();

    if(dd<10) {
      dd = '0'+dd
    } 

    if(mm<10) {
      mm = '0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy;
  
    let stringCustomerEmail = JSON.stringify(this.state.customerEmail)
    let centAmount = this.totalAmount(this.props.cart) * 100

    let { token } = await this.props.stripe.createToken({ name: "DPL Store Charge" })
    let response = await axios.post("/api/charges", {
      stripeToken: token.id, 
      stripeEmail: stringCustomerEmail, 
      stripeAmount: centAmount 
    })
    .then( () => {
      this.setState({ complete: true })
      this.setState({ transactionDate: today })
      this.props.func()
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  stripeTokenHandler = (token) => {
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
  
    form.submit();
  }

  totalAmount(cartArray) {
    return cartArray.reduce((acum, item) => {
        acum += item.price * item.units;
        return acum
    }, 0);
  }
  
  isDisabled = () => {
    const { customerName, customerAddress, customerAdditionalAddress, customerCity, customerWhichState, customerEmail } = this.state

    let stringName = JSON.stringify(customerName)
    let stringEmail = JSON.stringify(customerEmail)
    let stringAddress = JSON.stringify(customerAddress)
    let stringAddress2 = JSON.stringify(customerAdditionalAddress)
    let stringCity = JSON.stringify(customerCity)
    let stringState = JSON.stringify(customerWhichState)

    if (
      this.stringName !== "" 
      && this.stringEmail !== "" 
      && this.stringAddress !== "" 
      && this.stringAddress2 !== ""
      && this.stringcustomerCity !== ""
      && this.stringState !== ""
    )
      return false
  }

  render() {
    return (
      <Form>
        <ContactSection 
          handleEmailChange={this.handleEmailChange} 
          handleNameChange={this.handleNameChange}
        />
        <AddressSection 
          handleAddressChange={this.handleAddressChange} 
          handleAdditionalAddressChange={this.handleAdditionalAddressChange} 
          handleCityChange={this.handleCityChange} 
          handleWhichStateChange={this.handleWhichStateChange}
        />
        <br />
        <CCSection/>
        <br />
        <Button type="submit" onClick={this.handleSubmit}>Purchase</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(injectStripe(CheckoutForm));