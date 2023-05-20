import React from "react";
import "./post-array.css";

export default function PostsArray(props) {
  return props.postsArray.map((post, index) => {
    return <h1 index={index}>{post.content}</h1>;
  });
}
