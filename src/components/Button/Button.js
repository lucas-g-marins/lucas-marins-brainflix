import "./Button.scss";
import * as React from "react";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <>
      <button className="button" onClick={props.onClick}>
        <img className="button__icon" src={props.img} />
        {props.text}
      </button>
    </>
  );
}

export default Button;
