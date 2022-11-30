import React from 'react'
import UpdatedComponent from "./HOC"

function Person1({money, handleIncrease}) {
  return (
    <div>
    <h2>Jimmy is Offering ${money}</h2>
    <button onClick={handleIncrease}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponent(Person1);