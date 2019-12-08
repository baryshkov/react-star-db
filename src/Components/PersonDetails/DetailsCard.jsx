import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BaseList from '../BaseList/BaseList';
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

class DetailsCard extends PureComponent {
  state = {
    cardItem: null,
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.updateCard();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({ loading: true });
      this.updateCard();
    }
  }

  updateCard() {
    const { itemId, getCard, getImgUrl } = this.props;
    getCard(itemId).then(cardItem => {
      this.setState({ cardItem, image: getImgUrl(cardItem), loading: false });
    });
  }

  render() {
    const { cardItem, image } = this.state;
    if (!cardItem) {
      return (
        <PersonSection>
          <span>Select a person from a list</span>
        </PersonSection>
      );
    }

    const { loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonCard cardItem={cardItem} image={image} /> : null;

    return <PersonSection>{spinner || content}</PersonSection>;
  }
}

const PersonCard = ({ cardItem, image }) => {
  const { name, id, gender, birthYear, eyeColor } = cardItem;
  return (
    <>
      <PersonImg
        className="person-image"
        src={image}
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

export default DetailsCard;
