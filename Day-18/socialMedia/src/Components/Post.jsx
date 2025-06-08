import React, { useContext } from "react";
import { PostListContext } from "../Store/PostListProvider.jsx";

function Post({ post }) {
  const { reactToPost, deletePost, user } = useContext(PostListContext);
  const likes = post.reactions?.likes ?? 0;

  return (
    <div
      className="card post_card"
      style={{ width: "18rem", marginBottom: "1rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p>
          Tags:{" "}
          {post.tags?.map((tag, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: "#e1e1e1",
                borderRadius: "5px",
                padding: "2px 6px",
                marginRight: "4px",
                fontSize: "12px",
              }}
            >
              {tag}
            </span>
          ))}
        </p>

        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => reactToPost(post.id)}
        >
          React 👍 ({likes})
        </button>

        {user && user.id === post.userId && (
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => deletePost(post.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
