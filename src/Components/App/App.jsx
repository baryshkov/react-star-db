import React, { Component } from 'react';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        <RandomPlanet />
      </div>
    );
  }
}

export default App;
