import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../services/swapiService';
import PeoplePage from '../PeoplePage';
import { Provider } from '../SwapiContext';
import Row from '../Row';
import {
  PersonDetails,
  PersonList,
  PlanetList,
  StarshipList,
  PlanetDetails,
  StarshipDetails,
} from '../ViewComponents';
import DetailsCard, { Record } from '../PersonDetails/DetailsCard';
import ErrorBoundry from '../ErrorBoundry';

const Wrap = styled.section`
  margin: 0 2rem;
`;

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const personDetails = (
      <DetailsCard
        itemId={11}
        getCard={this.swapiService.getPerson}
        getImgUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </DetailsCard>
    );

    const starshipDetails = (
      <DetailsCard
        itemId={2}
        getCard={this.swapiService.getStarship}
        getImgUrl={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
      </DetailsCard>
    );
    return (
      <Wrap>
        <ErrorBoundry>
          <Provider value={this.swapiService}>
            <AppHeader />
            <div className="container">
              <PersonDetails itemId={1} />
              <PlanetDetails itemId={7} />
              <StarshipDetails itemId={9} />
            </div>

            <PersonList />
            <StarshipList />
            <PlanetList />
            <Row left={personDetails} right={starshipDetails} />
            {planet}
            {/*<PeoplePage />*/}
          </Provider>
        </ErrorBoundry>
      </Wrap>
    );
  }
}

export default App;
