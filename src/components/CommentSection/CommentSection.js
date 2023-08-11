import Avatar from "../Avatar/Avatar";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import "./CommentSection.scss";
import Comments from "../Comments/Comments";
import Divider from "../Divider/Divider";

function CommentSection({ videoComments }) {
  return (
    <>
      <h3 className="comment-section__copy">Amount of comments</h3>
      <div className="comment-section__input-comment-container">
        <div className="comment-section__avatar-container">
          <Avatar src={profilePic} className="avatar" />
        </div>
        <form className="comment-section__form">
          <label className="comment-section__label">
            JOIN THE CONVERSATION
            <input
              className="comment-section__input"
              placeholder="Add a new comment"
            ></input>
          </label>
          <Button text="COMMENT" img={CommentIcon} />
        </form>
      </div>
      <Divider />
      {videoComments.map((content) => (
        <Comments
          key={content.id}
          name={content.name}
          comment={content.comment}
          date={content.timestamp}
        />
      ))}
    </>
  );
}

export default CommentSection;