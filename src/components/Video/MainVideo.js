import "./MainVideo.scss";
import React, { useState } from "react";
import Divider from "../Divider/Divider";
import ViewsIcon from "../../assets/Icons/views.svg";
import LikesIcon from "../../assets/Icons/likes.svg";

function MainVideo() {
  // create use state for dynamic objects
  const [videoThumbnail, setVideoThumbnail] = useState(
    "https://i.imgur.com/l2Xfgpl.jpg"
  );
  const [videoTitle, setVideoTitle] = useState("BMX Rampage: 2021 Highlights");
  return (
    <div className="main-video">
      <div className="main-video__video-container">
        <video
          className="main-video__video"
          poster={videoThumbnail}
          controls
        ></video>
      </div>
      <div className="main-video__title-container">
        <h1 className="main-video__title">{videoTitle}</h1>
      </div>
      <Divider />
      <div className="main-video__stats">
        <div className="main-video__channel-date">
          <h3 className="main-video__channel">By Red Crow</h3>
          <h4 className="main-video__stats-copy">07/11/2021</h4>
        </div>
        <div className="main-video__views-likes">
          <div className="main-video__views-container">
            <img src={ViewsIcon}></img>
            <h4 className="main-video__stats-copy">100</h4>
          </div>
          <div className="main-video__likes-container">
            <img src={LikesIcon}></img>
            <h4 className="main-video__stats-copy">25</h4>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default MainVideo;
