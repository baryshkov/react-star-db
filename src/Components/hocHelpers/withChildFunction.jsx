import React from 'react';

const withChildFunctions = fn => Wrapped => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

export default withChildFunctions;
