import React from 'react';
import SwapiService from '../../services/swapiService';
import DetailsCard, { Record } from '../PersonDetails/DetailsCard';

const swapiService = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <DetailsCard itemId={itemId} getCard={getPerson} getImgUrl={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </DetailsCard>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <DetailsCard itemId={itemId} getCard={getPlanet} getImgUrl={getPlanetImage}>
      <Record field="climate" label="Climate" />
    </DetailsCard>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <DetailsCard itemId={itemId} getCard={getStarship} getImgUrl={getStarshipImage}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </DetailsCard>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
