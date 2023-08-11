import "./MainVideo.scss";
import React, { useState } from "react";
import Divider from "../Divider/Divider";
import ViewsIcon from "../../assets/Icons/views.svg";
import LikesIcon from "../../assets/Icons/likes.svg";
import CommentSection from "../CommentSection/CommentSection";
import Videos from "../../data/videos.json";
import VideoDetails from "../../data/video-details.json";
import NextVideosSection from "../NextVideosSection/NextVideosSection";

const videoStats = VideoDetails;

const videoTitles = Videos;

// function for setting readable date from timestamp
function setDate(date) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

function MainVideo() {
  // function for finding specific video
  function findVideo(element) {
    const result = videoStats.find(({ id }) => id === element);
    return result;
  }

  // use state for video
  const [videoId, setVideoId] = useState(
    findVideo("84e96018-4022-434e-80bf-000ce4cd12b8")
  );

  return (
    <div className="main-video">
      <div className="main-video__video-container">
        <video
          className="main-video__video"
          poster={videoId.image}
          controls
        ></video>
      </div>
      <div className="main-video__title-container">
        <h1 className="main-video__title">{videoId.title}</h1>
      </div>
      <Divider className="divider divider--only-mobile" />
      {/* Video Stats */}
      <div className="main-video__stats">
        <div className="main-video__channel-date">
          <h3 className="main-video__channel">By {videoId.channel}</h3>
          <h4 className="main-video__stats-copy">
            {setDate(videoId.timestamp)}
          </h4>
        </div>
        <div className="main-video__views-likes">
          <div className="main-video__views-container">
            <img src={ViewsIcon}></img>
            <h4 className="main-video__stats-copy">{videoId.views}</h4>
          </div>
          <div className="main-video__likes-container">
            <img src={LikesIcon}></img>
            <h4 className="main-video__stats-copy">{videoId.likes}</h4>
          </div>
        </div>
      </div>
      <Divider className="divider" />
      {/* Description */}
      <div className="main-video__description-container">
        <p className="main-video__description">{videoId.description}</p>
      </div>
      <CommentSection videoComments={videoId.comments} />
      <NextVideosSection
        mainVideoId={videoId}
        videosArray={videoStats}
        updateState={setVideoId}
      />
    </div>
  );
}

export default MainVideo;
