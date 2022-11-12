import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BaseCtl from './BaseCtl';
import FormError from './FormError'
import FormMessage from './FormMessage'

export default class student extends BaseCtl {
    constructor(props) {
        super(props);
        
        this.state={
            inputError:{
            id:'',
            firstName:'',
            lastName:'',
            collegeId:'',
            mobileNo:'',
            email:'',
            error:'',
            message:''
            },

        form:{
            id:'',
            firstName:'',
            lastName:'',
            collegeId:'',
            mobileNo:'',
            email:'',
            },
        };
        const styles = {
            color: 'purple',
            fontSize: '40px',
            border: '2px solid purple'
          }
          if(this.props.match.params.pid) {
            this.get();
          }
        }
        get() {
            let id = this.props.match.params.pid;
            console.log(id);
            var url = "http://api.sunilos.com:9080/ORSP10/Student/get/" + id;
            let _self = this;
            axios.get(url).then((res) => {
                this.setState({ form: res.data.result.data});
            });
        }
        resetForm = () => {
            this.setState({
                form:{
                id:'',
                firstName:'',
                lastName:'',
                collegeId:'',
                mobileNo:'',
                email:'',
            }
                // alert("okay");
            })
        }
        
        Save() {
            let url = "http://api.sunilos.com:9080/ORSP10/Student/save";
            axios.post(url,this.state.form).then((res) => {
                this.setState({ list: res.data.result.data});
                if(res.data.result.inputerror) {
                    this.setState({inputError: res.data.result.inputerror});
                    this.changeInputError("error", "true");
                }
                else{
                    this.changeInputError("error", "false")
                    this.changeInputError("message", "Data Saved Successfully")
                    this.changeInputError("id", "")
                    this.changeInputError("firstName", "")
                    this.changeInputError("lastName", "")
                    this.changeInputError("collegeId", "")
                    this.changeInputError("mobileNo", "")
                    this.changeInputError("email", "")
                }
            });
        }
        
    
  render() {
    return (
<>
<div className='center'>
    <Form id="sign-in-form" className="text-left p-3 w-50">
        <table align="center" >
            {(() => {
                if(!this.props.match.params.pid) {
                    return(
                        <h2 align="center"> Add Student </h2>
                    )
                }
                if(this.props.match.params.pid) {
                    return(
                        <h2 align="center"> Update Student </h2>
                    )
                }
            })()}
            <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
            <p>
                <input type="number" name="id" value={this.state.form.id}
                onChange={this.changeFormState} hidden   />
                
            </p>

            <label>First Name :</label>
            <p>
                <input type="text" name="firstName" value={this.state.form.firstName}
                onChange={this.changeFormState} required />
            </p>
            <div> <FormError errorname={this.getInputError("firstName")}/> </div>

            <label>Last Name :</label>
            <p>
                <input type="text" name="lastName" value={this.state.form.lastName}
                onChange={this.changeFormState} required />
            </p>
            <div> <FormError errorname={this.getInputError("lastName")} /> </div>

            <label>College Id :</label>
            <p>
                <input type="number" name="collegeId" value={this.state.form.collegeId}
                onChange={this.changeFormState} required />
            </p>
            <div> <FormError errorname={this.getInputError("collegeId")} /> </div>

            <label>Mobile No. :</label>
            <p>
                <input type="number" name="mobileNo" value={this.state.form.mobileNo}
                onChange={this.changeFormState} required />
            </p>
            <div> <FormError errorname={this.getInputError("mobileNo")} /> </div>

            <label>Email :</label>
            <p>
            <input type="email" name="email" value={this.state.form.email}
            onChange={this.changeFormState} />
            </p>
            <div> <FormError errorname={this.getInputError("email")} /> </div>
<br></br>
            
            <Button type='button'  onClick={(event) => this.Save(event)}>Save</Button> &nbsp; &nbsp;
            <Button type='reset' variant="danger" onClick={(event) => this.resetForm(event)}>Cancel</Button>
            
        </table>
    </Form>

</div>
</>
    )
  }
}