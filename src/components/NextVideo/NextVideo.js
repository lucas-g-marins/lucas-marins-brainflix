import "./NextVideo.scss";

function NextVideo({ title, channel, image, updateState, id, vidArr }) {
  function findVideo(element) {
    const result = vidArr.find(({ id }) => id === element);
    return result;
  }

  return (
    <div onClick={() => updateState(findVideo(id))} className="next-video">
      <div className="next-video__image-container">
        <img className="next-video__image" src={image}></img>
      </div>
      <div className="next-video__copy-container">
        <h3 className="next-video__copy">{title}</h3>
        <h4 className="next-video__copy">{channel}</h4>
      </div>
    </div>
  );
}

export default NextVideo;
