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

1. create a context that will wrap around the entire App component and pass a value that is an object with key color and value blue

2. now that each component has access to the context, use the context and extract the color  to change the navbar background to blue (import useContext)

3. instead of the ThemeContext.Provider wrapping the App, in your ThemeContext component,  create a function called ThemeProvider and will receive children prop and in its return, it will use the ThemeContext.Provider with the value object key color and vlaue blue and between it is the children and wrap the App with the ThemeProvider instead

4. now try to create a hook called useTheme that will utilize the useContext hook with the ThemeContext
and it will return the new variable that is assigned from useContext and make sure to check
that if the new variable is undefined, then throw a message

5. now import the useTheme hook into the navbar and deconstruct to get the color 

*/