import React from "react";
import { Fragment } from "react";
import "../style/BackgroundVideo.scss";

const BackgroundVideo = () => {
  return (
    <Fragment>
      <div className="shadow" />
      <video autoPlay loop muted className="background-video">
        <source
          src="https://enzozerega-portfolio-files.s3.eu-north-1.amazonaws.com/background-video.mp4"
          type="video/mp4"
        />
      </video>
    </Fragment>
  );
};

export default BackgroundVideo;
