import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorBoundry from '../ErrorBoundry';
import { PlanetList, PlanetDetails } from '../ViewComponents';
import Row from '../Row';

class PlanetsPage extends Component {
  state = {
    selectedItem: 3,
  };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <ErrorBoundry>
        <Row
          left={<PlanetList onItemSelected={this.onItemSelected} />}
          right={<PlanetDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}

export default PlanetsPage;
