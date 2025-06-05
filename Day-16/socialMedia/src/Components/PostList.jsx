import React, { useContext, useEffect, useState } from "react";
import Post from "./Post.jsx";
import { PostListContext } from "../Store/PostListProvider.jsx";
import WelecomeMessage from "./WelecomeMessage.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";

function PostList() {
  const { postList, addIntialPost } = useContext(PostListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController(); //Abort ----> Cancel fetch
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        addIntialPost(data.posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });

    return () => {
      console.log("Cleaning  up UseEffect"); //The useEffect cleanUp
      controller.abort();
    };
  }, []);

  const handleGetPost = () => {};

  return (
    <div className="posts-wrapper">
      {loading && <LoadingSpinner />}
      {postList.length === 0 && <WelecomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
