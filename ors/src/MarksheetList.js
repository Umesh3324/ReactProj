import React from 'react';
import BaseCtl from './BaseCtl';
import Dashboard from './Dashboard';
import axios from 'axios';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Addmarksheet from './Addmarksheet';
import { Button, Container, Form, Table, Row, Col } from 'react-bootstrap';
import FormMessage from './FormMessage';

class MarksheetList extends BaseCtl {
    constructor(props) {
        super(props);
        this.state = {
            inputError: {
                message: "",
                error: '',
              },

            id: '',
            rollNo: '',
            name: '',
            list: []
        };
        this.search();      
    }

    search() {
        axios.post('http://api.sunilos.com:9080/ORSP10/Marksheet/search', this.state).then((res) => {
            this.setState({ list: res.data.result.data });
        });
  
    }

    delete(id) {
        console.log(this.state.message)
        let _self = this;
        let url = "http://api.sunilos.com:9080/ORSP10/Marksheet/delete/ " + id;
        axios.get(url).then((res) => {
            _self.list = res.data.result.data;                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            console.log(res.data.result);
            this.changeInputError("message", "Data Deleted Successfully");
            this.changeInputError("error", "false");
            this.search();
        });
    }

render() {

return (    
<>          
<div className="container mt-3">
    <Container id="main-container" className="d-grid h-50 d-flex justify-content-center">
        <Form id="sign-in-form" className="text-left p-3 w-50">

            <h1 align="center">Marksheet List</h1>
            <div><FormMessage error={this.getInputError("error")} message={this.getInputError("message")} /></div>
            
            <input name="rollNo" placeholder='Search by RollNo' 
            value={this.state.rollNo}
            onChange={(event) => this.changeState(event)} />
            &nbsp; &nbsp;
            <input name="name" placeholder='Search by Name' type="text" 
            value={this.state.name}
            onChange={this.changeState} />
            &nbsp; &nbsp;
            <Button type='button'
                onClick={(event) => this.search(event)}>Search</Button>
        </Form>
    </Container>
    <br></br>

    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>RollNo</th>
                <th>Name</th>
                <th>Physics</th>
                <th>Chemistry</th>
                <th>Maths</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody> 
            {
            this.state.list.map((ele, i) => (
                <tr key={i}>
                    <td>{ele.id}</td>
                    <td>{ele.rollNo}</td>
                    <td>{ele.name}</td>
                    <td>{ele.physics}</td>
                    <td>{ele.chemistry}</td>
                    <td>{ele.maths}</td>
                    <td><Button type='button'
                        onClick={(event) => this.delete(ele.id)}>Delete</Button></td>
                    <td>
                        <Switch>
                            <Route path="/Marksheet/:pid"  key="edit-marksheetList" component={Addmarksheet} />
                        </Switch >
                        <Link to={'/Marksheet/' + ele.id} >  Edit </Link>
                    </td>
                </tr>   
            ))
            }
        </tbody>
    </table>
</div>
<br></br>
<div className='d-flex justify-content-between'>
<Button type='button'onClick={(event) => this.delete()}>Previous</Button>,
<Button type='button'onClick={(event) => this.delete()}>New</Button>,
<Button type='button'onClick={(event) => this.delete()}>Next</Button>   

</div>
<br></br>
<br></br>

</>
);
}
}
export default MarksheetList;