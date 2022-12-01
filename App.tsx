import * as React from 'react';
import './App.css'; 
import {useState} from "react"; 
import {validateEmail} from "./utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return null
 }; 
 
 const clearForm = () => { 
 }; 
 
 const handleSubmit = (e) => { 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             placeholder="Password" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Role <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="role">Role</option> 
             <option value="individual">Individual</option> 
             <option value="business">Business</option> 
           </select> 
         </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default App; 

/* 

Step 1
Open the App.js file. Convert all the elements from the form to controlled components by adding the value and onChange attributes to each input. Make sure the password input is obscured.

Step 2
Show an error message if the password is less than 8 characters long and the user has interacted with the input at least once. The error message should be displayed below the password input as follows.

For that, a component called PasswordErrorMessage has been provided to you. Your goal is to implement the logic for when to show the error message. The password state is a special one that has an additional property called isTouched. This property is used to determine if the user has interacted with the input or not.

Step 3
Prevent the default behaviour of the form when the user clicks the submit button.

Step 4
Implement the body of getIsFormValid function to return true if the form is valid and false otherwise. This determines the submit button state. The rules for the form to be valid are as follows:

The first name cannot be empty.

The email must be a valid email address and can't be empty. A function called validateEmail has already been provided for you to check if the email is valid. It returns true if the email is valid, otherwise  false is returned.

The password must be at least 8 characters long.

The role must be either individual or business.

Step 5
Implement the body of clearForm function to clear the form state after a successful submission.

Tip
React offers two focus events for form elements: onBlur and onFocus. 

*/

/*

Step 1

The first step involves converting all form elements into controlled components. Since the pieces of local state have been already defined at the top of the component, you just have to assign each state piece to the value prop from each input element. To be able to account for state updates, each input should also define the onChange prop and call the state setter with the value property from the event target as parameter.

The password input is a special case that has an object as state instead of a string. As a result, the state setter should spread the previous values so they don’t get overridden. Finally, to make sure the password characters are obscured, you need to use the type “password” for the input.

Step 2

The isTouched property on the password state was defined to determine when the input was touched at least once. In order to listen for interactions, form inputs have two additional events you can subscribe to: onFocus and onBlur. 

In this scenario, you need to use the onBlur event, which is called whenever the input loses focus, so that guarantees the user has interacted with the password input at least once. In that event, you should set the isTouched property to true with the password state setter.

Then, the condition to display the error message relies on that value being true and a check on the password length to see if it’s less than 8 characters long. If the condition is true, the component PasswordErrorMessage should be rendered.

Step 3

To prevent the default behavior of the form when clicking on the submit button, you have to call preventDefault on the event object, right in your submit handler function.

Step 4

To fulfil the validation rules of the form, the body of the getIsFormValid function should be implemented

Step 5

Finally, to clear the form state after a successful submission, you should set each piece of state to its initial value

*/