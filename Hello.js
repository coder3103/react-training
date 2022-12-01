import React from 'react';

import withNumberGenerator from "./withNumberGenerator"

function Hello() {
  return (
    <div>
      <h1>Hello {randNum} </h1>
    </div>
  );
}

export default withNumberGenerator(Hello);
