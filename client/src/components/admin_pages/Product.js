import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Modal, Header, Image, Icon } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';

class Product extends Component {
  state = { open: false }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { name, price, description, style, size } = this.props.product;
    const { open, dimmer } = this.state

    return (
      <div>
        <Button onClick={this.show('blurring')}>{name}</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>{name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='paperclip' />
            <Modal.Description>
              <Header>{name}</Header>
              <p>${price}</p>
              <p>{description}</p>
              <p>Style: {style}</p>
              <p>Sizes: {size}</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='red' inverted >
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
