import React, { Component } from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../../actions/auth';
import Logo from '../../images/DPL-Mark.png';


const styles = {
  styleButton: {
    border: '2px solid #000000',
    color: '#000000',
    display: 'block',
    margin: '35px  20px',
    width: '140px',
    fontSize: '10px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  }
};

class Footer extends Component {

  ifAdminFooter = () => {
    const { user, dispatch, history } = this.props

    if (user.id) {
      return (
        <div></div>
      );
    }

    return (
      <div className="ui centered segment">
        <Grid centered padded>
          <a href='http://www.devpointlabs.com/' target='_blank' rel='noopener noreferrer'>
            <Image src={Logo} size='medium' wrapped />
          </a>
        </Grid>
      </div>
       
    );
  }

  render() {
    return (
      <div className='footerSpace'>
        { this.ifAdminFooter() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
}

export default withRouter(connect(mapStateToProps)(Footer));