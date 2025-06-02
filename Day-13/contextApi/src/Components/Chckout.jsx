import React, { useContext } from "react";
import { userContext } from "../App.jsx";

function Chckout() {
  const { text } = useContext(userContext);

  return <div>Hello {text}</div>;
}

export default Chckout;
