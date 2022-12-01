import React from 'react';

import withNumberGenerator from "./withNumberGenerator"

function Hello({randomNum}) {
  return (
    <div>
      <h1>Hello {randomNum} </h1>
    </div>
  );
}

export default withNumberGenerator(Hello);
