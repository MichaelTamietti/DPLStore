import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import Products from './Products';
import Product from './Product';
import { getProducts } from '../../actions/products';

class FetchProducts extends Component {
  state = { loaded: false }

  setLoaded = () => this.setState ({ loaded: true });

  componentDidMount() {
    this.props.dispatch(getProducts(this.setLoaded));
  }

  render() {
    if(this.state.loaded) {
      return(
        <div>
          <Route exact path='/admin-products' component={Products} />
          <Route exact path='/admin-product/:id' component={Product} />
        </div>
      )
    }
    return(
      <div>
        <br />
        <Dimmer active inverted>
          <Loader inverted size='large'>Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default connect()(FetchProducts);
