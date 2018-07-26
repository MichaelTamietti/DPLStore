import React, { Component } from 'react';
import { Header, Grid, Icon, Image } from 'semantic-ui-react';
import Logo from '../../images/DPL-Mark.png';


const AboutUs = () => (
  <Header as='h1' textAlign='center'>About Us 
  
  <br/>
  <br/>
  <br/>
  <br/>
  <Header as='h2' dividing>
  About DevPoint Lav
  </Header>
  
  <Header as='h3' block>
    DevPoint Labs is a coding bootcamp that started in the summer of 2013. We offer a 
    full-time and part-time web development course including a part-time UX Design class. 
    Our accelerated learning model provides an immersive experience for those looking to learn 
    programming, pivot careers, and become apart of a vibrant developer community.
    </Header>
  <br/>
  <br/>
  <Header as='h2' dividing>
  Our Mission
  </Header>

  <Header as='h4' block>
    Students always come first, period. It's our mission to deliver a world class experience 
    while teaching the latest technologies. We strive to improve the quality of life for our 
    students and a better future for our community.
    </Header>
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
      
      </Grid>
      <br/>
      <br/>
      <br/>
      

    
    
  
  </Header>
  

);


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