import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import Row from '../Row';
import {
  PersonDetails,
  PersonList,
  PlanetList,
  StarshipList,
  PlanetDetails,
  StarshipDetails,
} from '../ViewComponents';

const Wrap = styled.section`
  margin: 0 2rem;
`;

class App extends Component {
  state = {
    showRandomPlanet: true,
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <Wrap>
        <AppHeader />
        <PersonDetails itemId={1}></PersonDetails>
        <PlanetDetails itemId={7}></PlanetDetails>
        <StarshipDetails itemId={9}></StarshipDetails>

        <PersonList />
        <StarshipList />
        <PlanetList />
        {/*<Row left={personDetails} right={starshipDetails} />*/}
        {planet}
        {/*<PeoplePage />*/}
      </Wrap>
    );
  }
}

export default App;
