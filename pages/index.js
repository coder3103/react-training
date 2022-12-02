import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Index() {
  const { user } = useContext(UserContext);
    return <h2>Home {user} </h2>
}