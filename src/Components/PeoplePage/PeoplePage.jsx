import React, { Component } from 'react';
import styled from 'styled-components';
import ItemList from '../ItemList';
import DetailsCard from '../PersonDetails/DetailsCard';
import SwapiService from '../../services/swapiService';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

const InfoSpan = styled.span`
  padding-left: 1rem;
  float: right;
`;

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 5,
  };

  onPersonSelected = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
        {character => `${character.name} (${character.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <DetailsCard
        itemId={this.state.selectedItem}
        getCard={this.swapiService.getPerson}
        getImgUrl={this.swapiService.getPersonImage}
      />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
