import React, { useCallback, useState } from "react";
import Text from "./Components/Text.jsx";
import Salary from "./Components/Salary.jsx";
import Age from "./Components/Age.jsx";

function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Text />
      <Age handleAge={handleAge} count={age}></Age>
      <Salary handleSalary={handleSalary} salary={salary}></Salary>
    </>
  );
}

export default App;
