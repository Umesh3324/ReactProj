import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BaseCtl from './BaseCtl'
import FormError from './FormError';
import FormMessage from './FormMessage';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class college extends BaseCtl {
    constructor(props){
        super(props);
        this.state={
            inputError: {
                id:'',
                name:'',
                address:'',
                phoneNo:'',
                city:'',
                state:'',
                message: '',
                error: ''
              },

            form: {
                id:'',
                name:'',
                address:'',
                phoneNo:'',
                city:'',
                state:'',
                
            
            },
            };
            const styles = {
              color: 'purple',
              fontSize: '40px',
              border: '2px solid purple'
            }
            if(this.props.match.params.pid){
                this.get();
              }
    }
    get(){
      let id = this.props.match.params.pid;
      console.log(id);
      var url = "http://api.sunilos.com:9080/ORSP10/College/get/"+ id;
      let _self = this;
      axios.get(url).then((res) => {
        this.setState({form: res.data.result.data});
      });
       }

       Save(){
        let url = "http://api.sunilos.com:9080/ORSP10/College/save";
        axios.post(url, this.state.form).then((res) => {
          this.setState({ list: res.data.result.data});
          if(res.data.result.inputerror){
            this.setState({inputError: res.data.result.inputerror});
            this.changeInputError("error", "true")
            console.log("this is error");
          }
          else {
            
            this.changeInputError("error","false")
            this.changeInputError("message","Data Saved Succesfully")
            this.changeInputError("id","")
            this.changeInputError("name","")
            this.changeInputError("address","")
            this.changeInputError("phoneNo","")
            this.changeInputError("city","")
            this.changeInputError("state","")

          }
        });
       }
          
  render() {
    return (
      <>
        <div className='center'>
          <Form className="text-left p-3 w-50" id="sign-in-form">
            <table align="center">
              {(() =>{
                if(!this.props.match.params.pid) {
                  return(
                    <h2 align="center">Add Collage</h2>
                  )
                }
                if(this.props.match.params.pid) {
                  return(
                    <h2 align="center"> Update Collage </h2>
                  )
                }

              }
              )()}
             <div> <FormMessage error={this.getInputError("error")} message={this.getInputError("message")}/> </div>

             <p>
              <input type="number" name="id" value={this.state.form.id} 
              onChange={this.changeFormState}hidden/>               

             </p>
             <label > Name:</label>
             <p><input type="text" name="name" value={this.state.form.name}
             onChange={this.changeFormState} required/></p>
            <div>
              <div><FormError errorname={this.getInputError("name")}/></div>
            </div>

             <label >Address:</label>
             <p><input type="text" name="address" value={this.state.form.address}
             onChange={this.changeFormState} required/></p>
             <div>
              <FormError errorname={this.getInputError("address")}/>
            </div>

             <label > Phone No:</label>
             <p><input type="number" name="phoneNo" value={this.state.form.phoneNo}
             onChange={this.changeFormState} required/></p>
             <div>
              <FormError errorname={this.getInputError("phoneNo")}/>
            </div>

             <label > City:</label>
             <p><input type="text" name="city" value={this.state.form.city}
             onChange={this.changeFormState} required/></p>
             <div>
              <FormError errorname={this.getInputError("city")}/>
            </div>

             <label > State Name:</label>
             <p><input type="text" name="state" value={this.state.form.state}
             onChange={this.changeFormState} required/></p>
             <div>
              <FormError errorname={this.getInputError("state")}/>
            </div>
            <Button variant='primary' type='button'
            onClick={(event) => this.Save(event)}>Save</Button>
            
            </table>
          </Form>
           
        </div>
        <br></br>
        <br></br>
      </>
    )
  }
}
