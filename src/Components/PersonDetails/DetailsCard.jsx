import React, { Component } from 'react';
import styled from 'styled-components';
import BaseList from '../BaseList/BaseList';
import Spinner from '../Spinner';

const Card = styled.div`
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

const Record = ({ cardItem, field, label }) => {
  return (
    <li>
      <span>{label}</span>
      <InfoSpan>{cardItem[field]}</InfoSpan>
    </li>
  );
};

class DetailsCard extends Component {
  state = {
    cardItem: null,
    image: null,
    loading: true,
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
        <Card>
          <span>Select an item from a list</span>
        </Card>
      );
    }
    const personCard = (
      <>
        <PersonImg className="person-image" src={image} alt={`character ${cardItem.name}`} />

        <div style={{ width: '100%' }}>
          <Heading>{cardItem.name}</Heading>
          <List>
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { cardItem });
            })}
          </List>
        </div>
      </>
    );

    const { loading } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? personCard : null;

    return <Card>{spinner || content}</Card>;
  }
}

const PersonCard = ({ cardItem, image }) => {
  const { name, id, gender, birthYear, eyeColor } = cardItem;
  return (
    <>
      <PersonImg className="person-image" src={image} alt={`character ${name}`} />

      <div style={{ width: '100%' }}>
        <Heading>{name}</Heading>
        <List>{this.props.childen}</List>
      </div>
    </>
  );
};

export default DetailsCard;
export { Record };
