import React, { Component } from 'react';
import { Header, Segment, Button, Form, Message, Label } from 'semantic-ui-react';
import { connect } from 'react-redux'
import CheckoutCart from './CheckoutCart'
import {Elements} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';



class Checkout extends Component {

  
  
  
  
  render() {
  

    return (
      <Segment style={styles.segmentAlignment}>
        <Header as='h1' textAlign='center'>Checkout</Header>
        <CheckoutCart />
        <Elements>
          <InjectedCheckoutForm />
        </Elements>
      </Segment>
    );
  }
}

let styles = {
  segmentAlignment: {
    
  },
  inputAlignment: {
    
  }

}

function mapStateToProps(state) {
  return { cart: state.cart };
}

export default connect(mapStateToProps)(Checkout);
