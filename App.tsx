import * as React from 'react';
import { useState, useEffect, useRef } from "react";
import './App.css'

export default function App() {
  const [day, setDay] = useState("Monday");
  const prevDay = usePrevious(day);
  const getNextDay = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    } else if (day === "Tuesday") {
      setDay("Wednesday")
    } else if (day === "Wednesday") {
      setDay("Thursday")
    } else if (day === "Thursday") {
      setDay("Friday")
    } else if (day === "Friday") {
      setDay("Monday")
    }
  }
  return (
    <div style={{padding: "40px"}}>
      <h1>
        Today is: {day}<br />
        {
          prevDay && (
            <span>Previous work day was: {prevDay}</span>
          )
        }
      </h1>
      <button onClick={getNextDay}>
        Get next day
      </button>
    </div>
  );
}
function usePrevious(val) {
}

/*

Step 1

Inside the usePrevious() function's code block, invoke the useRef hook without any arguments, and assign this invocation to a variable named ref, declared using the const keyword.

Step 2
Next, inside the usePrevious() function declaration, add a call to the useEffect() hook.

Step 3
Now, pass two parameters, as an argument to the useEffect() call.

The first parameter should be an arrow function that doesn't accept and arguments. Inside the arrow function's body, assign the val value to the current property on the ref object.

The second parameter is the dependencies array. The dependencies array should list a single variable to be tracked - namely, the val variable.

Step 4
Add one more line to the body of the usePrevious() function declaration, specifying the return value of this function.

The usePrevious() function should return the ref.current value.

*/

/*

Step 1

Inside the usePrevious() function's code block, you needed to invoke the useRef hook without any arguments, and assign this invocation to a variable named ref, declared using the const keyword.

Step 2
Next, inside the usePrevious() function declaration, you needed to add a call to the useEffect() hook.

Step 3
Then, you needed to pass two parameters as argumentsto the useEffect() function call.

The first parameter should have been an arrow function, without any arguments. Inside the arrow function's body, you should have assigned the val value to the current property on the ref object.

The second parameter needed to be the dependencies array. The dependencies array needed to list a single variable - namely, the val variable.

Step 4
You needed to add one more line to the body of the usePrevious() function declaration, to specify the return value of that function.

The usePrevious() function should have returned the ref.current value.
*/