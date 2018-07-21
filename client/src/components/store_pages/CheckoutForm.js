import React from 'react';
import { injectStripe } from 'react-stripe-elements';
import axios from 'axios'
import AddressSection from './AddressSection';
import CCSection from './CCSection';
import ContactSection from './ContactSection';
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CheckoutForm extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {complete: false};
  //   this.submit = this.submit.bind(this);
  // }

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

  handleAmountChange = (e) => {
    this.setState({amount: e.target.value});
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
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.

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
      console.log(token)
      console.log('token ^')
    });

    // However, this line of code will do the same thing:
    //
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});

    // You can also use createSource to create Sources. See our Sources
    // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
    //
    // this.props.stripe.createSource({type: 'card', name: 'Jenny Rosen'});
  };


  // async submit(ev) {
  //   console.log("round 2 submit")
  //   let {token} = await this.props.stripe.createToken({name: "Name"});
  //   debugger
  //   let response = await fetch("/charge", {
  //     method: "POST",
  //     headers: {"Content-Type": "text/plain"},
  //     body: {stripeToken: token.id, stripeEmail: this.state.customerEmail, stripeAmount: this.state.amount}
  //   });
      
  //   if (response.ok) console.log("Purchase Complete!")
  //   if (response.ok) this.setState({complete: true});
  // }


  async submit(ev) {
  
    let stringCustomerEmail = JSON.stringify(this.state.customerEmail)
    let centAmount = this.state.amount * 100

    let { token } = await this.props.stripe.createToken({ name: "DPL Store Charge" })
    let response = await axios.post("/api/charges", {
      stripeToken: token.id, 
      stripeEmail: this.state.customerEmail, 
      stripeAmount: centAmount 
    })
    .then( function (response) {
      console.log(response)
      alert('Complete! Thanks for your purchase!')
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  stripeTokenHandler = (token) => {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
  
    // Submit the form
    form.submit();
  }

  render() {
    console.log("chckout form")
    console.log(this.props)
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <Form >
        <ContactSection 
          handleEmailChange={this.handleEmailChange} 
          handleNameChange={this.handleNameChange}
        />
        <AddressSection 
          handleAmountChange={this.handleAmountChange} 
          handleAddressChange={this.handleAddressChange} 
          handleAdditionalAddressChange={this.handleAdditionalAddressChange} 
          handleCityChange={this.handleCityChange} 
          handleWhichStateChange={this.handleWhichStateChange}
        />
        <CCSection />
        <Button type="submit" onClick={this.handleSubmit}>Purchase</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return { };
}

export default connect(mapStateToProps)(injectStripe(CheckoutForm));