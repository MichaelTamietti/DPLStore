"use strict";
import React from 'react';
import { Divider, Header, Image, Grid, Container, Label, Button, Segment, Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux'

class CartItem extends React.Component {

    

    render() {
        let styles = {
            removeButton: {
            marginTop: '30px',
            },
            centerItems: {
                maxWidth: '1000px',
                margin: 'auto',
            }
        }
        
        return (
            
            <div style={styles.centerItems}>
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



export default connect()(CartItem);