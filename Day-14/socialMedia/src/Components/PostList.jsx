import React, { useContext } from "react";
import Post from "./Post.jsx";
import { PostListContext } from "../Store/PostListProvider.jsx";

function PostList({}) {
  const { postList } = useContext(PostListContext);
  console.log(postList);
  return (
    <div className="posts-wrapper">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
