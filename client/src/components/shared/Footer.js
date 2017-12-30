import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';
import Logo from '../../images/DPL-Mark.png';

class Footer extends Component {

  ifAdminFooter = () => {
    const { user, dispatch, history } = this.props

    if (user.id) {
      return (
        <div></div>
      );
    }

    return (
      <Grid centered padded>
        <Link to='/'>Products</Link>
        <Link to='/Cart'>Cart</Link>
        <Link to='/Contact'>Contact</Link>
        <Grid.Row>
          <a href='https://www.facebook.com/DevPointLabs/' target='_blank' rel='noopener noreferrer'>
            <Icon name='facebook square' link size='large' />
          </a>
          <a href='https://twitter.com/devpointlabs?lang=en' target='_blank' rel='noopener noreferrer'>
            <Icon name='twitter square' link size='large' />
          </a>
          <a href='https://www.instagram.com/devpointlabs/' target='_blank' rel='noopener noreferrer'>
            <Icon name='instagram' link size='large' />
          </a>
        </Grid.Row>
        <a href='http://www.devpointlabs.com/' target='_blank' rel='noopener noreferrer'>
          <Image src={Logo} size='large' wrapped />
        </a>
      </Grid>
    );
  }

  render() {
    return (
      <div>
        { this.ifAdminFooter() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}

export default withRouter(connect(mapStateToProps)(Footer));