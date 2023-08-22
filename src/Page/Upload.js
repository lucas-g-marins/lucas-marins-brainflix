import "./Upload.scss";
import Divider from "../components/Divider/Divider";
import VideoThumbnail from "../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <>
      <Divider className="divider" />
      <div className="upload-video">
        <h1 className="upload-video__title">Upload Video</h1>
        <div className="upload-video__thumbnail-section">
          <h4 className="upload-video__thumbnail-title">VIDEO THUMBNAIL</h4>
          <img className="upload-video__thumbnail" src={VideoThumbnail} />
        </div>
      </div>
    </>
  );
}

export default Upload;
