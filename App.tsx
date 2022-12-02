import * as React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css'

const getArray = () => {
  for (let i = 0; i < 1000000000; i++) {
    //do something expensive
  }
  return ['Dave', 'Gray'];
}

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [randomInput, setRandomInput] = useState('');

  const fib = (n) => {
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
  }

  const fibNumber = fib(userNumber);

  const myArray = getArray();

  return (
    <main className="App">
      <label>Fibonacci Sequence:</label>
      <input type="number" value={userNumber} placeholder="Position" onChange={(e) => setUserNumber(e.target.value)} />
      <p>Number: {fibNumber || "--"}</p>
      <br /><br />
      <label>Random Input:</label>
      <input type="text" value={randomInput} placeholder="Random Input" onChange={(e) => setRandomInput(e.target.value)} />
      <p>{randomInput}</p>
    </main>
  );
}

export default App;

/*

1. notice how slow it is when tryping in position or random input

2. the first thing to do is to add a useEffect with fibNumber dependancy in the App component

3. wrap the useMemo hook around the fib(userNumber) that is just before the const fibNumber and add a dependancy of userNumber and fib

4. wrap the useCallBack over the (n) => {} function with an empty dependancy and remember the useCallBack is to memonize a function and useMemo is for results

5. now remove fibNumber from the useEffect dependancy and add myArray instead and console.log a message in the useEffect and check the console (every rerender will run the expensive loop)

6. apply useMemo to the getArray function with an empty dependancy for the const myArray

7. useMemo allows for referential equality, which means [] === [] or {} === {} is true with useMemo but false without useMemo

*/