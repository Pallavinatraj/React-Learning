import React, { useState } from "react";
import style from "./Item.module.css";

function Item({ items }) {
  const [activeButton, setActiveButton] = useState([]);

  const toggleItem = (item) => {
    setActiveButton((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <>
      {items.map((item) => (
        <ul className="list-group" key={item}>
          <li
            className={`list-group-item foodItems ${
              activeButton.includes(item) ? "active" : ""
            }`}
          >
            <span>{item}</span>
            <button
              className={`${style.button} btn btn-info`}
              onClick={() => toggleItem(item)}
            >
              {activeButton.includes(item) ? "Undo" : "Buy"}
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default Item;
