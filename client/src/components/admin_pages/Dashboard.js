import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import AddProductForm from './AddProductForm';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Dashboard Component</Header>
        <AddProductForm type='add'/>
      </div>
    );
  }
}

export default Dashboard;
