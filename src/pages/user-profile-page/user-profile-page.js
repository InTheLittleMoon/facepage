import React, { useState } from "react";
import "./user-profile-page.css";

//components
import ProfileSectionLeft from "./profile-section-left";
import ProfileSectionRight from "./profile-section-right";

//image imports
import searchIcon from "../../assets/images/user-profile_search-bar-icon.png";
import homeIcon from "../../assets/images/user-profile-upper-nav-home-icon.png";
import friendsIcon from "../../assets/images/user-profile-upper-nav-friends-icon.png";
import messagesIcon from "../../assets/images/user-profile-upper-nav-messages-icon.png";
import notificationsIcon from "../../assets/images/user-profile-upper-nav-notifications-icon.png";

export default function UserProfilePage() {
  //held states
  const [inputValue, setInputValue] = useState("");

  //handles upper search-bar inputs
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const searchHandler = () => {
    console.log("searched " + inputValue);
    setInputValue("");
  };

  return (
    <React.Fragment>
      <div className="user-profile_upper-nav-link-container">
        <div className="search-bar-container">
          <img className="fp-logo" alt="fp-logo"></img>
          <div className="search-bar">
            <input onChange={inputChangeHandler} value={inputValue}></input>
            <img
              alt="search-icon"
              src={searchIcon}
              onClick={searchHandler}
            ></img>
          </div>
        </div>
        <div className="linked-icons-container">
          <img alt="Home Icon" src={homeIcon} className="icon"></img>
          <img alt="Friends Icon" src={friendsIcon} className="icon"></img>
          <img alt="Messages Icon" src={messagesIcon} className="icon"></img>
          <img
            alt="Notifiations Icon"
            src={notificationsIcon}
            className="icon"
          ></img>
        </div>
      </div>
      <div className="user-profile_page-container">
        <ProfileSectionLeft />
        <ProfileSectionRight />
      </div>
    </React.Fragment>
  );
}
