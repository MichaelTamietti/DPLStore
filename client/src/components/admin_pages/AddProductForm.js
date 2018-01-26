import React, { Component } from 'react';
import { Form, Button, Modal, Header, Image, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addProduct, editProduct } from '../../actions/products';
import Dropzone from 'react-dropzone';

class AddProductForm extends Component {
  defaults = { name: '', price: 0.0, style: '', size: '', description: '', open: false, file: {}, images: [] };
  state = { ...this.defaults };
  componentDidMount(){
    if(this.props.type === 'edit' && this.props.product){
      const { name , price, style, size, description, images } = this.props.product;
      this.setState({ name, price, style, size, description, images })
    }
  }
  handleChange = (e, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { type, dispatch } = this.props;
    if(type === 'edit'){
      const { id } = this.props.product;
      dispatch(editProduct(this.state, id));
    } else {
      dispatch(addProduct(this.state));
    }
    this.setState(this.defaults);
  }
  show = dimmer => () => this.setState({ dimmer, open: true })

  close = () => this.setState({ open: false })

  onDrop = (files) => {
    this.setState({
      file: files[0]
    });
  }

  render() {
    const { name, price, style, size, description, images } = this.state
    const { open, dimmer } = this.state

    if(this.props.type === 'edit') {
      return (
        <div>
          <Button onClick={this.show('blurring')} color='blue' inverted>
            <Icon name='edit' color='blue' />
            Edit Product
          </Button>
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Header>Edit Product Form</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group widths='equal'>
                    <Form.Input
                      label='Name of Product'
                      placeholder='Product'
                      name='name'
                      value={name}
                      onChange={(e, data) => this.handleChange(e, data)}
                    />
                    <Form.Input
                      label='Price of Product'
                      placeholder='Price'
                      name='price'
                      value={price}
                      onChange={(e, data) => this.handleChange(e, data)}
                    />
                  </Form.Group>
                  <Form.Group widths='equal'>
                    <Form.Input
                      label='Product Style'
                      placeholder='Style'
                      name='style'
                      value={style}
                      onChange={(e, data) => this.handleChange(e, data)}
                    />
                    <Form.Input
                      label='Size'
                      placeholder='Size'
                      name='size'
                      value={size}
                      onChange={(e, data) => this.handleChange(e, data)}
                    />
                  </Form.Group>
                  <Form.TextArea
                    label='Product Description'
                    placeholder='Description'
                    name='description'
                    value={description}
                    onChange={(e, data) => this.handleChange(e, data)}
                  />
                  <Dropzone onDrop={this.onDrop}>
                    <p>Try dropping some files here, or click to select files to upload.</p>
                  </Dropzone>
                  {
                    this.state.file &&
                      <Image src={this.state.file.preview} size='large' />
                  }
                  <Form.Button>Submit</Form.Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      )
    }
    return (
      <div>
        <Button onClick={this.show('blurring')}>Add Product</Button>
        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Product Form</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Name of Product'
                    placeholder='Product'
                    name='name'
                    value={name}
                    onChange={(e, data) => this.handleChange(e, data)}
                  />
                  <Form.Input
                    label='Price of Product'
                    placeholder='Price'
                    name='price'
                    value={price}
                    onChange={(e, data) => this.handleChange(e, data)}
                  />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    label='Product Style'
                    placeholder='Style'
                    name='style'
                    value={style}
                    onChange={(e, data) => this.handleChange(e, data)}
                  />
                  <Form.Input
                    label='Size'
                    placeholder='Size'
                    name='size'
                    value={size}
                    onChange={(e, data) => this.handleChange(e, data)}
                  />
                </Form.Group>
                <Form.TextArea
                  label='Product Description'
                  placeholder='Description'
                  name='description'
                  value={description}
                  onChange={(e, data) => this.handleChange(e, data)}
                />
                <Dropzone onDrop={this.onDrop}>
                  <p>Try dropping some files here, or click to select files to upload.</p>
                </Dropzone>
                {
                  this.state.file &&
                    <Image src={this.state.file.preview} size='large' />
                }
                <Form.Button>Submit</Form.Button>
              </Form>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
export default connect()(AddProductForm);
