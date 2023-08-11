import "./NextVideosSection.scss";
import NextVideo from "../NextVideo/NextVideo";

function NextVideosSection({ mainVideoId, videosArray }) {
  // filter out main video
  function filterCurrentVid(video) {
    if (video.id === mainVideoId.id) {
      return false;
    }
    return true;
  }

  let nextVidArr = videosArray.filter(filterCurrentVid);

  return (
    <>
      <h4 className="next-videos__section-title">NEXT VIDEOS</h4>
      {nextVidArr.map((video) => (
        <NextVideo />
      ))}
    </>
  );
}

export default NextVideosSection;
