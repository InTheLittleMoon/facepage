import React from "react";
import "./banner.css";

//image imports
import MissingImage from "../../assets/images/no-image-found-master.jpg";

export default function Banner() {
  //aspect ratio: 851x315 for landscape
  return (
    <div className="user-banner-container">
      {/* must change from no image if user has none */}
      <img alt="banner" src={MissingImage} />
    </div>
  );
}
