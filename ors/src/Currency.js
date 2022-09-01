import React from "react";
import NumberFormat from "react-number-format";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';

//https://www.npmjs.com/package/react-number-format
//npm i react-number-format

const NumberFormatExample = (props) => {
  return (
    <>
    <div>
      <center>
      <div>Format Number Input</div>
      <NumberFormat
        thousandsGroupStyle="thousand"
        value={2456981}
        prefix="Rs."
        decimalSeparator="."
        displayType="input"
        type="text"
        thousandSeparator={true}
        allowNegative={true} />
        </center>
 </div>
    </>
  );
};
export default NumberFormatExample;
