import React from "react";
import { Fragment } from "react";
import Video from "../videos/background-video2.mp4";
import "../style/BackgroundVideo.scss";

const BackgroundVideo = () => {
  return (
    <Fragment>
      <div className="shadow" />
      <video autoPlay loop muted className="background-video">
        <source src={Video} type="video/mp4" />
      </video>
    </Fragment>
  );
};

export default BackgroundVideo;
