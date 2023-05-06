import React from "react";
//import "./profile-section-left.css";

//image imports
import defaultProfilePicture from "../../assets/images/default-profile-picture.png";
export default function ProfileSectionLeft() {
  return (
    <div className="user-profile_left-nav-link-container">
      {/* should pull from db if exists */}
      <img src={defaultProfilePicture} alt="user"></img>
      <h1>Temp User Name</h1>
      <ul className="side-links">
        <li>Home</li>
        <li>About Me</li>
        <li>Photos</li>
        <li>Friends</li>
      </ul>
    </div>
  );
}
