import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../services/swapiService';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import StarshipDetails from '../ViewComponents/StarshipDetails';
import { Provider } from '../SwapiContext';
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

    return (
      <Wrap>
        <ErrorBoundry>
          <Provider value={this.swapiService}>
            <Router>
              <AppHeader />
              {planet}
              <div className="container">
                <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets/" component={PlanetsPage} />
                <Route path="/starships/" exact component={StarshipsPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    return <StarshipDetails itemId={match.params.id} />;
                  }}
                />
              </div>
            </Router>
          </Provider>
        </ErrorBoundry>
      </Wrap>
    );
  }
}

export default App;
