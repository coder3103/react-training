import * as React from 'react';

function DessertsList(props) {
  // Implement the component here.
  /*
Step 1

You’ll see an empty component that at the moment returns null, resulting in rendering nothing at all.

The DessertsList component receives a prop called data, which is an array containing the list of desserts. You can check the exact shape of the data at the top of the App.js file, under a variable called desserts.

Step 2
Inside the DessertsList  component, remove the null and instead return a ul element that contains a list of li elements, where each li text is a dessert with the following format: ${dessertName} - ${dessertCalories} cal.

The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be excluded. For that you have to use a combination of map, filter and sort array operators.

Step 3
Save all the changes and run the app. Preview the updates in the browser, and confirm that the page shows an ul element with just three li elements as below:

Ice Cream - 200 cal

Tiramisu - 300 cal

Chocolate Cake - 400 cal

Tip
If you’re having trouble with this lab, please review the filter and sort methods from arrays in JavaScript.

Filtering

The first requirement is to display desserts that have less than 500 calories. That means Cheesecake, which has 600 cal, should be omitted. When you need to eliminate elements from your lists based on a certain condition or set of conditions, you need to use the filter() method.

The filter method creates a copy of the array, filtered down to just the elements from the original array that pass the test. In order words, it will return a new list with just the elements that fulfil the condition.

Sorting

The second requirement you have to implement is sorting the list by calories, from low to high or in ascending order. For that, arrays in JavaScript offer the sort() method, which sorts the elements of an array based on a comparison function provided. The return value from that comparison function determines how the sorting is performed

You can chain one operation after another. Recall that filter returns the new array with the filtered down elements, so sort can be chained right after that, as below:

Mapping

Finally, to apply the desired projection and display the information as requested, you can chain the map operator at the end and return a <li> item with the dessert name and its calories, both separated by a dash character, and the word “cal” at the end.

  */

  return null;
}

export default DessertsList;
