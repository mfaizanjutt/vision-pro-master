import React from "react";
import "./VrHeadset.css";
import vrImage from "../../assets/images/vr.jpg";
import visionProLogo from "../../assets/images/vision-pro.png";

const VrHeadset = () => {
  return (
    <div className="vr-main-content main-responsive">
      <div className="vr-logo">
        <img src={visionProLogo} alt="Vision Pro Logo" />
      </div>

      <div className="vr-image">
        <img src={vrImage} alt="VR Headset" />
      </div>

      <div className="vr-button">
        <span className="plus-icon">+</span> Take a closer look
      </div>
    </div>
  );
};

export default VrHeadset;
