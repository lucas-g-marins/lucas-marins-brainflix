import Avatar from "../Avatar/Avatar";
import profilePic from "../../assets/Images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import CommentIcon from "../../assets/Icons/add_comment.svg";
import "./CommentSection.scss";
import Comments from "../Comments/Comments";
import Divider from "../Divider/Divider";
import React, { useEffect, useState } from "react";

function CommentSection({ videoComments }) {
  const [commentAmount, setCommentAmount] = useState(0);
  const [comments, setComments] = useState([]);

  // count amount of comments
  useEffect(() => {
    if (videoComments) {
      setCommentAmount(videoComments.length);
    }
  }, [comments]);

  useEffect(() => {
    if (videoComments) {
      setComments(videoComments);
    }
  }, [videoComments]);

  console.log(videoComments);

  return (
    <>
      <h3 className="comment-section__copy">{commentAmount} comments</h3>
      <div className="comment-section__input-comment-container">
        <div className="comment-section__avatar-container">
          <Avatar src={profilePic} className="avatar" />
        </div>
        <form className="comment-section__form">
          <label className="comment-section__label">
            JOIN THE CONVERSATION
            <textarea
              className="comment-section__input"
              placeholder="Add a new comment"
              typeof="text"
              name="comment"
            ></textarea>
          </label>
          <div className="comment-section__button-container">
            <Button text="COMMENT" img={CommentIcon} />
          </div>
        </form>
      </div>
      <Divider className="divider" />
      {comments.map((content) => (
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
