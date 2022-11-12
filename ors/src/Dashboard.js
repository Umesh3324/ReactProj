import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseCtl from './BaseCtl';
import { Route, Link, BrowserRouter as Router, Switch, useHistory } from 'react-router-dom'
// import Users from './Users'
import Contact from './Contact'
import NotFound from './NotFound' 
import Login from './Login';
import Footer from './Footer';
import MarksheetList from './MarksheetList';
import RoleList from './RoleList';
import UserList from './UserList';
import CollegeList from './CollegeList'
import StudentList from './StudentList'
import Adduser from './Adduser';
// import Student from './Student';
import Binding from './Binding';
import Addmarksheet from './Addmarksheet'
import Addrole from './Addrole'
import Addcollege from './Addcollege'
import Addstudent from './Addstudent'
import GetDate from './GetDate';
import Currency from './Currency';
import format from './format';
import Memo from './Memo';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FcPortraitMode } from "react-icons/fc";
import { IoMdExit ,IoIosPeople, IoIosPerson} from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";



import { Button, Container, Form, Navbar, Nav,NavDropdown, } from 'react-bootstrap';


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
    <div className='containerFluid'>
        <Navbar bg="dark" variant="dark"  expand="sm">
           <img src={require('../src/Logo.jpg')} width="100" height="50" className='d-inline-block align-left ' />
           <Container>
            

            
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-cotent-end" activeKey="/home">
                       
                         {/* <Nav.Link to="/binding" > Binding </Nav.Link> */}
                          {/* <Nav.Link><Link to="/date" > GetDate </Link></Nav.Link> */}
                          {/* <Nav.Link><Link to="/currency" > Currency </Link></Nav.Link> */}
                          {/* <Nav.Link><Link to="/format" > Format</Link></Nav.Link> */}
                          {/* <Nav.Link><Link to="/memo" > Memo</Link></Nav.Link> */}


                          <NavDropdown  title="User" id="basic-nav-dropdown">
                          <NavDropdown.Item> <Link to="/Adduser" > Add User </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item> <Link to="/UserList" > UserList<IoIosPeople/> </Link></NavDropdown.Item>
                          </NavDropdown> 

                          <NavDropdown title="Marksheet"id="basic-nav-dropdown">
                          <NavDropdown.Item> <Link to="/AddMarksheet" > Add Marksheet </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item> <Link to="/MarksheetList" > Marksheet List </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item> <Link to="/MarksheetMeritList" > Marksheet MeritList </Link></NavDropdown.Item>
                          </NavDropdown>

                          <NavDropdown title="Student"id="basic-nav-dropdown">
                          <NavDropdown.Item> <Link to="/AddStudent" > Add Student </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item> <Link to="/StudentList" > Student List </Link></NavDropdown.Item>
                          </NavDropdown>

                          <NavDropdown title="Role"id="basic-nav-dropdown">
                          <NavDropdown.Item> <Link to="/Addrole" > Add Role </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item> <Link to="/RoleList" > RoleList </Link></NavDropdown.Item>  
                          </NavDropdown>

                          <NavDropdown title="College"id="basic-nav-dropdown">
                          <NavDropdown.Item> <Link to="/Addcollege" > Add College </Link></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item> <Link to="/CollegeList" >College List </Link></NavDropdown.Item>
                          </NavDropdown>

                        {localStorage.getItem('Name')&&
                        <Nav.Link>{localStorage.getItem('Name')} <FcPortraitMode style={{ color: 'aqua',fontSize: '20px'}}/></Nav.Link>}
                        <Nav.Link  className="d-flex justify-cotent-end" onClick={this.logout}>Logout<IoMdExit style={{ color: 'aqua',fontSize: '18px'}}/></Nav.Link>
                        
                        </Nav>
                      </Navbar.Collapse>
                      </Container>
          
      </Navbar>

      <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route path="/users" component={Users} /> */}
          {/* <Route path="/Student" component={Student} /> */}
          <Route path="/contact/:id" component={Contact} />
          <Route path="/marksheetlist" component={MarksheetList} />
          <Route path="/rolelist" component={RoleList} />
          <Route path="/userlist" component={UserList} />
          <Route path="/collegelist" component={CollegeList}  />
          <Route path="/studentlist" component={StudentList} />
          <Route path="/binding" component={Binding} />
          <Route path="/addmarksheet"  key="add-marksheet" component={Addmarksheet} />
          <Route path="/addrole"  key="add-role" component={Addrole} />
          <Route path="/adduser" key="add-user" component={Adduser} />
          <Route path="/addcollege"  key="edit-college" component={Addcollege} />
          <Route path="/addstudent" key="add-student" component={Addstudent} />
          <Route path="/date" component={GetDate} />
          <Route exact path="/marksheet/:pid" component={Addmarksheet} />
          <Route exact path="/role/:pid" component={Addrole} />
          <Route exact path="/user/:pid" component={Adduser} />
          <Route exact path="/college/:pid" component={Addcollege} />
          <Route exact path="/student/:pid" component={Addstudent} />
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



