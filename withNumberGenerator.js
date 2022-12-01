import React from 'react';

/*

1. create a HOC function that takes in a component as a param and inside
add another function with no params

2. inside the new function, create a random number and save it to a variable

3. in the same new function, return the passed component with the 
random number prop

4. return the new function and export the HOC function

5. go to Hello.js and pass the random number prop and encase the Hello component with
the HOC

*/

function withNumberGenerator(WrappedComponent) {
  function NewComponent() {
    const randomNum = Math.floor(Math.random() * 100);

    return <WrappedComponent randomNum={randomNum} />;
  }
  return NewComponent;
}

export default withNumberGenerator;
