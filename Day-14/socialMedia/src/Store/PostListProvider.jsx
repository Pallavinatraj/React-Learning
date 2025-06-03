import React, { createContext, useReducer, useState } from "react";

const DefaultContext = {
  postList: [],
  addPost: () => {},
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
      return [...currPostList, action.payload];
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload);
    case "REACT_POST":
      return currPostList.map((post) =>
        post.id === action.payload
          ? { ...post, reactions: post.reactions + 1 }
          : post
      );
    default:
      return currPostList;
  }
};

const defaultPostList = [
  {
    id: "1",
    title: "Going to Mysore",
    body: "Hey Hi Friends I'm going to Mysore for My vacation",
    reactions: 2,
    userId: "user_1",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to Hassan",
    body: "Hey Hi Friends I'm going to Hassan for My vacation",
    reactions: 3,
    userId: "user_1",
    tags: ["vacation", "Hassan", "Enjoying"],
  },
  {
    id: "3",
    title: "Going to Bangalore",
    body: "Hey Hi Friends I'm going to Bangalore for My vacation",
    reactions: 5,
    userId: "user_1",
    tags: ["vacation", "Bangalore", "Enjoying"],
  },
];

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListner, defaultPostList);
  const [user, setUser] = useState(null);

  const addPost = (newPost) => {
    dispatchPostList({ type: "ADD_POST", payload: newPost });
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
