import "./NextVideo.scss";

function NextVideo({ title, channel, image, updateState, id, vidArr }) {
  function findVideo(element) {
    const result = vidArr.find(({ id }) => id === element);
    return result;
  }

  return (
    <div onClick={() => updateState(findVideo(id))} className="next-video">
      <div>
        <img className="next-video__image" src={image}></img>
      </div>
      <div>
        <h3>{title}</h3>
        <h4>{channel}</h4>
      </div>
    </div>
  );
}

export default NextVideo;
