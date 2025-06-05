import React from "react";

function Text() {
  console.log("Text Rerendered");
  return (
    <>
      <h1>UseCallback Hook </h1>
    </>
  );
}

export default React.memo(Text);
