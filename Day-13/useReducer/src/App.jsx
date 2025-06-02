import React from "react";
import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reduce, 0);

  function reduce(state, action) {
    if (action.type == "Increment") {
      return state + action.payload;
    }
    if (action.type == "Decrement") {
      return state - action.payload;
    }
    return state;
  }

  return (
    <div>
      <h1>Counter is {state}</h1>
      <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}

export default App;
