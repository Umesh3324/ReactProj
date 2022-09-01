import React, { Component } from 'react'


class GetDate extends Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date = today.getFullYear()
        + '-' + (today.getMonth() + 1)
        + '-' + today.getDate();

    this.state = {
      curDT: new Date().toLocaleString(),
      currentDate: date,
      code:''
    };
  }


  render() {

    return (
      <div>
        <br></br>
        <p>Current Date And Time : {this.state.curDT}</p>
        <p> yyyy-MM-dd :{this.state.currentDate}</p>
      </div>
    )
  }
} export default GetDate
