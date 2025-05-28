import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./Students.jsx";
import List from "./list.jsx";
import "./App.css";

function App() {
  let fruits = ["apple", "banana", "mango", "jackfruit", "orange"];
  return (
    <>
      <h1>Fruits</h1>
      <List items={fruits} />
      <Student name="Pallavi" />
      <Student name="Chandu" />
      <Student name="Dhanush" />
      <Student name="Jeevan" />
    </>
  );
}

export default App;
