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

class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 5,
    hasError: false,
  };


  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPeople}
              renderItem={({ name, gender, birthYear }) => `${name} (${gender} , ${birthYear})`}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default PeoplePage;
