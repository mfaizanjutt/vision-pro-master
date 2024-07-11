import React, { useEffect, useRef, useState } from "react";
import "./EntertainmentParallax.css";
import appleVision from "../../assets/videos/bg_video.mp4";
import PlaySvg from "../../assets/svg/PlaySvg";
import PauseSvg from "../../assets/svg/PauseSvg";

const EntertainmentParallax = () => {
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

  const reOrder = () => {
    const mq = window.matchMedia("(min-width: 392px)");
    const rightChild = document.querySelector(".entertainment-right-child");

    if (mq.matches) {
      rightChild.classList.add("entertainment-custom");
      const scroll = window.scrollY;
      const topContent =
        document.querySelector(".entertainment-one").offsetTop - 25;
      const sectionHeight = document.querySelector(
        ".entertainment-videoContent"
      ).offsetHeight;
      const rightHeight = rightChild.offsetHeight;
      const bottomContent = topContent + sectionHeight - rightHeight - 45;

      if (scroll > topContent && scroll < bottomContent) {
        rightChild.classList.remove("entertainment-posAbs");
        rightChild.classList.add("entertainment-posFix");
      } else if (scroll > bottomContent) {
        rightChild.classList.remove("entertainment-posFix");
        rightChild.classList.add("entertainment-posAbs");
      } else if (scroll < topContent) {
        rightChild.classList.remove("entertainment-posFix");
      }
    } else {
      rightChild.classList.remove(
        "entertainment-custom",
        "entertainment-posAbs",
        "entertainment-posFix"
      );
 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reOrder);
    window.addEventListener("resize", reOrder);

    reOrder(); // Initial call to set the right state

    return () => {
      window.removeEventListener("scroll", reOrder);
      window.removeEventListener("resize", reOrder);
    };
  }, []);

  return (
    <div className="entertainment-container">
      <div className="entertainment-videoSection entertainment-one clearfix">
        <video ref={videoRef} autoPlay loop muted>
          <source src={appleVision} type="video/mp4" />
        </video>

        <div className="entertainment-controls" onClick={handlePlayPause}>
          {isPlaying ? <PauseSvg fill="white" /> : <PlaySvg fill="white" />}
        </div>

        <div className="entertainment-videoContent">
          <div className="entertainment-right-child">
            <h2>Entertainment</h2>
            <h1>
              The ultimate theater. <br />
              Wherever you are.
            </h1>
          </div>
        </div>
      </div>
      <div className="entertainment-bottom"></div>
    </div>
  );
};

export default EntertainmentParallax;
