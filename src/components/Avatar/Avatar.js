import "./Avatar.scss";

function Avatar(props) {
  return (
    <>
      <img src={props.src} className={props.className} />
    </>
  );
}

export default Avatar;
