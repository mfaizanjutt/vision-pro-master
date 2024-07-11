import React from "react";
import "./DualSection.css";

const DualSection = () => {
  return (
    <div className="dual-section">
      <div className="content">
        <div className="left-content">
          <h2>A new dimension for entertainment.</h2>
        </div>
        <div className="right-content">
          <p>
            Apple Vision Pro can transform any room into your own personal
            theater. Expand your movies, shows, and games to your perfect size
            and experience them in Spatial Audio. Apple Immersive Video puts you
            in the center of the action with mind-blowing immersion. And with
            more pixels than a 4K TV for each eye, you can enjoy stunning
            content wherever you are — on a long flight or the couch at home.
          </p>
          <button className="learn-more-btn">
            + Learn more about entertainment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DualSection;
