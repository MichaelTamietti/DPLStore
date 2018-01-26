import React, { Component } from 'react';
import { Header, Item, Grid, Segment, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const styles = {
  checkoutBox: {
    float: 'right',
    width: '250px',
    paddingTop: '10px',
    background: '#f0f0f0',
  },

  checkoutBoxItems: {
    overflow: 'hidden',
    padding: '12px 20px 4px',
  },

  money: {
    float: 'right',
    fontSize: '13px',
    lineHeight: '20px',
  }, 

  styleButton: {
    border: '2px solid #000000',
    color: '#000000',
    display: 'block',
    margin: '25px auto',
    width: '140px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textDecoration: 'none',
  },
  link: {
    color: '#000000',
  }, 
}

class Cart extends Component {
  state = {}
  // TODO grab shipping Function
  // TODO Function for product total
  // TODO Function for total

  render() {
    return (
      <Container>
        <br />
        <Header as='h1' textAlign='center'>Cart</Header>
        <Grid columns={2} relaxed='very' centered>
          <Grid.Row stretched>
            <Grid.Column width={8}>
              <Segment>
                <Item.Group divided>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </Item.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Item style={styles.checkoutBox} >
                <Item.Content style={styles.checkoutBoxItems} verticalAlign='middle'>
                  <Item.Header>Products: <span style={styles.money}>$0.00</span></Item.Header>
                </Item.Content>
                <Item.Content style={styles.checkoutBoxItems} verticalAlign='middle'>
                  <Item.Header>Shipping: <span style={styles.money}>$0.00</span></Item.Header>
                </Item.Content>
                <Item.Content style={styles.checkoutBoxItems} verticalAlign='middle'>
                  <Item.Header>Total: <span style={styles.money}>$0.00</span></Item.Header>
                </Item.Content>
                <Item.Content style={styles.checkoutBoxItems} verticalAlign='middle'>
                  <button style={styles.styleButton}>Checkout</button>
                </Item.Content>
                <button style={styles.styleButton}><Link to='/' style={styles.link}>Continue Shopping</Link></button>
              </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Cart;