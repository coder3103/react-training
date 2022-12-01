import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption

  const RadioOptions = null
  
  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input id={value} type="radio" name={value}/>
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

/*

### **Step 1**

Open the `App.js` file. In there you will already see the desired API for the `RadioGroup` and `RadioOption` components.
At the moment, they don't render anything on the screen. You don't have to change anything in this file, but just understand the set of props involved in the component design.

### **Step 2**

Open the `Radio/index.js` file. Implement the remaining bits for the `RadioGroup` component. The RadioOptions variable is initially set to `null`.
Instead, use `React.Children.map` to iterate over the `children` and clone each child using `React.cloneElement`. The result should be assigned to the `RadioOptions` variable.

Each cloned child should receive two additional props, `checked` and `onChange`.

### **Step 3**

Open the `Radio/index.js` file. The `RadioOption` component is incomplete. In particular, it's missing some props in the input element that it renders: `value`, `checked` and `onChange`.

The `RadioOption` component already receives all those props. Your goal is to connect them to the input element.

When adding the `onChange` prop to the radio input, which represents the event that gets triggered whenever you interact with it, you can access the `value` property of the event target to get the value of the newly selected radio option, as per the code below.

```jsx
const handleChange = (e) => {
  const newValueSelected = e.target.value
}
```

### **Step 4**

Verify that the app works as expected. You should be able to select a radio option and see how the submit button gets enabled as soon as a selection is made.

### **Tips**
The `RadioGroup` component receives the `selected` prop, a string that represents the value of the currently selected radio option.
However, an individual `RadioOption` component only cares about whether it is selected or not, via the boolean`checked` prop.
You would have to perform some small business logic inside the `RadioGroup` component to translate the `selected` prop to the `checked` prop that each `RadioOption` child receives.

*/
