import React, { createContext } from "react";
import CheckOut from "./Components/Chckout.jsx";
import { useState } from "react";
import Login from "./Components/Login.jsx";

export const userContext = createContext(); //Creating Context
function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <userContext.Provider value={{ text, setText }}>
        <Login />
        <CheckOut />
      </userContext.Provider>
    </div>
  );
}

export default App;
