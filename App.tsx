import * as React from 'react';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Index } from './pages/index';
import { About } from './pages/about';
import { UserContext } from './UserContext';

function App() {
  const [value, setValue ] = useState('Hello')

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={{value, setValue}}>
          <Routes>
            <Route path="/" exact element={<Index />} />
            <Route path="/about" exact element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

/*

- create a context that will show a message in the components it has wrapped around (pass a value to the context provider)
- then instead of the static value, use a useState so that the components have access to the useState
and are able to change the state using a button and it will affect it globally (for the value, pass an object value, setValue )

video: https://www.youtube.com/watch?v=lhMKvyLRWo0
github: https://github.com/benawad/react-hooks-tutorial/blob/7_useContext/src/pages/about.js

*/
