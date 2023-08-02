import "./Button.scss";

function Button(props) {
  return (
    <>
      <button className="button">
        <img className="button__icon" src={props.img} /> {props.text}
      </button>
    </>
  );
}

export default Button;
