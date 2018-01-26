import React, { Component } from 'react';
import { Header, Item, Grid, Segment, Input, Container, Dropdown } from 'semantic-ui-react';
import Placeholder from '../../images/placeholder.png';

const styles = {
  inputStyle: {
    width: '60px',
    fontSize: '13px',
  }
}

const dropdownValues = [
  { key: '1', value: '1', text: '1' },
  { key: '2', value: '2', text: '2' },
  { key: '3', value: '3', text: '3' },
  { key: '4', value: '4', text: '4' },
  { key: '5', value: '5', text: '5' },
  { key: '6', value: '6', text: '6' },
  { key: '7', value: '7', text: '7' },
  { key: '8', value: '8', text: '8' },
  { key: '9', value: '9', text: '9' },
  { key: '10+', value: '10+', text: '10+' },
]


class CartItem extends Component {
  state = {}

  render() {
    return (
      <Item>
        <Item.Image size='tiny' src={Placeholder} />
        <Item.Content verticalAlign='middle'>
          <Container>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={11}>
              Name: Hoodie
              <Item.Description>Price: $15.00</Item.Description>
              </Grid.Column>
              <Grid.Column width={1}>
                  <Dropdown compact selection style={styles.inputStyle} options={dropdownValues} defaultValue='1' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
        </Item.Content>
      </Item>
    );
  }
}

export default CartItem;