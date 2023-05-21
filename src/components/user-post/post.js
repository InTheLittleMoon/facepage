import React, { useState } from "react";
import "./post.css";

//components
import PostCreator from "./post-creator";
import PostsArray from "./post-array";

export default function Post() {
  const [postsArray, setPostsArray] = useState([
    { content: "Gabe" },
  ]);
  return (
    <div className="user-posts-container">
      {/* this should push out new posts of all types and save them to the user's 'post directory' once backend up */}
      <PostCreator postsArray={postsArray} setPostsArray={setPostsArray} />

      {/* this should map out new posts of all types */}
      <PostsArray postsArray={postsArray} />
    </div>
  );
}
