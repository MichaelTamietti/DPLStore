import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';
import { Image } from 'semantic-ui-react';
import Logo from '../../images/Beaker-purple.png';

const styles = {
  styleButton: {
    color: '#000000',
    display: 'block',
    margin: '35px  20px',
    width: '100px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    
  }
}
class NavBar extends Component {
  state = { activeItem: 'Products' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  ifAdminNav = () => {
    const { user, dispatch, history } = this.props
    const { activeItem } = this.state

    if (user.id) {
      return (
        <Menu pointing secondary compact size='massive'>

          <Link to='/dashboard' >
            <Menu.Item
              name='Dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/admin-products' >
            <Menu.Item
              name='Products'
              active={activeItem === 'Products'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/orders' >
            <Menu.Item
              name='Orders'
              active={activeItem === 'Order'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu>
      );
    }

    return (
      <Menu pointing secondary size='massive'  style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
        <a href='http://www.devpointlabs.com/' target='_blank' rel='noopener noreferrer'>
          <Image className='imageMenu' src={Logo} size='tiny' wrapped />
        </a>
        <Menu.Menu className='menuNav' position='right'>
            <Link to='/' >
              <Menu.Item 
                float='right'
                name='Products'
                active={activeItem === 'Products'}
                onClick={this.handleItemClick}
                />
            </Link>
            <Link to='/Cart' >
              <Menu.Item
                float='right'
                name='Cart'
                active={activeItem === 'Cart'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to='/AboutUs'>
              <Menu.Item
                name='AboutUs'
                active={activeItem === 'AboutUs'}
                onClick={this.handleItemClick}
              />
            </Link>
          </Menu.Menu>
      </Menu>
    );
  }

  render() {
    return (
      <Grid centered padded>
        { this.ifAdminNav() }
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}



export default withRouter(connect(mapStateToProps)(NavBar));
