import React from "react";

function Salary({ handleSalary, salary }) {
  console.log("Salary Rerendered");
  return (
    <>
      <h1>Your Salary : {salary}</h1>
      <button onClick={handleSalary}>Increase your salary </button>
    </>
  );
}

export default React.memo(Salary);
