import React, { useState, useRef } from "react";
import rightHeadsetImage from "../../assets/images/Right_headset.jpg";
import leftHeadsetImage from "../../assets/images/Left_headset.jpg";
import headsetVideo from "../../assets/videos/headset_video.mp4";
import "./HeadSet.css";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const HeadSet = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="headset-main main-responsive">
      <div className="headset-upper">
        <div className="headset-left">
          <img src={leftHeadsetImage} alt="Left Headset" />
        </div>

        <div className="headset-right">
          <img src={rightHeadsetImage} alt="Right Headset" />
        </div>
      </div>

      <div className="headset-lower">
        <video ref={videoRef} autoPlay muted loop id="headsetVideo">
          <source src={headsetVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="headset-play-pause-button" onClick={handlePlayPause}>
          {isPlaying ? (
            <PauseSvg fill="#bcbcc4" />
          ) : (
            <PlaySvg fill="#bcbcc4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadSet;
