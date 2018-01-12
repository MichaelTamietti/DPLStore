import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import AddProductForm from './AddProductForm';

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
      <AddProductForm type='add' />
      <hr/>
      { this.getAllProducts() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(Products);
