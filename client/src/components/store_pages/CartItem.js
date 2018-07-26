"use strict";
import React from 'react';
import { Grid, Container, Label, Button, Segment, Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'

class CartItem extends React.Component {


    render() {
        return (
            <Card>
            <div>
             
                            <h4>{this.props.cartItem.name}</h4>
                            <div>Price: ${this.props.cartItem.price}</div>
                  
                        <p>Quantity :&nbsp;
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                     
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                >Remove Item</Button>
                    

               
            </div>
            </Card>
        );
    }
}

export default connect()(CartItem);