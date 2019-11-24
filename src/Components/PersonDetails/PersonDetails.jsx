import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseList from '../BaseList/BaseList';

const PersonSection = styled.div`
  display: flex;
  background-color: #5a5a5a;
  border-radius: 3px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const Heading = styled.h3`
  font-size: 1.7rem;
  margin: 1rem 0;
`;

const List = styled(BaseList)`
  min-width: 100%;
`;

const PersonImg = styled.img`
  width: 35%;
  height: 35%;
  margin: 1.3rem;
`;

const InfoSpan = styled.span`
  padding-left: 1rem;
  float: right;
`;

class PersonDetails extends PureComponent {
  render() {
    return (
      <PersonSection>
        <PersonImg
          className="person-image"
          src="https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdb6.png"
          alt="character"
        />

        <div style={{ width: '100%' }}>
          <Heading>R2-D2</Heading>
          <List>
            <li>
              <span>Gender</span>
              <InfoSpan>male</InfoSpan>
            </li>
            <li>
              <span>Birth Year</span>
              <InfoSpan>43</InfoSpan>
            </li>
            <li>
              <span>Eye Color</span>
              <InfoSpan>red</InfoSpan>
            </li>
          </List>
        </div>
      </PersonSection>
    );
  }
}

export default PersonDetails;
