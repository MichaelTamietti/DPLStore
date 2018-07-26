"use strict";
import React from 'react';
import { Grid, Container, Label, Button, Segment, Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux'

class CartItem extends React.Component {


  render() {
    return (
      <Container>
        <Segment >
          <Grid>
            <Grid.Row>
                <Grid.Column width={5}>
                  <h3>{this.props.cartItem.name}</h3>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Image src={this.props.cartItem.images} size='medium' />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>
                  Price: ${this.props.cartItem.price}
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={11}>
                <p>Quantity :&nbsp;
                    <Label bsStyle='success'>
                      {this.props.cartItem.units} 
                    </Label>
                    &nbsp;
                    <Button onClick={() => this.props.onAddUnit()}>+</Button>
                    <Button onClick={() => this.props.onDeductUnit()}>-</Button>
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Button onClick={() => this.props.handleDeleteFromCart()}>
                  Remove Item
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(CartItem);