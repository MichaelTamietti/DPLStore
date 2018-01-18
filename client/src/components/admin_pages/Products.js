import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import AddProductForm from './AddProductForm';
import { Card, Container, Grid } from 'semantic-ui-react';

class Products extends Component {

  getAllProducts = () => {
    const { products } = this.props;
    return products.map( (product, index) => (
      <Product key={index} product={product} />
    ))
  }

  render() {
    return(
      <div>
        <Grid>
          <Grid.Column width={3}>
          </Grid.Column>
          <Grid.Column width={10}>
            <AddProductForm type='add' />
            <br />
            <Card.Group itemsPerRow={5}>
              { this.getAllProducts() }
            </Card.Group>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(Products);
