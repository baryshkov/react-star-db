import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';

const Wrap = styled.section`
  margin: 0 2rem;
`;

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Wrap>
          <AppHeader />
          <RandomPlanet />
          <div className="container">
            <div className="row">
              <ItemList />
              <ItemList />
            </div>
          </div>
        </Wrap>
      </div>
    );
  }
}

export default App;
