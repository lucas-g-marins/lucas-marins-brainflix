import "./Comments.scss";
import Avatar from "../Avatar/Avatar";
import Divider from "../Divider/Divider";

// function for setting readable date from timestamp
function setDate(date) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

function Comments({ name, comment, date }) {
  return (
    <>
      <div className="comment">
        <div className="comment__avatar-container">
          <Avatar className="avatar" />
        </div>
        <div className="comment__content-container">
          <div className="comment__name-date-container">
            <p className="comment__name">{name}</p>
            <p className="comment__date">{setDate(date)}</p>
          </div>
          <div className="comment__content">
            <p className="comment__copy">{comment}</p>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Comments;
