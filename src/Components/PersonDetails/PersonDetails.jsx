import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseList from '../BaseList/BaseList';
import SwapiService from '../../services/swapiService';
import Spinner from '../Spinner';

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
  swapiService = new SwapiService();

  state = {
    character: null,
    loading: false,
  };

  updatePerson() {
    const { personId } = this.props;
    this.swapiService.getPerson(personId).then(character => {
      this.setState({ character, loading: false });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  componentDidMount() {
    this.updatePerson();
  }

  render() {
    if (!this.state.character) {
      return (
        <PersonSection>
          <span>Select a person from a list</span>
        </PersonSection>
      );
    }

    const { loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonCard character={this.state.character} /> : null;

    return <PersonSection>{spinner || content}</PersonSection>;
  }
}

const PersonCard = ({ character }) => {
  const { name, id, gender, birthYear, eyeColor } = character;
  return (
    <>
      <PersonImg
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={`character ${name}`}
      />

      <div style={{ width: '100%' }}>
        <Heading>{name}</Heading>
        <List>
          <li>
            <span>Gender</span>
            <InfoSpan>{gender}</InfoSpan>
          </li>
          <li>
            <span>Birth Year</span>
            <InfoSpan>{birthYear}</InfoSpan>
          </li>
          <li>
            <span>Eye Color</span>
            <InfoSpan>{eyeColor}</InfoSpan>
          </li>
        </List>
      </div>
    </>
  );
};

export default PersonDetails;
