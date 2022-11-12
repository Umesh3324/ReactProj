import axios from 'axios';
import React, { Component } from 'react'
import { Button, Container,Form } from 'react-bootstrap';
import { Link, Route, Switch,BrowserRouter as Router } from 'react-router-dom';
import FormMessage from './FormMessage';
import BaseCtl from './BaseCtl';
import Addcollege from './Addcollege';


export default class Collegelist extends BaseCtl {
    constructor(props) {
        super(props);
        this.state={
             inputError:{
                message:"",
                Error:"",

             },
            id:"",
            name:"",
            address:"",                                                                                                                                                                                                                                     
            list:[]
        };
        this.search();

    }
    search() {
        axios.post("http://api.sunilos.com:9080/ORSP10/College/search", this.state).then((res)=>{
         this.setState({list: res.data.result.data});
        });
    }
    delete(id) {
        console.log(this.state.message)
        let _self = this;
        let url = "http://api.sunilos.com:9080/ORSP10/College/delete/" + id;
        axios.get(url).then((res) =>{
            _self.list =res.data.result.data;
            console.log(res.data.result);
            this.changeInputError("message","Data Delete Successfully");
            this.changeInputError("error","false");
            this.search();
        }); 
    }
  render() {
    return (
      <div>
         <div className='container mt-3'>
            <Container id="main-container" className='d-grid h-50 d-flex justify-content-center'>
                <Form id="sign-in-form" className="text-left p-3 w-30">
                    <h1 align="center"> College List </h1>
                    <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")}/> </div>

                    <input type="text" name="name" placeholder='search by name' value={this.state.name} 
                    onChange={(event) => this.changeState(event)} />
                    &nbsp; &nbsp;
                    <input type="text" name="address" placeholder='type your Address'
                    value={this.state.address} onChange={(event) => this.changeState(event)} />
                    &nbsp; &nbsp;
                    <Button type='button' onClick={(event) => this.search(event)}>Search</Button>
                </Form>
            </Container>
            <br></br>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            <tbody>
            {
                this.state.list.map((ele, i) => (
                    <tr key={i}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.address}</td>
                        <td>{ele.phoneNo}</td>
                        <td>{ele.city}</td>
                        <td>{ele.state}</td>
                        <td>
                            <Button type='button' onClick={(event) => this.delete(ele.id)}>Delete</Button>
                            
                        </td>
                        <td>
                            <Switch>
                               <Route path="/college/:pid" key="edit-collegeList" component={Addcollege}/>
                            </Switch>
                            <Link to={'/college/' + ele.id}>Edit</Link>
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </table>
            
            </div>
            <br />
      <div className='d-flex justify-content-between'>
<Button type='button'onClick={(event) => this.delete()}>Previous</Button>,
<Button type='button'onClick={(event) => this.delete()}>New</Button>,
<Button type='button'onClick={(event) => this.delete()}>Next</Button>   

</div>
      </div>
    )
  }
}
