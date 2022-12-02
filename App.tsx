import * as React from 'react';
import './style.css';

import { useState } from "react";
import Expensive from "./Expensive";

function App4() {
    const [name, setName] = useState("");

    return (
      <div>
        <input onChange={(e) => setName(e.target.value)} placeholder="name" />
        <Expensive />
      </div>
    );
  }

export default App4;

/* 

1. notice that when the input changes, it needs to rerender the Expensive component again and
takes a long time

2. use the React.memo in the Expensive component to prevent multiple rerenders with no dependancy

*/