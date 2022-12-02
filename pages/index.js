import React from "react"
import React, { useContext } from "react";
import { UserContext } from "../UserContext";

export function Index() {
  const {value, setValue} = useContext(UserContext);

    return ( 
    <div>
    <h2>Home {value} </h2>
    <button onClick={()=> setValue('HEY')}>Change</button>
    </div>
    );
}