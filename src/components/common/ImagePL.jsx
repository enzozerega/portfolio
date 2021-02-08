import React from "react";
import "../../style/ImagePL.scss";

export default function ImagePL() {
  return (
    <div className="img-container">
      <img
        src={require("../../img/portrait-4_3.png")}
        className="img-small"
        alt=""
      />
    </div>
  );
}
