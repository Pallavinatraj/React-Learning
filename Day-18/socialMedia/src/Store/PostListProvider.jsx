import React, { createContext, useReducer, useState } from "react";

const DefaultContext = {
  postList: [],
  addPost: () => {},
  addIntialPost: () => {},
  deletePost: () => {},
  reactToPost: () => {},
  user: null,
  login: () => {},
  logout: () => {},
};

export const PostListContext = createContext(DefaultContext);

const postListner = (currPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "ADD_INTIAL_POST":
      if (currPostList.length > 0) return currPostList;
      return [...action.payload];
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload);
    case "REACT_POST":
      return currPostList.map((post) =>
        post.id === action.payload
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                likes: (post.reactions?.likes ?? 0) + 1,
              },
            }
          : post
      );
    default:
      return currPostList;
  }
};

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListner, []);
  const [user, setUser] = useState(null);

  const addPost = (newPost) => {
    dispatchPostList({ type: "ADD_POST", payload: newPost });
  };

  const addIntialPost = (posts) => {
    dispatchPostList({ type: "ADD_INTIAL_POST", payload: posts });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  const reactToPost = (postId) => {
    dispatchPostList({ type: "REACT_POST", payload: postId });
  };

  const login = (username) => {
    setUser({ id: "user_1", name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        addIntialPost,
        deletePost,
        reactToPost,
        user,
        login,
        logout,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
}

export default PostListProvider;
