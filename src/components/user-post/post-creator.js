import React from "react";
import "./post-creator.css";
import { useState } from "react";

export default function PostCreator(props) {
  //held states
  const [inputValue, setInputValue] = useState("");

  //gets current date and time of post

  //figure this out after gym
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  //figure this out after gym

  console.log(formatAMPM(new Date()));

  const getDate = () => {
    let dateObject = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let postMonth = monthNames[dateObject.getMonth()];
    let postDayNum = dateObject.getDate();
    let postHour = dateObject.getHours();
    let postMinutes = dateObject.getMinutes();

    return [`${postMonth} ${postDayNum} at ${postHour}:${postMinutes}am`];
  };

  //deals with text post only currently
  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  //resets input, gets date of post, and posts into the 'posts array container' below
  const postSubmissionHandler = () => {
    let dateData = getDate();
    let newfield = { content: inputValue, date: dateData };
    props.setPostsArray([...props.postsArray, newfield]);
    console.log(props.postsArray);
    setInputValue("");
  };

  return (
    <div className="post-creator-container">
      {/* upper: user image / input / post button held here*/}
      <div className="post-creator-upper">
        <img alt="user" src="insertimagehere" />
        <textarea
          placeholder="What's on your mind?"
          value={inputValue}
          onChange={(event) => inputChangeHandler(event)}
        ></textarea>
        {/* button should be grey when blank and blue when ready */}
        <button onClick={postSubmissionHandler}>Post</button>
      </div>
      {/* lower: add image / tag friends / add location held here*/}
      <div className="post-creator-lower">
        <div className="post-bubble-container">
          <button>Photo/Video</button>
        </div>
        <div className="post-bubble-container">
          <button>Tag Friends</button>
        </div>
        <div className="post-bubble-container">
          <button>Check In</button>
        </div>
      </div>
    </div>
  );
}
