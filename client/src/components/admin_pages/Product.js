import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Modal, Header, Image, Card, Icon, Grid, Confirm } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';
import { deleteProduct } from '../../actions/products';

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

  render() {
    const { name, price, description, style, size } = this.props.product;
    const { open, dimmer } = this.state

    return (
      <div>
        <Card as='button' onClick={this.show('blurring')}>
          <Image src={ Placeholder } />
          <Card.Content>
           <Card.Header>
             {name}
           </Card.Header>
          </Card.Content>
        </Card>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='Placeholder' />
            <Modal.Description>
              <Header>{name}</Header>
              <p>${price}</p>
              <p>{description}</p>
              <p>Style: {style}</p>
              <p>Sizes: {size}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleConfirm} color='red' inverted >
              <Icon name='remove' color='red' /> Delete
            </Button>
            <Button color='yellow' inverted>
              <Icon name='edit' color='yellow' /> Edit
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default connect()(Product);
