import axios from 'axios'
import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link, Route,BrowserRouter as Router, Switch } from 'react-router-dom'
import Addstudent from './Addstudent'       
import BaseCtl from './BaseCtl'
import FormMessage from './FormMessage';
// import ReactDOM from 'react-dom'


export default class StudentList extends BaseCtl {
    constructor(props) {
        super(props);
        this.state={
            inputError:{
                error:"",
                message:"",
            },
            id:"",
            firstName:"",
            collegeId:"",
            list:[],

        };
        this.search();
    }
    search() {
        axios.post("http://api.sunilos.com:9080/ORSP10/Student/search", this.state).then((res) => {
            this.setState({list: res.data.result.data});
        });
    }

    delete(id) {
        console.log(this.state.message);
        let _self =this;
        let url = "http://api.sunilos.com:9080/ORSP10/Student/delete/" + id;
        axios.get(url).then((res) => {
            _self.list = res.data.result.data;
            console.log(res.data.result);
            this.changeInputError("message","Data Saved Successfully");
            this.changeInputError("error","false");
            this.search();
        });
    }
    // new() {
    //         ReactDOM.render(
    //             <React.StrictMode>
    //                 <Addstudent />
    //             </React.StrictMode>,
    //             document.getElementById('root')
    //         );
    //     }
   
  
  render() {
    return (
      <>
      <div className='container mt-3'>
        <Container id="main-container" className='d-grid h-50 d-flex justify-content-center'>
            <Form id="sign-in-form" className='text-left p-3 w-50'>

            <h1 align="center"> Student List </h1>
            <div><FormMessage  error={this.getInputError("error")} message={this.getInputError("message")} /> </div>
            
            <input type="text" name="firstName" value={this.state.firstName}
            onChange={(event) => this.changeState(event)} placeholder="search by first name" />
           
            &nbsp; &nbsp;   
            <input type="number" name="collegeId" value={this.state.collegeId}
            onChange={(event) => this.changeState(event)} placeholder="search by college id" />
            &nbsp; &nbsp;
            <Button type='button' onClick={(event) => this.search(event)} > Search</Button>
            </Form>
        </Container>
        <br></br>

        <table className='table'>
            <thead>
            <tr>
                <th>Index</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>College Id</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Delete</th>
                <th>Edite</th>
            </tr>
            </thead>
            <tbody>
                {
                    this.state.list.map((ele,i) => (
                
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.collegeId}</td>
                            <td>{ele.mobileNo}</td>
                            <td>{ele.email}</td>
                      
                            <td><Button type='button' onClick={(event) => this.delete(ele.id)} >
                                Delete</Button> </td>
                                <td>
                                <Switch>
                            <Route path="/Student/:pid"  key="edit-studentList" component={Addstudent} />
                        </Switch >
                        <Link to={'/Student/' + ele.id} >  Edit </Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
      <br />
      <div className='d-flex justify-content-between'>
<Button type='button'onClick={(event) => this.previous(event)}>Previous</Button>,
<Button type='button'onClick={(event) => this.new(event)}>New</Button>,
<Button type='button'onClick={(event) => this.next(event)}>Next</Button>
</div>
<br></br>
<br></br>


      </>
    );
  }
}
