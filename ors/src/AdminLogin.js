import React, { Component } from 'react'
// import React from 'react'
// import BaseCtl from './BaseCtl'
// import Dashboard from './Dashboard';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Tab , Navbar,Nav} from 'react-bootstrap';
import FormMessage from './FormMessage';
import Ragistration from './Ragistration';
import Login from './Login';
import user from './Adduser';
import { Route,BrowserRouter as Router, Switch,Link } from 'react-router-dom';

import {GiCarKey} from "react-icons/gi";
import {TiEdit} from "react-icons/ti";




    

export default class AdminLogin extends Component {
  render() {
    const myStyle={
      backgroundImage:"url('../src/content/home.jgp')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

 
    return (
      <body style={myStyle}>
       <Router>
            <Navbar bg="dark" variant="dark" >
            <img src={require('../src/Logo.jpg')} width="100" height="50" className='d-inline-block align-left ' />
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="ragistration">Ragistration<TiEdit style={{color: 'aqua', fontSize: '20px'}}/></Nav.Link>
            <Nav.Link href="login">Login<GiCarKey style={{color: 'aqua', fontSize: '20px'}}/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
      <Route path="/ragistration" key="Ragistration" component={user}  />
      <Route path="/login" key="Login" component={Login}  />
      </Switch>
      </Router>
         
      </body>
    )
  }
}
