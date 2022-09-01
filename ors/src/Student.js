import React from 'react'
import ReactDOM from 'react-dom';
import BaseCtl from './BaseCtl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';

export class Student extends BaseCtl {

  constructor(props) {
    super(props);
    this.state = {
      Id: '',
      lname: ''
    };
  }
  add() {
    if(!this.state.Id||!this.state.lname){ 
       alert("All Feilds are Mandatory");
       return;
     }
    alert(`${this.state.Id}  ${this.state.lname}`);
  }
  render() {
    return (
     <>
     <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-left p-3 w-50">
          <h2>Add Student</h2>
          
            <label>Name</label>
            <p>
            <input name="Id"
              value={this.state.Id}
              onChange={this.changeState} />
              </p>
            
             
            <label>Surname</label>
            <p>
            <input name="lname"
              value={this.state.lname}
              onChange={this.changeState} />
              </p>
          <br></br>
          <Button type='button'
            onClick={(event) => this.add(event)}>add</Button>
       </Form>
       </Container>
       </>
    )
  }
}
export default Student
