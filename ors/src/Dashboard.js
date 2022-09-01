import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseCtl from './BaseCtl';
import { Route, Link, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
import Users from './Users'
import Contact from './Contact'
import NotFound from './NotFound'
import Login from './Login';
import Footer from './Footer';
import MarksheetList from './MarksheetList';
import Student from './Student';
import Binding from './Binding';
import Addmarksheet from './Addmarksheet'
import GetDate from './GetDate';
import Currency from './Currency';
import format from './format';
import Memo from './Memo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Navbar, Nav } from 'react-bootstrap';


//npm install react-bootstrap bootstrap
class Dashboard extends React.Component {
   
   //function for logout
    logout = () => {
        window.localStorage.clear();
        window.location.href = "/";
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            < Router >
                <div>
                    <h1><img src={require('../src/Logo.jpg')} width="300" height="90" /></h1>
                    <Navbar bg="dark" variant="dark">
                        <Container >
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto" >
                                    {/* <Link to = "/" > Login </Link> | | */}
                                    <Link onClick={this.logout}>Logout</Link>| |
                                    <Link to="/users" > Users </Link> | |
                                    <Link to="/student" > Add student </Link> | |
                                    <Link to="/contact" > Contact </Link>| |
                                    <Link to="/addmarksheet" > AddMarksheet </Link>| |
                                    <Link to="/marksheetlist" > Marksheet List </Link>| |
                                    <Link to="/binding" > Binding </Link>| |
                                    <Link to="/date" > GetDate </Link>| |
                                    <Link to="/currency" > Currency </Link>| |
                                    <Link to="/format" > Format</Link>| |
                                    <Link to="/memo" > Memo</Link>| |
                                  
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/users" component={Users} />
                        <Route path="/Student" component={Student} />
                        <Route path="/contact/:id" component={Contact} />
                        <Route path="/marksheetlist" component={MarksheetList} />
                        <Route path="/binding" component={Binding} />
                        <Route path="/addmarksheet"  key="add-marksheet" component={Addmarksheet} />
                        <Route path="/date" component={GetDate} />
                        <Route exact path="/marksheet/:pid" component={Addmarksheet} />
                        <Route path="/currency" component={Currency} />
                        <Route path="/format" component={format} />
                        <Route path="/memo" component={Memo} />
                        <Route component={NotFound} />
                    </Switch >
                </div>
                <center><Footer /></center>
            </Router >
        );
    }

}

export default Dashboard

