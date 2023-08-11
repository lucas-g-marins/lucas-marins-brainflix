import "./Comments.scss";
import Avatar from "../Avatar/Avatar";

function Comments({ key, name, comment, date }) {
  return (
    <div className="comment">
      <div className="comment__avatar-container">
        <Avatar />
      </div>
      <div className="comment__content-container">
        <div className="comment__name-date-container">
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <div className="comment__content">
          <p className="comment__copy">{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
