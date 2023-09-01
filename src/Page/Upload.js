import "./Upload.scss";
import Divider from "../components/Divider/Divider";
import VideoThumbnail from "../assets/Images/Upload-video-preview.jpg";
import Button from "../components/Button/Button";
import PublishIcon from "../assets/Icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Upload() {
  let navigate = useNavigate();

  // use state and handles for form
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [description, setDescription] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setpopupClass(
      "upload-video__pop-up-title upload-video__pop-up-title--show"
    );
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  // handle upload pop up
  const [popupClass, setpopupClass] = useState("upload-video__pop-up-title");

  return (
    <>
      <Divider className="divider divider--td-full" />
      <div className="upload-video">
        <h1 className="upload-video__title">Upload Video</h1>
        <Divider className="divider divider--only-tablet" />
        <form className="upload-video__form" onSubmit={handleSubmit}>
          <div className="upload-video__content">
            <div className="upload-video__thumbnail-section">
              <h4 className="upload-video__thumbnail-title">VIDEO THUMBNAIL</h4>
              <img
                className="upload-video__thumbnail"
                src={VideoThumbnail}
                alt="thumbnail"
              />
            </div>
            <div className="upload-video__form-input-container">
              <label className="upload-video__form-label">
                TITLE YOUR VIDEO
                <input
                  onChange={handleTitleChange}
                  value={title}
                  className="upload-video__form-input"
                  type="text"
                  placeholder="Add a title to your video"
                ></input>
              </label>
              <label className="upload-video__form-label upload-video__form-label--desktop">
                ADD A VIDEO DESCRIPTION
                <textarea
                  onChange={handleDescriptionChange}
                  value={description}
                  className="upload-video__form-input--description"
                  type="text"
                  placeholder="Add a description to your video"
                ></textarea>
              </label>
            </div>
          </div>
          <Divider className="divider divider--only-tablet" />
          <h4 className={popupClass}>{title} was succesfully uploaded</h4>
          <Button
            text="PUBLISH"
            img={PublishIcon}
            className="button button--mobile"
            type="submit"
          />
          <div className="upload-video__footer">
            <Link to="/" className="upload-video__cancel">
              CANCEL
            </Link>
            <Button
              text="PUBLISH"
              img={PublishIcon}
              className="button button--tablet"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Upload;
