import React, { Component } from 'react'
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
// import FormMessage from './FormMessage';
import FormError from './FormError';
import BaseCtl from './BaseCtl';
// import Dashboard from './Dashboard';
// import Login from './Login';
// import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';
import axios from 'axios';


export default class ragistration extends BaseCtl {
    constructor(props) {
      super(props);
        this.state={
          inputError:{
            password:"",
            loginId:"",
            message:"",
            error:"",

          },
          form:{
            password:"",
            loginId:"",
          }

        }
        if(this.props.match.params.pid) {
          this.get();
        }
    }
    get() {
      let id = this.props.match.params.pid;
      console.log(id);
      var url = "http://api.sunilos.com:9080/ORSP10/Auth/get" + id;
      let _self = this;
    axios.get(url).then((res) => {
      this.setState({ form: res.data.result.data});
    }) 
    }
    
    save() {
      let url = "http://api.sunilos.com:9080/ORSP10/Auth/login";
      axios.post(url,this.state.form).then((res) => {
          this.setState({ list: res.data.result.data});
          if(res.data.result.inputerror) {
              this.setState({inputError: res.data.result.inputerror});
              this.changeInputError("error", "true");
          }
          else{
              this.changeInputError("error", "false")
              this.changeInputError("message", "Data Saved Successfully")
              this.changeInputError("password", "")
              this.changeInputError("loginId", "")
          }
      });
  }
  resetForm = () => {
    this.setState({
        form:{
            loginId: "",
            password: "",
        }
    })
} 

    
  render() {
    return (
     <>
       {/* <Router>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/login" key="login" component={Login}  />
      </Switch>
      </Router> */}

     <div className='center'>
        <Form id="sign-in-form" className="text -left p-3 w-50" >
          <table align="center">
            <h2>Ragistration Form </h2>
           {/* {(() => {
            if (!this.state.match.param.pid) {
              return(
                <h2 align='center'> Ragistration Form </h2>
              )
            }
            else (this.state.match.param.pid) {
              return (
                <h2 align='center'>  Ragistration successfully </h2>
              )
            }
           }

           )} */}
           
            {/* <label>First Name:</label>
            <p>
              <input
                type="text"
                name="firstName"
                value={this.state.form.firstName}
                onChange={this.changeFormState} required />
            </p> */}

            {/* <div><FormError errorname={this.getInputError("firstName")} /></div>

            <label> last Name:</label>
            <p>
              <input
                type="text"
                name="lastName"
                value={this.state.form.lastName}
                onChange={this.changeFormState} required ></input>
            </p> */}

            {/* <div>
              <div><FormError errorname={this.getInputError("lastName")} /></div>
            </div>
            <label> Email :</label>
            <p>
              <input
                type="email"
                name="email"
                value={this.state.form.email}
                onChange={this.changeFormState} required ></input>
            </p> */}

            <div>
              <div><FormError errorname={this.getInputError("email")} /></div>
            </div>

            <label> Password :</label>
            <p>
              <input
                type="password"
                name="password"
                value={this.state.form.password}
                onChange={this.changeFormState} required ></input>
            </p>
            <div>
              <div><FormError errorname={this.getInputError("password")} /></div>
            </div>
           
            {/* <label>Role id:</label>
            <p>
              <input
                type="text"
                name="roleId"
                value={this.state.form.roleId}
                onChange={this.changeFormState} required></input>
            </p>

            <div><FormError errorname={this.getInputError("roleId")} /></div> */}

            <label>Login Id:</label>
            <p>
              <input
                type="email"
                name="loginId"
                value={this.state.form.loginId}
                onChange={this.changeFormState} required></input>
            </p>
            <div><FormError errorname={this.getInputError("loginId")} /></div>
            
            <br></br>
            
            <Button  type='button'
              onClick={(event) => this.save(event)}>Save</Button> &nbsp; &nbsp;
              <Button type='reset' variant="danger"
            onClick={(event) => this.resetForm(event)}>Reset</Button>
                                
          </table>
        </Form>

      </div>
     </>

    )
  }
}
