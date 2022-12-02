import * as React from 'react';
import './style.css';

import { useState, useEffect, useCallback } from "react";

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [result, setResult] = useState(0);
    const [num1] = useState(4);
    const [num2] = useState(5);

    const sum = useCallback(() => num1 + num2, [num1, num2]);

    useEffect(() => {
        console.log(`New sum: ${sum()}`);
        setResult(sum())
    }, [sum]);

    return (
        <main className="App">
            <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <h1>Output: {userInput || "--"}</h1>
            <h2>{sum}</h2>
        </main>
    )
}


export default App