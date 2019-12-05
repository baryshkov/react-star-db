import React, { Component } from 'react';
import styled from 'styled-components';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/swapiService';

const InfoSpan = styled.span`
  padding-left: 1rem;
  float: right;
`;

class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;

    return this.props.children;
  }
}

const Row = ({ left, right }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6">{left}</div>
        <div className="col-xs-12 col-md-6">{right}</div>
      </div>
    </div>
  );
};

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 5,
  };

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} getData={this.swapiService.getAllPeople}>
        {character => `${character.name} (${character.birthYear})`}
      </ItemList>
    );
    const personDetails = <PersonDetails personId={this.state.selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}

export default PeoplePage;
