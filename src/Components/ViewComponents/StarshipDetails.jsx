import React from 'react';
import { withSwapiService } from '../hocHelpers';
import DetailsCard, { Record } from '../PersonDetails/DetailsCard';

const StarshipDetails = props => (
  <DetailsCard {...props}>
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </DetailsCard>
);

const mapMethodsToProps = swapiService => ({
  getCard: swapiService.getStarship,
  getImgUrl: swapiService.getStarshipImage,
});

export default withSwapiService(StarshipDetails, mapMethodsToProps);
