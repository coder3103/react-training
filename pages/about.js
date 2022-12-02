import React from "react"

import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function About() {
  const { user } = useContext(UserContext);
    return <h2>About {user} </h2>
}