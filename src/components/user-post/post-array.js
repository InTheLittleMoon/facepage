import React from "react";
import "./post-array.css";

export default function PostsArray(props) {

  return (
    <div className="posts-array-container">
      <span style={{ fontWeight: "bold" }}>Posts</span>
      {props.postsArray.map((post, index) => {
        return (
          <div index={index} className="post">
            <div className=""></div>
            <h1>{post.content}</h1>
          </div>
        );
      })}
    </div>
  );
}
