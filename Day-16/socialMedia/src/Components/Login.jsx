import React, { useState, useContext } from "react";
import { PostListContext } from "../Store/PostListProvider.jsx";

function Login() {
  const { user, login, logout } = useContext(PostListContext);
  const [username, setUsername] = useState("");

  if (user) {
    return (
      <div>
        <span>Welcome, {user.name}! </span>
        <button className="btn btn-outline-light" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (username.trim()) login(username.trim());
      }}
      className="d-flex"
    >
      <input
        className="form-control form-control-sm me-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-sm btn-outline-light">
        Login
      </button>
    </form>
  );
}

export default Login;
