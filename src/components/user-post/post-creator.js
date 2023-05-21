import React from "react";
import "./post-creator.css";
import { useState } from "react";

export default function PostCreator(props) {
  //held states
  const [inputValue, setInputValue] = useState("");

  const inputChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const postSubmissionHandler = () => {
    console.log(props.postsArray);
    let newfield = { content: inputValue };
    props.setPostsArray([...props.postsArray, newfield]);
    console.log(props.postsArray);
    console.log("InputValue: " + inputValue);
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
