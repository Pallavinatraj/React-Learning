import React, { useContext, useRef, useState } from "react";
import { PostListContext } from "../Store/PostListProvider.jsx";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const navigate = useNavigate();

  const [alertMsg, setAlertMsg] = useState("");

  const { addPost } = useContext(PostListContext);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(",").map((tag) => tag.trim());

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        const uniquePost = {
          ...post,
          id: Date.now(), // generate unique id based on timestamp
        };
        addPost(uniquePost);

        setAlertMsg("✅ Post created successfully!");

        // Optionally clear inputs
        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        // Navigate after showing alert for 3 seconds
        setTimeout(() => {
          setAlertMsg("");
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error creating post:", error);
        setAlertMsg("❌ Failed to create post. Please try again.");
        setTimeout(() => setAlertMsg(""), 3000);
      });
  };

  return (
    <form className="p-3 border rounded bg-light" onSubmit={handleOnSubmit}>
      {alertMsg && (
        <div className="alert alert-success" role="alert">
          {alertMsg}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="userIdInput" className="form-label">
          Enter Your UserId
        </label>
        <input
          type="text"
          className="form-control"
          id="userIdInput"
          placeholder="UserId"
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="titleInput" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="titleInput"
          placeholder="Title"
          ref={postTitleElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="messageInput" className="form-label">
          Your Message
        </label>
        <textarea
          className="form-control"
          id="messageInput"
          rows="3"
          ref={postBodyElement}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactionsInput" className="form-label">
          Enter Your Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactionsInput"
          placeholder="Reactions"
          ref={reactionsElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tagsInput" className="form-label">
          Enter Your HashTags (comma separated)
        </label>
        <input
          type="text"
          className="form-control"
          id="tagsInput"
          placeholder="e.g. coding,reactjs"
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Create
      </button>
    </form>
  );
}

export default CreatePost;
