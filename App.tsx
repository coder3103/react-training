import * as React from 'react';
import './style.css';

import { useState } from "react";

export default function App() {
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
  }

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }
    </div>
  );
}

/*

Step 1
Open the App.js file.

Locate the spendGiftCard() function.

Inside the spendGiftCard() function, invoke the setGiftCard() state-updating function. For now, just invoke it, without passing it any parameters or doing anything else with it.

Step 2
Inside the setGiftCard() function invocation's parentheses, pass in an arrow function.

This arrow function has a single parameter, named prevState. After the arrow, add a block of code (starting with an opening curly brace, and ending with a closing curly brace two lines below).

Step 3
In Step 2, you've added the previous state object as the prevState argument of the arrow function you passed to the setGiftCard() function.

Now you need to return a new object based on this previous state object.

For now, in Step 3, you need to just return a copy of the prevState object.

That means that you need to use the return keyword and a copy of the prevState object, using the rest operator - that is, the ... operator.

Step 4
In Step 3, you returned a copy of the prevState object using the rest operator.

Now you need to combine this copy of the prevState object with those properties that you want updated.

Put differently, you need to update some of the key-value pairs that already exist on the state object that were initially passed to the useState() function call.

For now, in Step 4, update the text property of the state object, as follows:

text: "Your coupon has been used."

Step 5
In Step 4, you've updated the text property on the state object.

In this step, you need to update the remaining properties on the state object.

You need to update the valid key's value to false.

You need to update the instructions key's value to Please visit our restaurant to renew your gift card..

Step 6
Save the changes and run the app.

Verify that the completed app behaves as follows:

Initially, the Spend Gift Card button is showing.

Once you click the Spend Gift Card button, the text property value's update will now show the sentence that reads "Your coupon has been used".

Additionally, the instructions key's value's update will now show the text that reads "Please visit our restaurant to renew your gift card."

Finally, since the valid key's value was updated to false, the button is no longer showing.


*/

/*

Step 1
You opened the App.js file and located the spendGiftCard() function.

Inside the spendGiftCard() function, you invoked the setGiftCard() state-updating function, without passing it any parameters or doing anything else with it.

Step 2
Inside the setGiftCard() function invocation's parentheses, you passed in an arrow function.

This arrow function has a single parameter, named prevState. After the arrow, you added a block of code.

Step 3
Next, you returned a copy of the prevState objectusing the rest operator.

Step 4
Next, you combined this copy of the prevState object with those properties that you wanted updated, by updating some of the key-value pairs that already exist on the state object that were initially passed to the useState() function call.

Step 5
Finally, you updated the remaining properties on the state object.

You updated the valid key's value to false.

Then, updated the instructions key's value to Please visit our restaurant to renew your gift card.

*/