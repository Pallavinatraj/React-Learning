import React from "react";

function Age({ handleAge, count }) {
  console.log("Age Rerendered");
  return (
    <>
      <h1>Your Age :{count} </h1>
      <button onClick={handleAge}>Increase tour Age </button>
    </>
  );
}

export default React.useMemo(Age);
