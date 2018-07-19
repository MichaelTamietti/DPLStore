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

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

setLoaded = () => this.setState({ loaded: true });

componentDidMount() {
this.props.getProducts(this.setLoaded);
}

dispachAddToCart = (product) => {
this.props.addToCart(product);
}

getAllProducts = () => {
const { products } = this.props;
return products.map((product, index) => (
<Segment>
<Product key={index} product={product} handleOnAdd={this.dispachAddToCart} />
<Button onClick={() => this.dispachAddToCart(product)} >ADD</Button>
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
)
}

return (
<div>
<br />
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