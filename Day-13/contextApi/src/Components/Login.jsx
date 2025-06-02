import React from "react";
import { userContext } from "../App";
import { useContext, useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const { text, setText } = useContext(userContext);
  function handleVlaue(e) {
    e.preventDefault();
    setText(name);
  }
  return (
    <div>
      <form onSubmit={handleVlaue}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
