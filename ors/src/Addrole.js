import axios from 'axios';
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import BaseCtl from './BaseCtl';
import FormError from './FormError'
import FormMessage from './FormMessage'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class role extends BaseCtl {
    constructor(props) {
        super(props);
        this.state={
            inputError:{
            id:'',
            name:'',
            discription:'',
            error:'',
            message:''
            },

        form:{
            id:'',
            name:'',
            discription:'',
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
            var url = "http://api.sunilos.com:9080/ORSP10/Role/get/" + id;
            let _self = this;
            axios.get(url).then((res) => {
                this.setState({ form: res.data.result.data});
            });
        }
        Save() {
            let url = "http://api.sunilos.com:9080/ORSP10/Role/save";
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
                    this.changeInputError("name", "")
                    this.changeInputError("discription", "")
                }
            });
        }
        resetForm = () => {
            this.setState({
                form:{
                    id:'',
                    name:'',
                    discription:'',
                }
            })
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
                        <h2 align="center"> Add Role </h2>
                    )
                }
                if(this.props.match.params.pid) {
                    return(
                        <h2 align="center"> Update Role </h2>
                    )
                }
            })()}
            <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
            <p>
                <input type="number" name="id" value={this.state.form.id}
                onChange={this.changeFormState} hidden   />
                
            </p>

            <label> Name :</label>
            <p>
                <input type="text" name="name" value={this.state.form.name}
                onChange={this.changeFormState} required />
            </p>
            <div> <FormError errorname={this.getInputError("name")}/> </div>

            <label>Discription :</label>
            <p>
                <input type="text" name="discription" value={this.state.form.discription}
                onChange={this.changeFormState} required />
            </p>
            <div> <FormError errorname={this.getInputError("discription")} /> </div>

<br></br>
<Button type='button' onClick={(event) => this.Save(event)}>Save</Button> &nbsp; &nbsp;
            <Button type='reset' variant="danger" onClick={(event) => this.resetForm(event)} >Cancel</Button> 

            
            
        </table>
    </Form>

</div>
</>
    )
  }
}