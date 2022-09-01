import React from 'react';

class Contact extends React.Component {

  render() {

    var p  = this.props.match;

    const { params } = this.props.match;

    console.log(this.props);

    console.log("Params", params);

    return (
      <div>
        <h1> Contact {params.id}</h1> 
      </div>
    );
  }
}
export default Contact

