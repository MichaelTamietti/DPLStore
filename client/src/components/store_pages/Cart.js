import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../../actions/cartActions';
import CartItem from "./CartItem";
import { Container, Grid, Label, Header, Button, Segment, Card, Icon } from 'semantic-ui-react';

class Cart extends React.Component {


   state = {  randomNumber: 0}

    renderCart() {
        return (
            <div style={styles.cartAlignment} className='cartList' header='Cart' bsStyle='primary'>
             
                {this.cartList()}
            </div>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }
  

    cartList() {
      return (
        this.props.cart.map(cartItem => {
          return (
            <CartItem key={cartItem.id}
              cartItem={cartItem}
              onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
              onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
              handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)}
            />
          );
        })
      );
    }

    cartTotal() {
        return (
            <Container textAlign='right' >
              
                        <h3 style={styles.checkoutTotal}>TOTAL: ${this.totalAmount(this.props.cart)}</h3>
            
            </Container>
        );
    }
    totalAmount(cartArray) {
        
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        
        }, 0);
    }


    render() {
        if (this.props.cart.length !== 0) {
            return (
              <Container style={styles.cartContainer}>
                <aside className='cart'>
                    {this.renderCart()}
                    {this.cartTotal()}
                    <Container>
                  <Button floated='right'><Link to="/checkout">Checkout</Link></Button>
                  </Container>
                </aside>
                </Container>
                
            );
        }

        return (
         <Header as="h4" textAlign="center">Your Cart Is Empty</Header>
        
        );
    }
}

let styles = {
    cartAlignment: {
    marginTop: '50px',
    marginBottom: '10px',
    },
    checkoutButton: {
        marginRight: '50px',
        marginBottom: '20px',
        },
    checkoutTotal: {
             marginBottom: '10px',
            marginRight: '10px'
            },
    cartContainer: {
            marginBottom: '100px',
       
               },

 
}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);