import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Modal, Header, Image, Card, Icon, Grid, Confirm } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';
import { deleteProduct } from '../../actions/products';
import AddProductForm from './AddProductForm';

class Product extends Component {
  state = { open: false }

  show = () => this.setState({ open: true });

  handleConfirm = () => {
    const { dispatch, product: { id } } = this.props;
    dispatch(deleteProduct(id));
    this.setState({ open: false });
  }

  handleCancel = () => this.setState({ open: false });

  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  editform = (product) => {
    return(
      <AddProductForm product={product} type='edit'/>
    )
  }

  render() {
    const { name, price, description, style, size, images } = this.props.product;
    const { product } = this.props;
    const { open, dimmer } = this.state;

    return (
      <div>
        <Card as='button' onClick={this.show('blurring')}>
          <Image src={ images } />
          <Card.Content>
           <Card.Header>
             {name}
           </Card.Header>
          </Card.Content>
        </Card>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={images} />
            <Modal.Description>
              <Header>{name}</Header>
              <p>${price}</p>
              <p>{description}</p>
              <p>Style: {style}</p>
              <p>Sizes: {size}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Grid divided='vertically'>
              <Grid.Column width='8'>
              </Grid.Column>
              <Button onClick={this.handleConfirm} color='red' inverted >
                <Icon name='remove' color='red' /> Delete
              </Button>
              <AddProductForm product={product} type='edit' onClick={this.close}/>
            </Grid>
          </Modal.Actions>
        </Modal>
      </div>
    )



  }
}

export default connect()(Product);
