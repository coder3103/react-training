import React from "react";

const Expensive = React.memo(() => {
  console.log("expensive compenent rendered!");

  let total = 0;
  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  return <div>Expensive</div>;
});

export default Expensive;