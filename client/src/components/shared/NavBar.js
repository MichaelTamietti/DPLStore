import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';

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
          <Link to='/dashboard' style={styles.styleButton}>
            <Menu.Item
              name='Dashboard'
              active={activeItem === 'Dashboard'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/admin-products' style={styles.styleButton}>
            <Menu.Item
              name='Products'
              active={activeItem === 'Products'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/orders' style={styles.styleButton}>
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
      <Menu pointing secondary compact size='massive'>
        <Link to='/' style={styles.styleButton}>
          <Menu.Item
            name='Products'
            active={activeItem === 'Products'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/Cart' style={styles.styleButton}>
          <Menu.Item
            name='Cart'
            active={activeItem === 'Cart'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/Checkout' style={styles.styleButton}>
          <Menu.Item
            name='Checkout'
            active={activeItem === 'Checkout'}
            onClick={this.handleItemClick}
          />
        </Link>
        <Link to='/Contact' style={styles.styleButton}>
          <Menu.Item
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
        </Link>
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
