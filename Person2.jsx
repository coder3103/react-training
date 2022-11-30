import React from 'react'
import UpdatedComponent from "./HOC"

function Person2({money, handleIncrease}) {
  return (
    <div>
    <h2>John is Offering ${money}</h2>
    <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponent(Person2);