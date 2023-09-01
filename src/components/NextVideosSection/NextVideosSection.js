import "./NextVideosSection.scss";
import NextVideo from "../NextVideo/NextVideo";

function NextVideosSection({ mainVideoId, videosArray, updateState }) {
  // filter out current video from next video
  let nextVidArr = videosArray.filter((video) => video.id !== mainVideoId);

  return (
    <>
      <h4 className="next-videos__section-title">NEXT VIDEOS</h4>
      {nextVidArr.map((video) => (
        <NextVideo
          key={video.id}
          id={video.id}
          title={video.title}
          channel={video.channel}
          image={video.image}
          updateState={updateState}
          vidArr={nextVidArr}
        />
      ))}
    </>
  );
}

export default NextVideosSection;
