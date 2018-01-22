import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Container, Grid, Dimmer, Loader } from 'semantic-ui-react';
import Product from './Product';
import { getProducts } from '../../actions/products';

class Products extends Component {
  state = { loaded: false }

  setLoaded = () => this.setState({ loaded: true });

  componentDidMount() {
    this.props.dispatch(getProducts(this.setLoaded));
  }

  getAllProducts = () => {
    const { products } = this.props;
    return products.map((product, index) => (
      <Product key={index} product={product} />
    ))
  }

  render() {
    if (this.state.loaded) {
      return (
        <Container>
          <Grid columns='three' relaxed='very' centered stackable>
            <Grid.Row>
              {this.getAllProducts()}
            </Grid.Row>
          </Grid>
        </Container>
      )
    }
    return (
      <div>
        <br />
        <Dimmer active inverted>
          <Loader inverted size='large'>Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps)(Products);
