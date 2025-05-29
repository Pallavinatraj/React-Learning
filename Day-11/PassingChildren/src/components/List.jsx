import React from "react";
import style from "../components/Container.module.css";

function List({ names }) {
  const handleEvent = (e) => {
    console.log(`${names} is brought`);
  };
  return (
    <>
      {names.map((name) => (
        <li key={name} className="list-group-item">
          <span>{name}</span>
          <button
            className={`${style.button} btn btn-info`}
            onClick={(e) => handleEvent(names)}
          >
            Button
          </button>
        </li>
      ))}
    </>
  );
}

export default List;
