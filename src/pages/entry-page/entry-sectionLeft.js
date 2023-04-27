import React from "react";
import "./entry-sectionLeft.css";

//imported images
import fpLogo from "../../assets/images/entry-page_left-section-top-dummyLogo.jpg";

export default function SectionLeft() {
  return (
    <div className="entry-page_left-section-container">
      <div className="left-section-top">
        <img alt="Facepage logo" src={fpLogo} />
        <h4>All your friends, for every page of your life.</h4>
      </div>
      <div className="left-section-mid">mid</div>
      <div className="left-section-bot">bot</div>
    </div>
  );
}
