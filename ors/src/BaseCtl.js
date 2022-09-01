import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

class BaseCtl extends React.Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
    }
        /**Change State of THe Object */
    changeState = (e) => {
        var data={};
        data[e.target.name]=e.target.value;
        this.setState(data);
    }
      /**Change Form State of THe Object */
    changeFormState = (e) => {
        var data=this.state["form"];
        data[e.target.name]=e.target.value;
        this.setState(data);
        this.setState({});
    }
    /**Change InputError of THe Object */
    changeInputError=( name,value)=>{
        var data=this.state["inputError"];
        data[name]=value;
        this.setState(data);
    }
    getInputError=( name)=>{
        var data=this.state["inputError"];
        return data[name];
        
    }
   
 
}

export default BaseCtl

