import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';

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
      Products Component
      { this.getAllProducts() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(Products);
