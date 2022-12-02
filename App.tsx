import React, {useState} from 'react';
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
  
    console.log("computing longest word");
  
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

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={()=> setCount(count + 2)}>Increment</button>
      <div>{computeLongestWord}</div>
    </div>
  );
}
