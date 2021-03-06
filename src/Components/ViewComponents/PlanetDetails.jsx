import React from 'react';
import DetailsCard, { Record } from '../PersonDetails/DetailsCard';
import { withSwapiService } from '../hocHelpers';

const PlanetDetails = props => (
  <DetailsCard {...props}>
    <Record field="climate" label="Climate" />
  </DetailsCard>
);

const mapMethodsToProps = swapiService => ({
  getCard: swapiService.getPlanet,
  getImgUrl: swapiService.getPlanetImage,
});

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
