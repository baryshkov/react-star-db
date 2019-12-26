import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundry from '../ErrorBoundry';
import { PersonList, PersonDetails } from '../ViewComponents';
import Row from '../Row';

const PeoplePage = ({ match, history }) => {
  const id = match.params.id;
  return (
    <ErrorBoundry>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
