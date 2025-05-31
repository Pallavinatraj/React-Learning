import React, { useState } from "react";

function Input({ handleKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Add Your Healthy Foods "
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

export default Input;
