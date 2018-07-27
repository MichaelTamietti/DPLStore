import React, { Component } from 'react';
import { Segment, Form, Button ,Container, Header, Grid, Icon, Image, Conta } from 'semantic-ui-react';
import Logo from '../../images/DPL-Mark.png';

const colors = [
  'violet',
]


const styleBackground = {
  background: '#8068a0',
  color: 'violet'}

class AboutUs extends Component {

handleEmailChange = (e) => {
  this.setState({
    email: e.target.value
  })
}

handleMessageChange = (e) => {
  this.setState({
    message: e.target.value
  })
}

onSubmit = (e) => {
  e.target.reset()
};

  render() {
    return (
<div>
  <Segment>
    <br/>
    <br/>
  
  
  <Header as='h1' textAlign='center'>
  <br/>
  <br/>
  
  <div className="ui one column transparent grid">
 <div style= {styleBackground} className="column">
  <div style= {styleBackground} className="ui centered transparent segment">
  <br/>
  <Container width={0}>
    <Header as='h2' textAlign='left' dividing>
    About DevPoint Labs
    </Header>
    <p>
    <Header as='h4' textAlign='left' >
    DevPoint Labs is a coding bootcamp that started in the summer of 2013. We offer a 
    full-time and part-time web development course including a part-time UX Design 
    class. Our accelerated learning model provides an immersive experience for those looking to learn 
    programming, pivot careers, and become apart of a vibrant developer community.
    </Header>
    </p>
    
  <br/>
  <br/>
  
  <Header as='h2' textAlign='left' dividing >
  Our Mission
  </Header>
  <p>
  <Header as='h4'textAlign='left'>
    Students always come first, period. It's our mission to deliver a world class experience 
    while teaching the latest technologies. We strive to improve the quality of life for our 
    students and a better future for our community.
    </Header>
    </p>
    </Container>
    <br/>
    </div>
    </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Form onSubmit={this.onSubmit}>
        <Form.Input label="Contact Us" onChange={this.handleEmailChange} placeholder="Email:" />
        <Form.TextArea label="Message" placeholder="" onChange={this.handleMessageChange}/>
        <Button>Submit</Button>
      </Form>
      <br/>
      <br/>
    <Grid>
    <Grid.Row centered padded>
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
        <Grid.Row centered padded>
        <h4 textAlign='center'>© Copyright 2018 DevPoint Lab All Rights Reserved</h4>
      </Grid.Row>
      </Grid>
    
      
  </Header>
  </Segment>
  </div>

);
  }
}

export default AboutUs;















// import React, { Component } from 'react';
// import { Form, Button, Grid, Card } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { sendMessage } from '../../actions/messages';

// class Contact extends Component {
//   defaults = { name: '', email: '', subject: '', message: '' };
//   state = { ...this.defaults };
  
//   handleChange = (e, data) => {
//     const { name, value } = data;
//     this.setState({ [name]: value });
//   }  

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { type, dispatch } = this.props;
//     dispatch(sendMessage(this.state))
//     this.setState(this.defaults);
//   }
    
//   render() {
//     const { name, email, subject, message } =  this.state
//     return (
//       <Grid>
//         <Grid.Column width={4}>
//         </Grid.Column>
//         <Grid.Column width={8}>
//         <Card centered color='violet' fluid>
//           <Card.Content>
//             <Card.Header>
//                 Contact Us
//             </Card.Header>
//           </Card.Content>
//           <Card.Content>
//             <Form size='large' onSubmit={this.handleSubmit}>
//               <Form.Input 
//                 label='Name' 
//                 placeholder='Name' 
//                 required 
//                 name='name'
//                 value={name}
//                 onChange={(e, data) => this.handleChange(e, data)} 
//               />  
//               <Form.Input 
//                 label='Email' 
//                 placeholder='Email' 
//                 required 
//                 name='email'
//                 value={email}
//                 onChange={(e, data) => this.handleChange(e, data)} 
//               />
//               <Form.Input 
//                 label='Subject' 
//                 placeholder='Subject' 
//                 required 
//                 name='subject'
//                 value={subject}
//                 onChange={(e, data) => this.handleChange(e, data)} 
//               />
//               <Form.TextArea 
//                 label='Message' 
//                 placeholder='Message' 
//                 required 
//                 name='message'
//                 value={message}
//                 onChange={(e, data) => this.handleChange(e, data)} 
//               />
//               <Form.Checkbox label='I agree to the Terms and Conditions' />
//               <Button type='submit'>Submit</Button>
//             </Form>
//           </Card.Content>
//         </Card>
//         </Grid.Column>
//       </Grid>
//     );
//   }
// }

// export default connect()(Contact);