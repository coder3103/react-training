import React from "react"
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function About() {
  const {value, setValue} = useContext(UserContext);
    return 
    ( 
    <div>
    <h2>About {value} </h2>
    <button onClick={()=> setValue('BYE')}>Change</button>
    </div>
    );
}