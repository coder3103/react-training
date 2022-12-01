import React from 'react';

function withNumberGenerator(WrappedComponent) {
  function NewComponent() {
    const randomNum = Math.floor(Math.random() * 100);

    return <WrappedComponent {...props} randomNum={randomNum} />;
  }
  return NewComponent;
}

export default withNumberGenerator;
