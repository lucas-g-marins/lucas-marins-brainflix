import "./Avatar.scss";

function Avatar(props) {
  return (
    <>
      <img src={props.src} className="avatar" />
    </>
  );
}

export default Avatar;
