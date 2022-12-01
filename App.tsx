import * as React from 'react';
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);

  return (
    <div>
      <main className="App" style={{ color: color ? "#FFF" : "#FFF952" }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <br />
        <p>{count}</p>
        <section>
          <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          <button onClick={() => setCount((prev) => prev + 1)}>-</button>
          <button onClick={() => setColor((prev) => !prev)}>Color</button>
        </section>
        <br />
        <br />
        <p>{userInput}</p>
      </main>
    </div>
  );
}

export default App;

/*

- convert all useStates to the useReducer
- use ACTION object below

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor'
}

solution:
https://github.com/gitdagray/usereducer_tut/blob/main/src/App.js

*/