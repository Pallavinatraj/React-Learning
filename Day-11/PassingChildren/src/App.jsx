import React from "react";
import List from "./components/List.jsx";
import Container from "./components/Container.jsx";
import Input from "./components/Input.jsx";

function App() {
  let names = [
    "Jayaram",
    "Sharadha",
    "Natraju",
    "Sunanda",
    "Pallavi",
    "Chandu",
    "Dhanush",
    "Jeevan",
  ];
  return (
    <>
      <Input />
      <Container>
        <h1>Family Name</h1>
        <ul className="list-group">
          <List names={names} />
        </ul>
      </Container>
      <Container>
        <p>Above are the list of My Family Names</p>
      </Container>
    </>
  );
}

export default App;
