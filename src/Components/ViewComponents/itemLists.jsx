import React from 'react';
import ItemList from '../ItemList';
import SwapiService from '../../services/swapiService';
import withData from '../hocHelpers/withData';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const withChildFunctions = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const ListWithChildren = withChildFunctions(ItemList);

const PersonList = withData(withChildFunctions(ItemList, renderName), getAllPeople);
const PlanetList = withData(withChildFunctions(ItemList, renderName), getAllPlanets);
const StarshipList = withData(withChildFunctions(ItemList, renderModelAndName), getAllStarships);

export { PersonList, PlanetList, StarshipList };
