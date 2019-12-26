import React from 'react';
import ErrorBoundry from '../ErrorBoundry';
import { StarshipList } from '../ViewComponents';
import { withRouter } from 'react-router-dom';

const StarshipsPage = ({ match, history }) => {
  return (
    <ErrorBoundry>
      <StarshipList
        onItemSelected={itemId => {
          history.push(itemId);
        }}
      />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipsPage);


