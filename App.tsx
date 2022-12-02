import React, {useState, useEffect} from 'react';
import { useFetch } from "./useFetch";
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  function computeLongestWord() {
    if (!data) {
      return [];
    }

    console.log('longest word')
  
    let longestWord = "";
  
    JSON.parse(data).forEach(sentence =>
      sentence.split(" ").forEach(word => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );
  
    return longestWord;
  }

  // START HERE

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={()=> setCount(count + 2)}>Increment</button>
      <div>{computeLongestWord()}</div>
    </div>
  );
}

/*

1. create a new const called longestWord and wrap the useMemo over the function computeLongestWord(data) with a dependancy of data and computeLongestWord

2. move the function computeLognestWord outside of the App component OR keep the function in the App component and wrap the useCallback function over the arr => and empty dependancy 

*/