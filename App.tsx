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

1. in the ThemeContext file, create an export const called ThemeContext and is assigned the createContext() 

2. below, create and export a function called ThemeProvider that receives a children prop and inside the function, return the ThemeContext.Provider with a value object of color blue and between the provider tags, add the children prop

3. in the useTheme file, import the useContext and ThemeContext and create an export const called useTheme that is an arrow function

4. inside the function, extract the value from ThemeContext using the useContext and call it const context

5. if the context is undefined, then throw new Error('message') and then return the context

6. in the navbar file, import the useTheme hook and extract the color from the hook and use the color as the background color for the div with navbar class

7. don't forget to wrap the ThemeProvider over the App component in index.js

*/