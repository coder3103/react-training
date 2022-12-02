import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Index } from "./pages/index";
import { About } from "./pages/about";

function App() {
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
        <Routes>
          <Route path="/" exact element={<Index/>} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
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

1. in the UserContext, create and export a context called UserContext and created by using the createContext(null)

2. in the App.tsx, make sure to import the new context and use its provider around the routes-> route

3. in App.tsx, create a useState and pass its value and function in the provider 

4. in eachc page, deconstruct the value and function from the context using useContext and show the value on the page and create a button that will change the value of the state when clicked and do the same for both pages

*/