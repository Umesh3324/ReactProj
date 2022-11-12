import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import reactRouterDom from 'react-router-dom';
import BaseCtl from './BaseCtl';
import Dashboard from './Dashboard';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,  Container, Form, } from 'react-bootstrap';
import FormMessage from './FormMessage';
import FormError from './FormError';



 /*To add and update student marks*/
class marksheet extends BaseCtl {
  constructor(props) {
    super(props);
    this.state = {
     
      inputError: {
        id: '',
        rollNo: '',
        name: '',
        physics: '',
        chemistry: '',
        maths: '',
        studentId: '',
        message: '',
        error: ''
      },

      form: {
        id: '',
        rollNo: '',
        name: '',
        physics: '',
        chemistry: '',
        maths: '',
        studentId: ''
      },

    };
    const styles = {
      color: 'purple',
      fontSize: '40px',
      border: '2px solid purple'
    }
    if (
      this.props.match.params.pid) {
      this.get();
    }
  }
  /*to get the marksheet data */
  get() { 
    let id = this.props.match.params.pid;
    console.log(id);
    var url = "http://api.sunilos.com:9080/ORSP10/Marksheet/get/" + id;
    let _self= this;
    axios.get(url).then((res) => {
      this.setState({ form: res.data.result.data });
    });
  } 
  resetForm = () => {
    this.setState({
      form:{
        id: '',
        rollNo: '',
        name: '',
        physics: '',
        chemistry: '',
        maths: '',
        studentId: ''
      }
    })
  }
  /**save marksheet */
  Save() {
    let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/save";    
    axios.post(url, this.state.form).then((res) => {
      this.setState({ list: res.data.result.data });
      if (res.data.result.inputerror) {
        this.setState({ inputError: res.data.result.inputerror });
        this.changeInputError("error", "true")
      }  
      else {
        this.changeInputError("error", "false")
        this.changeInputError("message", "Data saved Successfully");
        this.changeInputError("id", "")
        this.changeInputError("rollNo", "")
        this.changeInputError("name", "")
        this.changeInputError("physics", "")
        this.changeInputError("chemistry", "")
        this.changeInputError("maths", "")
        this.changeInputError("studentId", "")
      }
    });
  }
  render() {
    return (
      <>
        <div className='center'>
          <Form id="sign-in-form" className="text -left p-3 w-50" >
            <table align="center">
              {(() => {
                if (!this.props.match.params.pid) {
                  return (
                    <h2 align='center'>Add Marksheet</h2>
                  )
                } 
                if (this.props.match.params.pid) {
                  return (
                    <h2 align='center'>Update Marksheet</h2>
                  )
                }
              })()}
              <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
              <p>
                <input
                  type="number"
                  name="id"
                  value={this.state.form.id}
                  onChange={this.changeFormState} hidden />
              </p>
              <label>Roll No:</label>
              <p>
                <input
                  type="number"
                  name="rollNo"
                  value={this.state.form.rollNo}
                  onChange={this.changeFormState} required />
              </p>

              <div><FormError errorname={this.getInputError("rollNo")} /></div>

              <label>Name:</label>
              <p>
                <input
                  type="text"
                  name="name"
                  value={this.state.form.name}
                  onChange={this.changeFormState} required ></input>
              </p>
              <div>
                <div><FormError errorname={this.getInputError("name")} /></div>
              </div>
              <label>Physics:</label>
              <p>
                <input
                  type="number"
                  name="physics"
                  value={this.state.form.physics}
                  onChange={this.changeFormState} ></input>
              </p>
              <div>
                {/* <h6 class="errormessage">{this.state.inputError.physics}</h6> */}
                <div><FormError errorname={this.getInputError("physics")} /></div>
              </div>
              <label>Chemistry:</label>
              <p>
                <input
                  type="number"
                  name="chemistry"
                  value={this.state.form.chemistry}
                  onChange={this.changeFormState} required></input>
              </p>

              <div><FormError errorname={this.getInputError("chemistry")} /></div>

              <label>Maths:</label>
              <p>
                <input
                  type="number"
                  name="maths"
                  value={this.state.form.maths}
                  onChange={this.changeFormState} required></input>
              </p>
              <div><FormError errorname={this.getInputError("maths")} /></div>
              <label>StudentId:</label>
              <p>
                <input
                  type="number"
                  name="studentId" required
                  value={this.state.form.studentId}
                  onChange={this.changeFormState} ></input>
              </p>
              <div><FormError errorname={this.getInputError("studentId")} /></div>
              <br></br>
              <Button variant="primary" type='button'
                onClick={(event) => this.Save(event)}>Save</Button> &nbsp; &nbsp;
              <Button type='reset'  variant="danger" onClick={(event) => this.resetForm(event)} >Cancel</Button> 
              
            </table>
          </Form>

        </div>
        <br></br>
        <br></br>
      </>
    )
  }
}
//enable import to otherclasses
export default marksheet;
