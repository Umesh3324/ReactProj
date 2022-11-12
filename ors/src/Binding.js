import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap';

class Binding extends Component {
  constructor() {
    super();
    this.state = {
      
      subject: ""

    };
  }

  handleChange = event => {
    this.setState({
      subject: event.target.value
    })
  }

  render() { 
    return (
      <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-left p-3 w-100">
          <h4 align='center'>Two way Binding</h4>
          <h3 align='center'>
            <input placeholder="Enter Anything"
              onChange={this.handleChange}></input>
            <br></br>
            <p><b>{this.state.subject}</b></p>
          </h3>
        </Form>
      </Container>
    )
  }
} export default Binding
