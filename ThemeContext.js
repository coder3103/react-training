import * as React from 'react';

import { useState } from "react";

/*

Step 1

Create a ThemeContext object using React.createContext().

Implement the ThemeProvider component. It should accept a children prop and return a ThemeContext.Provider component. The ThemeContext.Provider receives an object as its value prop, with a theme string and a toggleTheme function.

toggleTheme should toggle the theme between light and dark.

Step 2
Implement the useTheme hook. It should return the theme and toggleTheme values from the ThemeContext.

Step 3
Open the Switch/index.js file. Add an onChange prop to the input element and pass a callback function, as the event handler, to change the theme. You don’t need to use the event argument in this case.

Step 4
Verify that the app works as expected. You should be able to toggle the theme between light and dark. Notice how the background color of the page changes, as well as the color of the text.

*/

/*

Step 1

To create the ThemeProvider, the first step is to create a new context object, ThemeContext, using createContext, a function that can be imported from React. The default value argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. For the purpose of this exercise, it’s not relevant, so undefined can be used.

Then, inside the ThemeProvider component, you need to define a new piece of local state for the theme, which can be a string whose value is either “light” or “dark”. It can be initialized to “light”, which is usually the default theme for applications.

In the return statement, the ThemeContext.Provider  component should be rendered and wrap the children.

Finally, recall that the value prop for ThemeContext.Provider is what gets injected down the tree as context. Since the application needs both the theme value and a way to toggle it, two values are injected: theme and toggleTheme.

theme is just the light-dark theme string value, whereas toggleTheme is a function that receives no parameters and just toggles the theme from light to dark and vice versa.

Step 2

The implementation for useTheme is quite simple. You just need to import the useContext hook from React and pass as an argument the ThemeContext object defined before. That allows your components to access both theme and toggleTheme values, which are the ones the useTheme custom hook returns.

Step 3

The Switch component can then be connected to the toggleTheme function returned from useTheme.

Step 4

And, finally, you should be able to use the switch widget on the top right corner to change the theme of the application.

*/