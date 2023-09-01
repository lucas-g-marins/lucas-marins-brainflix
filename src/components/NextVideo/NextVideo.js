import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo({ title, channel, image, id }) {
  return (
    <Link to={`/video/${id}`} className="next-video__link">
      <div className="next-video">
        <div className="next-video__image-container">
          <img
            className="next-video__image"
            src={image}
            alt={`${title}'s thumbnail`}
          ></img>
        </div>
        <div className="next-video__copy-container">
          <h3 className="next-video__copy">{title}</h3>
          <h4 className="next-video__copy">{channel}</h4>
        </div>
      </div>
    </Link>
  );
}

export default NextVideo;

// onClick={() => updateState(id)}
