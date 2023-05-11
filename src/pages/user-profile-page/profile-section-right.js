import React from "react";

//components
import Post from "../../components/user-post/post";
import Banner from "../../components/user-banner/banner";
import AboutMeBlock from "../../components/user-about-me/about-me";

export default function ProfileSectionRight() {
  return (
    <div className="user-profile_main-container">
      <Banner />
      <div className="user-content-container">
        <Post />
        <div className="user-infor-bar-container">
          <AboutMeBlock />
        </div>
      </div>
    </div>
  );
}
