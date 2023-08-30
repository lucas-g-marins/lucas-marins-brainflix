import "./Button.scss";
import * as React from "react";

function Button(props) {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        <img className="button__icon" src={props.img} />
        {props.text}
      </button>
    </>
  );
}

export default Button;
