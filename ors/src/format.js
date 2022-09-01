import React, { Component } from 'react'
import CamelCase from 'react-camelcase';
//npm i react-camelcase
 class format extends Component {
  constructor(props) {
    super(props)
    this.state = {
      variable:'rays',
    };
  }
  render() {
    return (
      <div> 
      <p>UpperCase :{this.state.variable.toUpperCase()}</p>
      <p>LowerCase : {this.state.variable.toLowerCase()}</p>
      <p><CamelCase string={'rays tech'}/></p>
      </div>
    )
  }
}export default format
