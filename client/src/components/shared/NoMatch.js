import React, { Component } from 'react';
import { Segment, Image, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Beaker-purple.png';

class NoMatch extends Component {
  render() {
    return (
      <Segment>
        <Image src={Logo} size='small' centered />
        <Container textAlign='center'>
          <Header as='h3'>Sorry! The page you were looking for doesn't exist.</Header>
          <Header as='h3'>You may have mistyped the address or the page may have moved.</Header>
          <Header as='h3'>Here is the way back<Link to='/'> Home</Link></Header>
        </Container>
      </Segment>
    );
  }
}

export default NoMatch;
