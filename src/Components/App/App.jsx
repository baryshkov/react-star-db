import React, { Component } from 'react';
import styled from 'styled-components';
import AppHeader from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemList';
import DetailsCard, { Record } from '../PersonDetails/DetailsCard';
import PeoplePage from '../PeoplePage';
import Row from '../Row';
import SwapiService from '../../services/swapiService';

const Wrap = styled.section`
  margin: 0 2rem;
`;

class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const personDetails = (
      <DetailsCard
        itemId={11}
        getCard={this.swapiService.getPerson}
        getImgUrl={this.swapiService.getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </DetailsCard>
    );

    const starshipDetails = (
      <DetailsCard
        itemId={2}
        getCard={this.swapiService.getStarship}
        getImgUrl={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
      </DetailsCard>
    );
    return (
      <Wrap>
        <AppHeader />
        <Row left={personDetails} right={starshipDetails} />
        {planet}
        <PeoplePage />
        {/*<div className="container">*/}
        {/*  <div className="row">*/}
        {/*//     <div className="col-xs-12 col-md-6">*/}
        {/*//       <ItemList*/}
        {/*//         onItemSelected={this.onPersonSelected}*/}
        {/*        getData={this.swapiService.getAllPlanets}*/}
        {/*      >*/}
        {/*        {item => (*/}
        {/*          <span>*/}
        {/*            {item.name}*/}
        {/*//             <button>!</button>*/}
        {/*//           </span>)}*/}
        {/*//       </ItemList>*/}
        {/*    </div>*/}
        {/*    <div className="col-xs-12 col-md-6">*/}
        {/*      <DetailsCard personId={this.state.selectedPerson} />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="container">*/}
        {/*  <div className="row">*/}
        {/*    <div className="col-xs-12 col-md-6">*/}
        {/*      <ItemList*/}
        {/*        onItemSelected={this.onPersonSelected}*/}
        {/*        getData={this.swapiService.getAllStarships}*/}
        {/*      >*/}
        {/*        {item => item.name}*/}
        {/*      </ItemList>*/}
        {/*    </div>*/}
        {/*    <div className="col-xs-12 col-md-6">*/}
        {/*      <DetailsCard personId={this.state.selectedPerson} />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Wrap>
    );
  }
}

export default App;
