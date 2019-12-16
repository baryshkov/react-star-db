import React from 'react';
import { Consumer } from '../SwapiContext';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return props => (
    <Consumer>
      {swapiService => {
        return <Wrapped {...props} {...mapMethodsToProps(swapiService)} />;
      }}
    </Consumer>
  );
};

export default withSwapiService;