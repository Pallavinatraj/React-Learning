import React from "react";

function Input() {
  return (
    <div>
      <input
        type="text"
        placeholder="Type Your Family name"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default Input;
