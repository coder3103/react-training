import * as React from 'react';

function DessertsList(props) {
  // Implement the component here.

  const list = props.data.filter(food => {
    return food.calories < 500
  }).sort((a, b) => {
    return a.calories - b.calories;
  }).map(food => {
    return <li>{`${food.name} - ${food.calories} cal`}</li>
  })

  return <ul>{list}</ul>;
}

export default DessertsList;
