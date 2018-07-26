import React, { Component } from 'react';
import { Table, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Orders extends Component {

  state = { 
    complete: false, 
  }

 orderList = () => {
   let { Orders } = this.state;
   
   return (
     <Table celled>
      { Orders.map( p =>
          <Table.Row key={p.id}>
            {/* <Link to={`/orders/${p.id}`}>{p.name}</Link> */}
            <Table.Cell>
              Name: {this.props.customerName}
              <br />
              Email: {this.props.customerEmail}
              <br />
              Address: {this.props.customerAddress} {' '} {this.props.customerAdditionalAddress} 
            </Table.Cell>
            <Table.Cell>
              Description: {this.props.cartProducts}
              <br />
              Quantity: {this.props.cartUnits}
              <br />
              Date of Purchase: {this.props.orderDate}
            </Table.Cell>
            <Table.Cell textAlign='left'>
              Total Amount: {this.props.amount}
            </Table.Cell>
            <Table.Cell>
              <Checkbox></Checkbox>
            </Table.Cell>
          </Table.Row>
        )
      }
    </Table>
   )
 }


 render() {

   if (this.props.complete) {
    return (
      this.orderList()
    );
  } else {
      return (
        <div>
          <Table stackable celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Contact Information: </Table.HeaderCell>
                <Table.HeaderCell>Purchase description:</Table.HeaderCell>
                <Table.HeaderCell>Purchase Information:</Table.HeaderCell>
                <Table.HeaderCell>Status:</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell textAlign='left'>
                  Name:
                  <br />
                  Email:
                  <br />
                  Address:
                </Table.Cell>
                <Table.Cell textAlign='left'>
                  Description:
                  <br />
                  Quantity:
                  <br />
                  Date of Purchase:
                </Table.Cell>
                <Table.Cell textAlign='left'>
                  Total Amount:
                </Table.Cell>
                <Table.Cell>
                  <Checkbox defaultChecked></Checkbox>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => { 
  return {
    // orderDate: this.state.transactionDate,
    // customerEmail: this.state.customerEmail, 
    // customerName: this.state.customerName, 
    // amount: this.state.amount, 
    // customerAddress: this.state.customerAddress, 
    // customerAdditionalAddress: this.state.customerAdditionalAddress, 
    // customerCity: this.state.customerCity, 
    // customerWhichState: this.state.customerWhichState,

    // cartProducts: this.state.cartItem.products,
    // cartUnits: this.state.cartItem.units
  }
}

export default connect(mapStateToProps)(Orders);