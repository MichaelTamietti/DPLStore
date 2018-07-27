import React, { Component } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux'
import CheckoutCart from './CheckoutCart'
import {Elements} from 'react-stripe-elements';
import InjectedCheckoutForm from './CheckoutForm';



class Checkout extends Component {

  state = { complete: false }

  completedOrder = () => {
    this.setState({ complete: true })
  }
  
  render() {
    if (this.state.complete) {
      return (
        <Segment>
          <Header as="h1" textAlign="centered">
            Purchase Complete! Thank You For Your Business!
          </Header>
          <Header as="h2" textAlign="centered">
            You Will Receive A Receipt Via Email!
          </Header>
        </Segment>
      );
    } else {

      return (
        <Container>
          <Header as='h1' textAlign='center' style={styles.checkoutTitle} >Checkout</Header>
          <CheckoutCart />
          <br />
          <Header as='h2' textAlign='center'>Please Enter Your Information Below</Header>
          <Elements>
            <InjectedCheckoutForm  func={this.completedOrder}/>
          </Elements>
        </Container>
      );
    }

  }
}

function mapStateToProps(state) {
  return { 
    cart: state.cart
  };
}

let styles = {
  checkoutTitle: {
      marginTop: '50px',
      },
    }

export default connect(mapStateToProps)(Checkout);
