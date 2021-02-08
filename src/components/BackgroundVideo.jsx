import React from "react";
import { Fragment } from "react";
import "../style/BackgroundVideo.scss";

const BackgroundVideo = () => {
  return (
    <Fragment>
      <div className="shadow" />
      <video autoPlay loop muted className="background-video">
        <source
          src={require("../videos/background-video2.mp4")}
          type="video/mp4"
        />
      </video>
    </Fragment>
  );
};

export default BackgroundVideo;
