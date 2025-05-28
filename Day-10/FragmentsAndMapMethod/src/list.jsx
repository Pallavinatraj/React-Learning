import React from "react";

function List(props) {
  let { items } = props;
  return (
    <>
      <ul className="list-group gp">
        {items.map((item) => (
          <li key={item} className="list-group-item ">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
