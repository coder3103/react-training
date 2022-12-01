import * as React from 'react';
import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return null;
};

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
    </div>
  );
};

const PointMouseLogger = () => {
  return (
        <p>
          ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;

/*

Step 1
Open the App.js file.

Complete the implementation of the MousePosition component. Specifically, you'll need to:

Implement the body ofhandleMousePositionChangeinsideuseEffect    

Implement the return statement of the component.

Step 2
Tweak the implementation of PanelMouseLogger. The requirements are:

The component should not receive any props.

The component should not have any if statements.

The component should leverage theMousePosition render prop to show the coordinates in a panel fashion. The panel UI is already provided to you, your goal is to connect the UI with the mouse position data.

Step 3
Tweak the implementation of PointMouseLogger. The requirements are:

The component should not receive any props.

The component should not have any if statements.

The component should leverage theMousePosition render prop to show the coordinates in a point representation. The point UI is already provided to you, your goal is to connect the UI with the mouse position data

Save all the changes and run the app. Preview the updates in the browser, and confirm that the page shows two distinct interfaces that display the safe information (mouse position) in different fashion, one as a panel and another as a point coordinates.

*/

/*

1. Implement the body of handleMousePositionChange

The mousemove handler function receives an event as parameter that contains the mouse coordinates as clientX and clientY properties. Therefore you can provide a position update by calling the state setter setMousePosition with the new values.

2. Implement the return statement of the component

 The MousePosition component receives a render prop, which is the special prop name designed by convention to specify a function that returns some JSX. Since the MousePosition component does not take care of any visualization logic, but rather encapsulates cross-cutting concerns, it should return the result of calling the render function with the mousePosition as an argument. In other words, it’s up to the components that consume MousePosition to specify what sort of UI they want to display when they receive a new value of the mouse position on the screen. 


3.

The PanelMouseLogger component should not receive any props. Hence, the early return from the previous implementation if no props were provided is no longer needed.

Instead, the mousePosition is now injected as the first argument of the render function prop that MousePosition uses. It’s in this render function body where the previous JSX should be extracted and returned. 

4.

Similarly, as in step 2, the component should not receive any props and the early if statement should be removed. The particular UI for this component is provided as part of the render prop as well. 

*/