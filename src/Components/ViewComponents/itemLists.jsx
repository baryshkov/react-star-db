import React from 'react';
import ItemList from '../ItemList';
import { withData, withSwapiService, withChildFunctions, compose } from '../hocHelpers';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = swapi => ({
  getData: swapi.getAllPeople,
});

const mapPlanetMethodsToProps = swapi => ({
  getData: swapi.getAllPlanets,
});

const mapStarshipMethodsToProps = swapi => ({
  getData: swapi.getAllStarships,
});

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunctions(renderName),
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunctions(renderName),
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunctions(renderModelAndName),
)(ItemList);

export { PersonList, PlanetList, StarshipList };
