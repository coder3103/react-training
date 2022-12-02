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