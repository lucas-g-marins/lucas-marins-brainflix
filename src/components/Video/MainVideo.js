import "./MainVideo.scss";
import React, { useEffect, useState } from "react";
import Divider from "../Divider/Divider";
import ViewsIcon from "../../assets/Icons/views.svg";
import LikesIcon from "../../assets/Icons/likes.svg";
import CommentSection from "../CommentSection/CommentSection";
import NextVideosSection from "../NextVideosSection/NextVideosSection";
import axios from "axios";
import { useParams } from "react-router-dom";

// function for setting readable date from timestamp
function formatDate(date) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

const apiKey = "0be02211-b14f-4e81-8abb-f62196a2bbbf";

function MainVideo() {
  const { videoId } = useParams();

  //
  const [allVideos, setAllVideos] = useState([]);

  // retrieve videos from local server
  const baseURL = process.env.REACT_APP_VIDEO_DATA;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${baseURL}/videos`);
      setAllVideos(data);
    };
    fetchData();
  }, []);

  // retrieve video and details
  useEffect(() => {
    if (videoId) {
      axios
        .get(`${baseURL}/videos/${videoId}`)
        .then((result) => setVideoContent(result.data));
    } else {
      if (allVideos[0]) {
        axios
          .get(`${baseURL}/videos/${allVideos[0].id}`)
          .then((result) => setVideoContent(result.data));
      }
    }
  }, [videoId, allVideos]);

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
                {formatDate(videoContent.timestamp)}
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
            mainVideoId={videoContent.id}
            videosArray={allVideos}
          />
        </div>
      </div>
    </div>
  );
}

export default MainVideo;
