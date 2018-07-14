import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Segment, Button, Card, Container, Grid, Loader } from 'semantic-ui-react';
import Product from './Product';
import { getProducts } from '../../actions/products';
import Cart from './Cart'
import { addToCart } from '../../actions/cartActions'
import CartItem from './CartItem'

class Products extends Component {
  state = { loaded: false, itemsInCart: [] }

  setLoaded = () => this.setState({ loaded: true });

  componentDidMount() {
    this.props.getProducts(this.setLoaded);
  }

  // addToCart(product, cart) {
  //   const itemsInCart = [...cart, product]
  // }
  dispachAddToCart = (product) => {
    this.props.addToCart(product);
  }

  getAllProducts = () => {
    const { products } = this.props;
    return products.map((product, index) => (
      <Segment>
        <Product key={index} product={product} handleOnAdd={this.dispachAddToCart} product={product} />
      </Segment>
    ))
  }

  render() {
    if (this.state.loaded) {
      return (
          <Grid className="two column grid">

            <Grid.Column width={12}>
              <Grid className="three column grid centered">
                <Grid.Row className="three column row">
                  {this.getAllProducts()}
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={4}>
              <Cart style={styles.cartAlignment}/>
            </Grid.Column>
          </Grid>
        // <Container>
        //   <br />
        //   <Cart />
        //   <br />
        //   <Grid columns='four' relaxed='very' centered stackable>
        //     <Grid.Row>
        //       {this.getAllProducts()}
        //     </Grid.Row>
        //     <Grid.Column>
        //       <Cart />
        //     </Grid.Column>
        //   </Grid>
        // </Container>
      )
    }

    return (
      <div>
        <br />
        {/* <Dimmer active inverted>
          <Loader inverted size='large'>Loading</Loader>
        </Dimmer> */}
      </div>
    )
  }
}

let styles = {
  cartAlignment: {
    paddingTop: '20px',
  },

}
  

const mapStateToProps = (state) => {
  return { products: state.products };
}

function mapActionsToProps(dispatch) {
  return bindActionCreators({
      getProducts,
      addToCart
  }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Products);
