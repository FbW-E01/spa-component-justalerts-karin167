import React from "react";
import ReactDOM, { render } from "react-dom";

const Box = (props) => {
  console.log(props);
  let test;
  if (props.type === "blue") {
    test = "primary";
  } else if (props.type === "red") {
    test = "danger";
  } else if (props.type === "orange") {
    test = "warning";
  }
  if (props.hide === true) {
    return "";
  }

  return (
    <div className={`alert alert-${test}`} role="alert">
      {props.message}
    </div>
    // <div>
    //   <h1 className={props.type}>{props.message}</h1>;
    // </div>
  );
};

// Do not edit below this line
const jsx = (
  <>
    <Box type="blue" message="Blue box" />
    <Box type="red" message="Red box" />
    <Box type="orange" message="Orange box" />
    <Box hide type="red" message="Hidden box" />
  </>
);
const element = document.getElementById("target");

ReactDOM.render(jsx, element);
