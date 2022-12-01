import * as React from 'react';
import './App.css'

function App() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {

  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Customer data</h1>

    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;

/*

Step 1

Open the App.js file.

Locate the fetchData() function.

Inside the fetchData() function's code block, execute the fetch() function, passing it a single string argument: "https://randomuser.me/api/?results=1".

Step 2
Still inside the fetchData() function, under the fetch() function call, add the following piece of code: .then((response) => response.json())

Step 3
Continuing from the previous step, add another then() call, which takes an arrow function.

The passed-in arrow function should receive a data argument and using that data argument, it should invoke the setUser() function, with the data passed to it.

Step 4
In the return statement of the App component, ou need to add one line of code:

an h2 heading, with the following code inside: Name:{user.results[0].name.first}

Step 5

In Step 4, you updated the return statement of the App component.

In this step, you need to add another line of code under the newly-added h2.

You need to add an img element, with the src attribute holding the following code:

{user.results[0].picture.large}

Additionally, you need to add an alt attribute, as follows: alt="" Remember to self-close the img tag.

*/

/*

Step 1
Inside the fetchData() function's code block, you executed the fetch() function, passing it a single string argument: "https://randomuser.me/api/?results=1".

Step 2
Next, inside the fetchData() function, under the fetch() function call, you added the following piece of code:

const fetchData = () => {
fetch("https://randomuser.me/api/?results=1")
        .then((response) => response.json())
};

Step 3
You then added another then() call, which takes an arrow function.

The passed-in arrow function, receives a data argument, and using that data argument, it invokes the setUser() function, with the data passed to it.

Step 4
In the return statement of the App component, under the h1 heading that reads “Customer data”,  you added an h2 heading, with the following code: Name: {user.results[0].name.first}

Step 5
You then updated the return statement of the App component by adding another line of code under the newly-added h2.

You added an img element, with the src attribute and an alt attribute holding the following code: {user.results[0].picture.large}

*/