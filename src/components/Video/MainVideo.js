import "./MainVideo.scss";
import React, { useState } from "react";

function MainVideo() {
  const [videoThumbnail, setVideoThumbnail] = useState(
    "https://i.imgur.com/l2Xfgpl.jpg"
  );
  return (
    <>
      <div>
        <video className="main-video__video" poster={videoThumbnail}></video>
      </div>
    </>
  );
}

export default MainVideo;
