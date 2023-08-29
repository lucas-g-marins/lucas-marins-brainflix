import "./MainVideo.scss";
import React, { useEffect, useState } from "react";
import Divider from "../Divider/Divider";
import ViewsIcon from "../../assets/Icons/views.svg";
import LikesIcon from "../../assets/Icons/likes.svg";
import CommentSection from "../CommentSection/CommentSection";
import NextVideosSection from "../NextVideosSection/NextVideosSection";
import axios from "axios";

// function for setting readable date from timestamp
function setDate(date) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

const apiKey = "0be02211-b14f-4e81-8abb-f62196a2bbbf";

function MainVideo() {
  //
  const [allVideos, setAllVideos] = useState([]);

  // retrieve videos array from axios
  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then((result) => setAllVideos(result.data));
  }, []);

  // use state for video
  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  // retrieve video and details
  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
      )
      .then((result) => setVideoContent(result.data));
  }, [videoId]);

  // state for video content
  const [videoContent, setVideoContent] = useState({});

  return (
    <div className="main-video">
      <div className="main-video__video-container">
        <video
          className="main-video__video"
          poster={videoContent.image}
          controls
        ></video>
      </div>
      <div className="brainflix-content">
        <div className="brainflix-content__main-video">
          <div className="main-video__title-container">
            <h1 className="main-video__title">{videoContent.title}</h1>
          </div>
          <Divider className="divider divider--only-mobile" />
          {/* Video Stats */}
          <div className="main-video__stats">
            <div className="main-video__channel-date">
              <h3 className="main-video__channel">By {videoContent.channel}</h3>
              <h4 className="main-video__stats-copy">
                {setDate(videoContent.timestamp)}
              </h4>
            </div>
            <div className="main-video__views-likes">
              <div className="main-video__views-container">
                <img src={ViewsIcon}></img>
                <h4 className="main-video__stats-copy">{videoContent.views}</h4>
              </div>
              <div className="main-video__likes-container">
                <img src={LikesIcon}></img>
                <h4 className="main-video__stats-copy">{videoContent.likes}</h4>
              </div>
            </div>
          </div>
          <Divider className="divider" />
          {/* Description */}
          <div className="main-video__description-container">
            <p className="main-video__description">
              {videoContent.description}
            </p>
          </div>
          <CommentSection videoComments={videoContent.comments} />
        </div>
        <div className="brainflix-content__next-video">
          <NextVideosSection
            mainVideoId={videoId}
            videosArray={allVideos}
            updateState={setVideoId}
          />
        </div>
      </div>
    </div>
  );
}

export default MainVideo;
