import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, Header, Icon, Grid, Confirm, Image, Reveal, Segment } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';
import { deleteProduct } from '../../actions/products';


class Product extends Component {
  state = { cart: []}


  render() {
    const { name, price, description, style, size, images } = this.props.product;
  

    return (
      <Fragment>
          <Fragment>
            <a href={images}>
              <Image src={images} size='medium'/>
            </a>
          </Fragment>
          
          <Fragment>
            <Header style={styles.textSizing}> {name} : ${price} </Header>
          </Fragment>
      </Fragment>
         
    )
  }
}

let styles = {
  textSizing: {
    fontSize: '16px',
    margin: '5px -15px',
  },

}

export default connect()(Product);
