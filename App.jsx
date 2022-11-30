import React from 'react';
import Person1 from "./Person1"
import Person2 from "./Person2"

export function App(props) {
  return (
    <div className='App'>
    <h1>Auction</h1>
    <Person1/>
    <Person2/>
    </div>
  );
}