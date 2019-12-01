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
  state = {
    selectedPerson: null,
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  render() {
    return (
      <Wrap>
        <AppHeader />
        <RandomPlanet />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <ItemList onItemSelected={this.onPersonSelected} />
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
