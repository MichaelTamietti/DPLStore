import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Header, Icon, Grid, Confirm, Image, Reveal, Segment } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';
import { deleteProduct } from '../../actions/products';

class Product extends Component {
  state = { open: false }

  show = () => this.setState({ open: true });

  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  render() {
    const { name, price, description, style, size } = this.props.product;
    const { open, dimmer } = this.state

    return (
      <Grid.Column>
        <Reveal animated='move up'>
          <Reveal.Content visible>
            <Image src={Placeholder} size='large'/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Segment inverted padded='very' textAlign='center' tertiary onClick={this.show('blurring')}>
              <Header>{name}</Header>
              <Header.Subheader>
                ${price}
              </Header.Subheader>
            </Segment>
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
              </Modal.Actions>
            </Modal>
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
    )
  }
}

export default connect()(Product);
