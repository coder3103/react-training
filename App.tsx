import * as React from 'react';

import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App

/*

- make the inital color of the navigation bar blue
- if the navigation bar is clicked, make it purple

solution:

https://github.com/iamshaunjp/React-Firebase/tree/lesson-98/cooking-ninja/src

1. go to ThemeContext and inside the ThemeProvider, create a userReducer with a state and dispatcher and in the useReducer, call a reducer function and pass a object with color that is blue

2. below the useReducer, create a function called changeColor that recieves a param color and will dispatch a type and payload to the reducer function

3. above the ThemeProvider function, create a reducer function that recieves a state and action and use the switch with param action.typ and if the ase is CHANGE_COLOR then return the current state and color is the action.payload

4. in the navbar, import the useTheme and access the color and changeColor function, use the color as tge background color for the div with class navbar and add a onClick to the nav and changes the color to 'purple'


*/