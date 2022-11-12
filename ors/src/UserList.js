import React  from 'react'
import { Button, Container,Form } from 'react-bootstrap'
import { Route, Switch,Link ,BrowserRouter as Router} from 'react-router-dom'
import FormMessage from './FormMessage'
import Adduser from './Adduser'
import axios from 'axios'
import BaseCtl from './BaseCtl'

export default class UserList extends BaseCtl {
  constructor(props) {
    super(props);
    this.state={
      inputError:{
        message:"",
        error:"",
      },
      id:"",
      loginId:"",
      roleId:"",
      list: []
    };
    this.search();
  }

  search() {
    axios.post('http://api.sunilos.com:9080/ORSP10/Auth/search', this.state ).then((res) =>{
      this.setState({list: res.data.result.data});
    });
  }

  delete(id) {
    console.log(this.state.message)
    let _self = this;
    let url = "http://api.sunilos.com:9080/ORSP10/Auth/delete/" + id;
    axios.get(url).then((res) => {
      _self.list = res.data.result.data;
      console.log(res.data.result);
      this.getInputError("message", "Data Deleted Successfully");
      this.getInputError("error", "false");
      this.search();
    });
  }
  render() {
    return (
        <>
      <div  className="container mt-3" >
        <Container id='main-container'  className="d-grid h-50">
        <Form id="sign-in-form" className="text-left p-3 w-50">

            <h1 align="center"> User List </h1>
            <div> <FormMessage  error={this.getInputError("error")} message={this.getInputError("message")} /> </div>

            <input type="text" name="loginId" value={this.state.loginId}
        onChange={(event) => this.changeState(event)} placeholder="search by loginId"/>
        &nbsp;  &nbsp;

            <input type="text" name="roleId" value={this.state.roleId}
        onChange={(event) => this.changeState(event)} placeholder="search by roleId"/>
        &nbsp;  &nbsp;
        <Button type='button' onClick={(event) => this.search(event)} >Search </Button>
        </Form>
        </Container>
        <br></br>

        <table className='table' >
            <thead>
                <tr>
                   <th>Id</th> 
                   <th>First Name</th> 
                   <th>Last Name</th> 
                   <th>Login Id</th> 
                   <th>Role Id</th> 
                   <th>Delete</th> 
                   <th>Edit</th> 
                </tr>
            </thead>
            <tbody>
                {this.state.list.map((ele,i) => (
                    <tr key={i}>
                        <td>{ele.id}</td>
                        <td>{ele.firstName}</td>
                        <td>{ele.lastName}</td>
                        <td>{ele.loginId}</td>
                        <td>{ele.roleId}</td>
                        <td> <Button type='button' onClick={(event) => this.delete(ele.id)} >Delete</Button> </td>
                        <td>
                          <Switch>
                            <Route path="/User/:pid" key="edit-user" component={Adduser} />
                          </Switch>
                          <Link to={ '/User/' + ele.id } >Edit</Link>

                        </td>
                    </tr>
                ))
                
  }
            </tbody>

        </table>

      </div>
      </>
    );
  }
}
