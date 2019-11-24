import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

const Wrap = styled.section`
  margin: 0 2rem;
`;

class App extends Component {
  render() {
    return (
      <Wrap>
        <AppHeader />
        <RandomPlanet />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <ItemList />
            </div>
            <div className="col-xs-12 col-md-6">
              <PersonDetails />
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

export default App;
