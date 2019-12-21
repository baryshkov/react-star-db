import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorBoundry from '../ErrorBoundry';
import { StarshipList, StarshipDetails } from '../ViewComponents';
import Row from '../Row';

class StarshipsPage extends Component {
  state = {
    selectedItem: 9,
  };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <ErrorBoundry>
        <Row
          left={<StarshipList onItemSelected={this.onItemSelected} />}
          right={<StarshipDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}

export default StarshipsPage;
