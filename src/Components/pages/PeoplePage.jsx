import React, { Component } from 'react';
import styled from 'styled-components';
import ErrorBoundry from '../ErrorBoundry';
import { PersonList, PersonDetails } from '../ViewComponents';
import Row from '../Row';

class PeoplePage extends Component {
  state = {
    selectedItem: 5,
  };

  onItemSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <ErrorBoundry>
        <Row
          left={<PersonList onItemSelected={this.onItemSelected} />}
          right={<PersonDetails itemId={selectedItem} />}
        />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
