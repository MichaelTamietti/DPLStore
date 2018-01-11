import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {
  render() {
    const { name, price, description, style, size } = this.props.product;
    return (
      <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{style}</p>
        <p>{size}</p>
      </div>
    )
  }
}

export default connect()(Product);
