import * as React from 'react';
import './style.css';

import { useState, useEffect, useCallback } from "react";

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(0);
    const [num1] = useState(4);
    const [num2] = useState(5);

    const sum = () => num1 + num2;

    useEffect(() => {
        console.log(`New sum: ${sum()}`);
        setResult(sum())
    }, [sum]);

    return (
        <main className="App">
            <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <h1>Output: {userInput || "--"}</h1>
            <h2>{result}</h2>
        </main>
    )
}

export default App

/*

1. notice that when the input changes, the sum is printed even though the value is still the same

2. useCallback with the sum function with a dependancy array of num1 and num2 

*/