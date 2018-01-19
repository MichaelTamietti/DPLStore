import React, { Component } from 'react';
import { Form, Button, Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions/messages';

class Contact extends Component {
  defaults = { name: '', email: '', subject: '', message: '' };
  state = { ...this.defaults };
  
  handleChange = (e, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  }  

  handleSubmit = (e) => {
    e.preventDefault();
    const { type, dispatch } = this.props;
    dispatch(sendMessage(this.state))
    this.setState(this.defaults);
  }
    
  render() {
    const { name, email, subject, message } =  this.state
    return (
      <Grid>
        <Grid.Column width={4}>
        </Grid.Column>
        <Grid.Column width={8}>
        <Card centered color='violet' fluid>
          <Card.Content>
            <Card.Header>
                Contact Us
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Form.Input 
                label='Name' 
                placeholder='Name' 
                required 
                name='name'
                value={name}
                onChange={(e, data) => this.handleChange(e, data)} 
              />  
              <Form.Input 
                label='Email' 
                placeholder='Email' 
                required 
                name='email'
                value={email}
                onChange={(e, data) => this.handleChange(e, data)} 
              />
              <Form.Input 
                label='Subject' 
                placeholder='Subject' 
                required 
                name='subject'
                value={subject}
                onChange={(e, data) => this.handleChange(e, data)} 
              />
              <Form.TextArea 
                label='Message' 
                placeholder='Message' 
                required 
                name='message'
                value={message}
                onChange={(e, data) => this.handleChange(e, data)} 
              />
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Button type='submit'>Submit</Button>
            </Form>
          </Card.Content>
        </Card>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect()(Contact);