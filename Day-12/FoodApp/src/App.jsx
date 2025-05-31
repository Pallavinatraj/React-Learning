import React from "react";
import Item from "./Components/Item.jsx";
import Input from "./Components/Input.jsx";
import Container from "./Components/Container.jsx";
import { useState } from "react";

function App() {
  let [foodItems, setfoodItems] = useState([
    "Apple",
    "Banana",
    "PineApple",
    "Sapota",
  ]);
  let [text, setText] = useState("Food");

  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newData = event.target.value;
      event.target.value = "";
      setText(newData);
      let newItem = [...foodItems, newData];
      setfoodItems(newItem);
    }
  };

  return (
    <Container>
      <h1>Healthy Foods</h1>
      <Input handleKeyDown={onKeyDown} />
      <p>{text} is added to Cart</p>
      <Item items={foodItems} />
    </Container>
  );
}

export default App;
