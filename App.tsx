import * as React from 'react';
import './style.css';

import { useMemo, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  const expensiveFunction = (n) => {
    console.log("function running!");
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  };

  const sum = expensiveFunction(number);

  console.log("component rendered!");

  return (
    <div>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
      />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <span>Total: {sum}</span>
    </div>
  );
}

export default App;

/*

1. notice that when the text input changes, the app rerenders and also causes the expensiveFunction to be triggered even though the value is still the same

2. what you need to do is to prevent the function from rerendering and only rerender it if the number actually changes from the input 

3. therefore the console log should say function running! and component rendered when the number changes and component rendered! when the text changes.

*/