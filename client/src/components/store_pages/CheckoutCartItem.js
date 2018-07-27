"use strict";
import React from 'react';
import { Divider,Header, Icon, Grid, Container, Label, Button, Segment, Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux'

class CartItem extends React.Component {


  render() {
    return (
      

      <div>
      <Divider />
     <Grid>
     
     <Grid.Column width={6}>
          <Image src={this.props.cartItem.images} size='small' />
     </Grid.Column>
     <Grid.Column width={8}>
     <Header>{this.props.cartItem.name}</Header>
                     <Header as='h5'>Price: ${this.props.cartItem.price}</Header>
    
                 <Header as='h5'>Quantity :&nbsp; {this.props.cartItem.units} 
                     &nbsp;   &nbsp;
                     <Button onClick={() => this.props.onAddUnit()}>+</Button>
                     <Button onClick={() => this.props.onDeductUnit()}>-</Button>
                     </Header>
          
     </Grid.Column>
     <Grid.Column width={1}>
     <Button icon style={styles.removeButton} onClick={() => this.props.handleDeleteFromCart()}
                         ><Icon name='remove' /></Button>
     </Grid.Column>
    
   </Grid>
   <Divider />
     </div>




    );
  }
}

let styles = {
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
             cartAlignment: {
              marginTop: '100px',
              marginBottom: '100px',
              },
  removeButton: {
        marginTop: '30px',
         },

}


const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(CartItem);