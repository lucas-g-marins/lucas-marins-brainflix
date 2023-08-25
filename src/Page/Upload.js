import "./Upload.scss";
import Divider from "../components/Divider/Divider";
import VideoThumbnail from "../assets/Images/Upload-video-preview.jpg";
import Button from "../components/Button/Button";
import PublishIcon from "../assets/Icons/publish.svg";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <>
      <Divider className="divider" />
      <div className="upload-video">
        <h1 className="upload-video__title">Upload Video</h1>
        <Divider className="divider divider--only-tablet" />
        <div className="upload-video__thumbnail-section">
          <h4 className="upload-video__thumbnail-title">VIDEO THUMBNAIL</h4>
          <img className="upload-video__thumbnail" src={VideoThumbnail} />
        </div>
        <form className="upload-video__form">
          <label className="upload-video__form-label">
            TITLE YOUR VIDEO
            <input
              className="upload-video__form-input"
              type="text"
              placeholder="Add a title to your video"
            ></input>
          </label>
          <label className="upload-video__form-label">
            ADD A VIDEO DESCRIPTION
            <textarea
              className="upload-video__form-input--description"
              type="text"
              placeholder="Add a description to your video"
            ></textarea>
          </label>
          <Divider className="divider divider--only-tablet" />
          <Button text="PUBLISH" img={PublishIcon} />
        </form>
        <Link to="/" className="upload-video__cancel">
          CANCEL
        </Link>
      </div>
    </>
  );
}

export default Upload;
