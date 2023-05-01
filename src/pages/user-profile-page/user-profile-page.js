import React from "react";
import "./user-profile-page.css";

//image imports
import searchIcon from "../../assets/images/user-profile_search-bar-icon.png";

export default function UserProfilePage() {
  //handles upper search-bar inputs
  const searchHandler = () => {
    console.log("searched");
  };

  return (
    <React.Fragment>
      <div className="user-profile_upper-nav-link-container">
        <div className="search-bar-container">
          <img alt="fp-logo"></img>
          <div className="search-bar">
            <input></input>
            <img
              alt="search-icon"
              src={searchIcon}
              onClick={searchHandler}
            ></img>
          </div>
        </div>
        <div className="linked-icons-container">
          <span className="icon">Home</span>
          <span className="icon">Friends</span>
          <span className="icon">Messages</span>
          <span className="icon">Notifications</span>
        </div>
      </div>
      <div className="user-profile_page-container">
        <div className="user-profile_nav-link-container">HI</div>
        <div className="user-profile_main-container">
          <h1>Hi</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
