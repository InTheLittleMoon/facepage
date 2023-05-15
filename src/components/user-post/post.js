import React from "react";
import "./post.css";
import PostCreator from "./post-creator";

export default function Post() {
  return (
    <div className="user-posts-container">
      {/* this should push out new posts of all types and save them to the user's 'post directory' once backend up */}
      <PostCreator />

      {/* this should map out new posts of all types */}
      <h1>This is a post</h1>
    </div>
  );
}
