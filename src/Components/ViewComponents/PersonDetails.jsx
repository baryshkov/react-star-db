import React from 'react';
import DetailsCard, { Record } from '../PersonDetails/DetailsCard';
import { withSwapiService } from '../hocHelpers';

const PersonDetails = props => {
  return (
    <DetailsCard {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </DetailsCard>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getCard: swapiService.getPerson,
    getImgUrl: swapiService.getPersonImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
