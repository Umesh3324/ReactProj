import React, { Component } from 'react'
import marksheet from './Addmarksheet';
// import College from './Addcollege';

//input validation util class
class FormError extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.message);
    console.log(this.props.error);
  }

  render() {

    return (
      <>
        {(() => {
          if (this.props.errorname) {
            return (
              <>
                <h3 style={{ fontSize: '15px', color: "#E9573F" }}>{this.props.errorname}</h3>
              </>
            )
          }
        })()}
      </>
    )
  }
}
export default FormError
