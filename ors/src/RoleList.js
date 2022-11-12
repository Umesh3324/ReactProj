import axios from 'axios'
import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom'
import BaseCtl from './BaseCtl'
import FormMessage from './FormMessage'
import Addrole from './Addrole'

export default class RoleList extends BaseCtl {
    constructor(props) {
        super(props);
        this.state={
            inputError:{
                error:"",
                message:"",
            },
            id:"",
            name:"",
            discription:"",
            list: []
        };
        this.search();
    }
    search() {
        axios.post("http://api.sunilos.com:9080/ORSP10/Role/search", this.state).then((res) => {
            this.setState({list: res.data.result.data});
        });
    }

    delete(id) {
        console.log(this.state.message);
        let _self =this;
        let url = "http://api.sunilos.com:9080/ORSP10/Role/delete/" + id;
        axios.get(url).then((res) => {
            _self.list = res.data.result.data;
            console.log(res.data.result);
            this.changeInputError("message","Data Saved Successfully");
            this.changeInputError("error","false");
            this.search();
        });
    }
  render() {
    return (
      <>
      <div className='container mt-3'>
        <Container id="main-container" className='d-grid h-50 d-flex justify-content-center'>
            <Form id="sign-in-form" className='text-left p-3 w-50'>

            <h1 align="center"> Role List </h1>
            <div><FormMessage  error={this.getInputError("error")} message={this.getInputError("message")} /> </div>
            
            <input type="text" name="name" value={this.state.name}
            onChange={(event) => this.changeState(event)} placeholder="search by  name" />
            &nbsp; &nbsp;
             
           
            <Button type='button' onClick={(event) => this.search(event)} > Search</Button>
            </Form>
        </Container>
        <br></br>

        <table className='table'>
            <thead>
            <tr>
                <th>id</th>
                <th>First Name</th>
                <th>discription</th>
                <th>Delete</th>
                <th>Edite</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.list.map((ele,i) => (
                        <tr key={i}>
                            <td>{ele.id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.discription}</td>
                            <td><Button type='button' onClick={(event) => this.delete(ele.id)} >
                                Delete</Button> </td>
                                <td>
                                <Switch>
                            <Route path="/Role/:pid"  key="edit-roleList" component={Addrole} />
                        </Switch >
                        <Link to={'/Role/' + ele.id} >  Edit </Link>
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
      </>
    );
  }
}
