"use strict";
import React from 'react';
import { Grid, Container, Label, Button, Segment, Card, Icon } from 'semantic-ui-react';

class CartItem extends React.Component {


    render() {
        return (
            <Container>
            <Segment >
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column>
                            <h4>{this.props.cartItem.name}</h4>
                            <Segment pullRight>Price: ${this.props.cartItem.price}</Segment>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                        <p>Quantity :&nbsp;
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                >Remove Item</Button>
                       </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Segment>
            </Container>
        );
    }
}

export default CartItem;