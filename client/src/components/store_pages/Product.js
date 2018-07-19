import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Header, Icon, Grid, Confirm, Image, Reveal, Segment } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';
import { deleteProduct } from '../../actions/products';

// import Tshirt from 'https://farm2.staticflickr.com/1828/41629773830_bd706bd411_z.jpg';
// import Hoodie from 'https://farm1.staticflickr.com/834/41629773730_e53dc94380_z.jpg';
// import Iphone from 'https://farm1.staticflickr.com/927/41629773590_8a4f3db2a6_z.jpg';
// import Hat from 'https://farm1.staticflickr.com/840/29566864438_deb5296593_z.jpg';
// import Top from 'https://farm1.staticflickr.com/836/29566864098_e857f36e63_z.jpg';
// import Crewneck from 'https://farm2.staticflickr.com/1804/29566863818_3963c379b5_z.jpg';


class Product extends Component {
  state = { open: false, cart: []}

  show = () => this.setState({ open: true });

  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })
 
  render() {
    const { name, price, description, style, size, images } = this.props.product;
    const { open, dimmer } = this.state


    

    return (
      <Grid.Column>
          <Reveal.Content visible>
          <Image src={images} size='medium'/>
   
          </Reveal.Content>
          <Reveal.Content hidden>
            <Segment inverted padded='very' textAlign='center' tertiary onClick={this.show('blurring')}>
              <Header style={styles.textSizing}>{name}</Header>
              <Header.Subheader>
                ${price}
              </Header.Subheader>
            </Segment>
            <Modal open={open} onClose={this.close}>
              <Modal.Header >{name}</Modal.Header>
              <Modal.Content>
                <Image wrapped size='small'  />
                <Modal.Description>
                  <Header>{name}</Header>
                  
                  <p>${price}</p>
                  <p>{description}</p>
                  <p>Style: {style}</p>
                  <p>Sizes: {size}</p>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                {/* <Button>
                  <Icon name='in cart' />Add To Cart
                </Button> */}
                <Button onClick={() => this.props.handleOnAdd(this.props.product)} >ADD</Button>
              </Modal.Actions>
            </Modal>
          </Reveal.Content>
      </Grid.Column>
    )
  }
}

let styles = {
  textSizing: {
    fontSize: '16px',
    margin: '5px -15px',
  }
}

export default connect()(Product);
