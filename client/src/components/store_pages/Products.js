import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Rail, Reveal, Icon, Segment, Button, Card, Container, Grid, Loader } from 'semantic-ui-react';
import Product from './Product';
import { getProducts } from '../../actions/products';
import Cart from './Cart'
import { addToCart } from '../../actions/cartActions'
import CartItem from './CartItem'
import { Link, withRouter } from 'react-router-dom';





class Products extends Component {

state = { loaded: false, itemsInCart: [], itemNumber: 0 }

handleItemClick = (e, { name }) => this.setState({ activeItem: name })

setLoaded = () => this.setState({ loaded: true });

componentDidMount() {
this.props.getProducts(this.setLoaded);
}

dispachAddToCart = (product) => {
this.props.addToCart(product);
}

productId = (product) => {
    this.props.match.params.product;
}

incrementNumber = () => {
    this.setState({ itemNumber: this.state.itemNumber+1})
  }

getAllProducts = () => {

const { products, productId } = this.props;

return products.map((product, index) => (
  
<div style={styles.organizeCards}>
    <Grid.Column>
        <Product key={index} product={product} handleOnAdd={this.dispachAddToCart} />
         <Button style={styles.cartButton} onClick={(event) => { this.dispachAddToCart(product); this.incrementNumber(product);}}>
                <Icon name='shop'/>
                 Add to cart</Button>
    </Grid.Column>
</div>
))
}

render() {
if (this.state.loaded) {
return (
<div>
<Container textAlign='center'>
    <Grid>
            <Grid.Row columns={3}>
                {this.getAllProducts()}
            </Grid.Row>
    </Grid>
    </Container>
    
    <Rail attached internal position='right' style={styles.cartCounter}>
            <Header> <Link to='/Cart' className='sCartCounter'>
                <Segment > <Icon className='sCartCounter' name='shopping cart' /> Cart: {this.state.itemNumber} </Segment>
            </Link> </Header>
    </Rail>

     <Container>    
    <div style={styles.cartAlignment}>
            <Cart/>
    </div>
    </Container>
         
</div>


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
    marginTop: '100px',
    marginBottom: '100px',
    },
    organizeCards: {
    
        marginTop: '20px',
        textAlign:'center',
    },
    cartButton: {
        margin: '5px',
        backgroundColor: '#8068b1',
        color: 'white',
        padding: '10px',
        width: '140px',
        textAlign: 'center'
    },
    cartCounter: {
        marginTop: '220px',
        marginRight: '150px',
        width: 'auto',
    },
      
}
  

// let styles = {
// cartAlignment: {
// paddingTop: '20px',
// },

// }

const mapStateToProps = (state) => {
return { products: state.products,
productshow: state.products };
}

function mapActionsToProps(dispatch) {
return bindActionCreators({
getProducts,
addToCart
}, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Products);