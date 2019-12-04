import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import PeoplePage from '../PeoplePage';
import SwapiService from '../../services/swapiService';

const Wrap = styled.section`
  margin: 0 2rem;
`;

class App extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 5,
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    return (
      <Wrap>
        <AppHeader />
        <RandomPlanet />
        <PeoplePage />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPlanets}
                renderItem={item => (<span>{item.name}<button>!</button></span>)}
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>
        </div><div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllStarships}
                renderItem={item => item.name}
              />
            </div>
            <div className="col-xs-12 col-md-6">
              <PersonDetails personId={this.state.selectedPerson} />
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default App;
