import React, { Component } from 'react';
import styled from 'styled-components';

const PlanetContainer = styled.section`
  margin: 2rem;
`;

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
`;

class RandomPlanet extends Component {
  render() {
    return (
      <PlanetContainer>
        <div className="container">
          <PlanetSection>
            <div className="row">
              <div className="col-md-6">
                <PlanetImg
                  className="planet-image"
                  src="https://vignette.wikia.nocookie.net/starwars/images/9/99/Yavin-Battlefront.png"
                />
              </div>

              <div className="col-md-6">
                <h4>Planet Name</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>123124</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span>43</span>
                  </li>
                  <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>100</span>
                  </li>
                </ul>
              </div>
            </div>
          </PlanetSection>
        </div>
      </PlanetContainer>
    );
  }
}

export default RandomPlanet;
