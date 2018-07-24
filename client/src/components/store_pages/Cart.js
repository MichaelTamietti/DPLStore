import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../../actions/cartActions';
import CartItem from "./CartItem";
import { Grid, Label, Header, Button, Segment, Card, Icon } from 'semantic-ui-react';

class Cart extends React.Component {

   state = {  randomNumber: 0}

    renderCart() {
        return (
            <div className='cartList' header='Cart' bsStyle='primary'>
              <Header as="h2" textAlign="center" >Your Cart</Header>
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
            <Fragment>
              
                        <h3>TOTAL: ${this.totalAmount(this.props.cart)}</h3>
            
            </Fragment>
        );
    }
    totalAmount(cartArray) {
        
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            acum = this.roundToTwo(acum)
            return acum;
        
        }, 0);
    }

    roundToTwo = (number) => {
        return number.toFixed(2)}


    render() {
        if (this.props.cart.length !== 0) {
            return (
                <aside className='cart'>
                    {this.renderCart()}
                    {this.cartTotal()}
                  <Button><Link to="/checkout">Checkout</Link></Button>
                </aside>
            );
        }

        return (
         <Header as="h4" textAlign="center">Your Cart Is Empty</Header>
        
        );
    }
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