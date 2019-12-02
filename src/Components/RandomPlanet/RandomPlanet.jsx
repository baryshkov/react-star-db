import React, { Component } from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

const PlanetImg = styled.img`
  height: 260px;
  border-radius: 10px;
  margin-right: 1rem;
`;

const PlanetSection = styled.section`
  background-color: #5a5a5a;
  border-radius: 3px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const Heading = styled.h3`
  font-size: 2rem;
  margin: 1rem 0;
`;

const PlanetDataContainer = styled.div`
  display: flex;
`;

const PIheading = styled.h4`
  margin: 0;
  flex: 1 0 60%;
`;

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  onPlanetLoad = planet => {
    const loading = false;
    this.setState({ planet, loading });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor((Math.random() * 18) + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoad)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading && !error ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    return (
      <div className="container">
        <PlanetSection>{spinner || content || errorMessage}</PlanetSection>
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <div className="row start-sm">
      <div className="col-xs-5 col-md-6 col-lg-5">
        <PlanetImg
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Heading>{name}</Heading>
        <BaseList>
          <li>
            <PlanetDataContainer>
              <PIheading>Population</PIheading>
              <div>{population}</div>
            </PlanetDataContainer>
          </li>
          <li>
            <PlanetDataContainer>
              <PIheading>Rotation Period</PIheading>
              <div>{rotationPeriod}</div>
            </PlanetDataContainer>
          </li>
          <li>
            <PlanetDataContainer>
              <PIheading>Diameter</PIheading>
              <div>{diameter}</div>
            </PlanetDataContainer>
          </li>
        </BaseList>
      </div>
    </div>
  );
};

export default RandomPlanet;
