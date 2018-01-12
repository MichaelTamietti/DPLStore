import React, { Component } from 'react';
import { Form, Button, Grid, Card } from 'semantic-ui-react';

class Contact extends Component {
  state = { name: '', email: '', subject: '', message: '' }
  
  // handleChange = (e, { name, value }) => this.setState({ [name]: value })
  
  // handleSubmit = () => {
    //   const { name, email } = this.state
    
    //   this.setState({ submittedName: name, submittedEmail: email })
    // }
    
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
            <Form size='large'>
              <Form.Input 
                label='Name' 
                placeholder='Name' 
                required 
                name='name' 
              />  
              <Form.Input 
                label='Email' 
                placeholder='Email' 
                required 
                name='email' 
              />
              <Form.Input 
                label='Subject' 
                placeholder='Subject' 
                required 
                name='subject' 
              />
              <Form.TextArea 
                label='Message' 
                placeholder='Message' 
                required 
                name='message' 
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

export default Contact;