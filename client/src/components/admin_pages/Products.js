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
      <Container>
        <Grid stackable columns='three' centered >
          <Grid.Row>
            <AddProductForm type='add' />
          </Grid.Row>
          <Grid.Row>
            { this.getAllProducts() }
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(Products);
