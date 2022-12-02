import * as React from 'react';
import './style.css';

import { useEffect, useMemo, useState } from "react";

function App3() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [country, setCountry] = useState("");

  const userType = {
    underAge: age < 18 ? true : false,
    citizen: country === "USA" ? true : false,
  };


  useEffect(() => {
    console.log("user type has changed!");
  }, [userType]);

  console.log("component rendered!");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} placeholder="name" />
      <input
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
        type="number"
      />
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="PL">PL</option>
        <option value="JP">JP</option>
      </select>
    </div>
  );
}

export default App3;

/*

1. notice that the user type message shows when the name changes and the component is rendered everytime a change is made

2. use the useMemo hook to prevent the function from running again if the text input changes and only triggers again if the age or country inputs change

*/