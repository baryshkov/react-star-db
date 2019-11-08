import React, { Component } from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';

const PlanetImg = styled.img`
  width: 150px;
  height: 150px;
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
  render() {
    return (
      <div className="container">
        <PlanetSection>
          <div className="row start-sm">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2">
              <PlanetImg
                className="planet-image"
                src="https://vignette.wikia.nocookie.net/starwars/images/9/99/Yavin-Battlefront.png"
              />
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Heading>Planet Name</Heading>
              <BaseList>
                <li>
                  <PlanetDataContainer>
                    <PIheading>Population</PIheading>
                    <div>123124</div>
                  </PlanetDataContainer>
                </li>
                <li>
                  <PlanetDataContainer>
                    <PIheading>Rotation Period</PIheading>
                    <div>43</div>
                  </PlanetDataContainer>
                </li>
                <li>
                  <PlanetDataContainer>
                    <PIheading>Diameter</PIheading>
                    <div>100</div>
                  </PlanetDataContainer>
                </li>
              </BaseList>
            </div>
          </div>
        </PlanetSection>
      </div>
    );
  }
}

export default RandomPlanet;
