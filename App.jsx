import React from 'react'
import "./App.css";
import { useEffect, useState } from "react";

/*

1. create a HOR called withMousePosition and takes in commponent 
params called WrappedComponent

2. inside the HOC, return (props) => {} and inside
include a state called mousePosition which holds an object with x: 0, y:0

3. still inside the return, create a useeEffect that includes
a function called handleMousePositionChange with param e and will
set mousePosition state to x: e.clientX, y: e.clientY

4. still inside the useEffect, create a window.addEventListener() and
includes param "mousemove" and the function handleMousePositionChange;

5. below number 4, write a return () => {} and removes the event listener 
from number 4 and add an empty dependency for the useEffect

6. after the useEffect and still inside the withMousePosition function, 
return <WrappedComponent {...props} mousePosition={mousePosition} />

*/

/*

7. create a new function component called PanelMouseLoger and recieves a
prop called mousePosition

8. inside the component, if the mousePosition is not true, return null

9. below the if, return 

    <div className="BasicTracker">
      <p>Mouse position:</p>
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
    </div>

*/

/*

10. create a new function component called PointMouseLogger and recieves a
prop called mousePosition

11. inside the component, if the mousePosition is not true, return null

12. below the if, return 

        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>


13. below the component, pass the two function components above into
the HOC withMousePosition and save each one to a new const variable 

14. add those new enhanced components into the App component under the <header>

*/

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
    </div>
  );
}

export default App;